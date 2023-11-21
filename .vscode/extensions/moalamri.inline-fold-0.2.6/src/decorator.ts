import { Position, Range, TextEditor, WorkspaceConfiguration, DecorationOptions } from "vscode";
import { Cache } from "./cache";
import { DecoratorTypeOptions } from "./decoration";
import { Settings } from "./enums";
import { ExtSettings } from "./settings";
import { isMainEditor, isOpenedWithDiffEditor } from "./utils";

export class Decorator {
  // DTOs is just a short name for DecoratorTypeOptions,
  // nothing to do with data transfer objects.
  DTOs = new DecoratorTypeOptions();
  CurrentEditor: TextEditor;
  ParsedRegexString: string;
  SupportedLanguages: string[] = [];
  Offset: number = 50;
  StartLine: number = 0;
  EndLine: number = 0;

  /**
  * To set/update the current visible text editor.
  * @param textEditor TextEditor
  */
  editor(textEditor: TextEditor) {
    if (!textEditor) return;
    this.CurrentEditor = textEditor;
    this.startLine(textEditor.visibleRanges[0].start.line);
    this.endLine(textEditor.visibleRanges[0].end.line);
    this.updateDecorations();
  }

  /**
  * Set the number of the starting line of where the decoration should be applied.
  * @param n number
  */
  startLine(n: number) {
    if (n - this.Offset < 0) {
      this.StartLine = 0;
    } else {
      this.StartLine = n - this.Offset;
    }
  }

  /**
  * Set the number of the ending line of where the decoration should be applied.
  * @param n number
  */
  endLine(n: number) {
    if (n + this.Offset > this.CurrentEditor.document.lineCount) {
      this.EndLine = this.CurrentEditor.document.lineCount;
    } else {
      this.EndLine = n + this.Offset;
    }
  }

  /**
  * This method gets triggered when the extension settings are changed
  * @param extConfs: Workspace configs
  */
  updateConfigs(extConfs: WorkspaceConfiguration) {
    ExtSettings.Update(extConfs);
    this.SupportedLanguages = ExtSettings.GetSupportedLanguages();
    this.DTOs.ClearCache();
  }

  updateDecorations() {
    const currentLangId = this.CurrentEditor.document.languageId

    if (!this.SupportedLanguages.includes(currentLangId)) {
      return;
    }

    const disableInDiffEditor = ExtSettings.Get<boolean>(Settings.disableInDiffEditor, currentLangId);
    if (disableInDiffEditor) {
      if (
        !isMainEditor(this.CurrentEditor) // Idea from: https://github.com/usernamehw/vscode-error-lens/issues/72#issuecomment-1062046817
        && isOpenedWithDiffEditor(this.CurrentEditor.document.uri)
      ) {
        return;
      }
    }

    const regEx: RegExp = ExtSettings.Regex(currentLangId);
    const unFoldOnLineSelect = ExtSettings.Get<boolean>(Settings.unfoldOnLineSelect, currentLangId);
    const text = this.CurrentEditor.document.getText();
    const regexGroup: number = ExtSettings.Get<number>(Settings.regexGroup, currentLangId) as number | 1;
    const matchDecorationType = this.DTOs.MaskDecorationTypeCache(currentLangId);
    const plainDecorationType = this.DTOs.PlainDecorationType();
    const unfoldDecorationType = this.DTOs.UnfoldDecorationType(currentLangId);
    const foldRanges: DecorationOptions[] = [];
    const unfoldRanges: Range[] = [];

    let match;
    while (match = regEx.exec(text)) {

      // if the matched content is undefined, skip it and continue to the next match
      if (match && !match[regexGroup]) continue;

      const matched = match[regexGroup];
      const foldIndex = match[0].lastIndexOf(matched);
      const startPosition = this.startPositionLine(match.index, foldIndex);
      const endPosition = this.endPositionLine(match.index, foldIndex, matched.length);
      const range: Range = new Range(startPosition, endPosition);

      /* Checking if the toggle command is active or not. without conflicts with default state settings.
         If it is not active, it will remove all decorations. */
      if (!Cache.ShouldFold(this.CurrentEditor.document.uri.path, currentLangId)) {
        this.CurrentEditor.setDecorations(plainDecorationType, []);
        break;
      }

      /* Checking if the range is within the visible area of the editor plus a specified offset for a head decoration. */
      if (!(this.StartLine <= range.start.line && range.end.line <= this.EndLine)) {
        continue;
      }

      /* Checking if the range is selected by the user.
      first check is for single selection, second is for multiple cursor selections.
      or if the user has enabled the unfoldOnLineSelect option. */
      if (this.CurrentEditor.selection.contains(range) ||
        this.CurrentEditor.selections.find(s => range.contains(s)) ||
        unFoldOnLineSelect && this.CurrentEditor.selections.find(s => s.start.line === range.start.line)) {
        unfoldRanges.push(range);
      } else {
        foldRanges.push({ range, hoverMessage: "Content **" + matched + "**" });
      }
    }

    this.CurrentEditor.setDecorations(unfoldDecorationType, unfoldRanges);
    this.CurrentEditor.setDecorations(
      matchDecorationType,
      foldRanges
    )
  }

  startPositionLine(matchIndex: number, startIndex: number): Position {
    return this.CurrentEditor.document.positionAt(
      matchIndex + startIndex
    );
  }

  endPositionLine(matchIndex: number, startIndex: number, length: number): Position {
    return this.CurrentEditor.document.positionAt(
      matchIndex + startIndex + length
    );
  }

  constructor () { }
}
