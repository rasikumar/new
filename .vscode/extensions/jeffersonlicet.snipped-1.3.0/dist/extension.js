/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("vscode");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SIGNALS = void 0;
var SIGNALS;
(function (SIGNALS) {
    SIGNALS["end"] = "end";
})(SIGNALS = exports.SIGNALS || (exports.SIGNALS = {}));


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.copyText = void 0;
const vscode = __webpack_require__(1);
const commands_1 = __webpack_require__(5);
async function copyText() {
    const { activeTextEditor } = vscode.window;
    if (!activeTextEditor) {
        return;
    }
    const selection = activeTextEditor.selection;
    if (!selection || selection.isEmpty) {
        (0, commands_1.selectAll)();
    }
    await (0, commands_1.copySelection)();
}
exports.copyText = copyText;


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.copySelection = exports.selectAll = void 0;
const vscode = __webpack_require__(1);
function command(command) {
    return vscode.commands.executeCommand(command);
}
function selectAll() {
    const { activeTextEditor } = vscode.window;
    if (!activeTextEditor) {
        return;
    }
    const { lineCount } = activeTextEditor.document;
    const firstLine = activeTextEditor.document.lineAt(0);
    const lastLine = activeTextEditor.document.lineAt(lineCount - 1);
    activeTextEditor.selection = new vscode.Selection(firstLine.lineNumber, firstLine.range.start.character, lastLine.lineNumber, lastLine.range.end.character);
}
exports.selectAll = selectAll;
function copySelection() {
    return command("editor.action.clipboardCopyWithSyntaxHighlightingAction");
}
exports.copySelection = copySelection;


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.onEndSignal = void 0;
const vscode = __webpack_require__(1);
/**
 * onEndSignal Hook
 * @param editor
 * @param prevState
 */
async function onEndSignal(editor, { selection, clipboard }) {
    if (clipboard) {
        await vscode.env.clipboard.writeText(clipboard);
    }
    if (selection) {
        editor.selection = selection;
    }
    else {
        const { end } = editor.selection;
        editor.selection = new vscode.Selection(end, end);
    }
}
exports.onEndSignal = onEndSignal;


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.read = exports.generateInternalUri = void 0;
const fs_1 = __webpack_require__(8);
const path = __webpack_require__(2);
const vscode = __webpack_require__(1);
function generateInternalUri(extensionPath, value) {
    return vscode.Uri.file(path.join(extensionPath, "resources", value));
}
exports.generateInternalUri = generateInternalUri;
function read(path) {
    return new Promise((resolve, reject) => (0, fs_1.readFile)(path, "utf-8", (err, data) => {
        if (err) {
            return reject(err);
        }
        resolve(data);
    }));
}
exports.read = read;


/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("fs");

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.placeholders = void 0;
exports.placeholders = [
    { key: "__CSS_BASE_PATH__", value: "app.css" },
    { key: "__JS_BASE_PATH__", value: "app.js" },
    { key: "__LIB_BASE_PATH__", value: "../node_modules/dom-to-image-more/dist/dom-to-image-more.min.js" },
    { key: "__IMAGE__", value: "" },
];


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deactivate = exports.activate = void 0;
const vscode = __webpack_require__(1);
const path = __webpack_require__(2);
const signals_1 = __webpack_require__(3);
const text_1 = __webpack_require__(4);
const hooks_1 = __webpack_require__(6);
const html_1 = __webpack_require__(7);
const placeholders_1 = __webpack_require__(9);
const fs_1 = __webpack_require__(8);
function activate(context) {
    const disposable = vscode.commands.registerCommand("snipped.start", async () => {
        let log = vscode.window.createOutputChannel("snipped");
        try {
            const prevState = {};
            const { activeTextEditor: editor } = vscode.window;
            if (!editor) {
                return;
            }
            prevState.clipboard = await vscode.env.clipboard.readText();
            prevState.selection = editor.selection;
            await (0, text_1.copyText)();
            const contentPath = path.resolve(context.extensionPath, "resources", "index.html");
            const panel = vscode.window.createWebviewPanel("snipped-tab", "Snipped", {
                viewColumn: vscode.ViewColumn.Beside,
                preserveFocus: false,
            }, {
                enableScripts: true,
                localResourceRoots: [vscode.Uri.file(context.extensionPath)],
            });
            const { enableLogo, enablePng, autoCopy, disableTitle, scale } = vscode.workspace.getConfiguration("snipped", null);
            panel.webview.onDidReceiveMessage(async ({ type, data, message }) => {
                if (type === signals_1.SIGNALS.end) {
                    (0, hooks_1.onEndSignal)(editor, prevState);
                }
                if (type === "beer") {
                    vscode.window
                        .showInformationMessage("Buy me a beer by sending some crypto to my BSC address", "Sure!", "No")
                        .then(async (answer) => {
                        if (answer === "Sure!") {
                            await vscode.env.clipboard.writeText("0x8340ACeF21D1fAE94305ad580B963b3f5283F1AC");
                            vscode.env.openExternal(vscode.Uri.parse('https://bscscan.com/address/0x8340ACeF21D1fAE94305ad580B963b3f5283F1AC'));
                        }
                    });
                }
                if (type === "message") {
                    vscode.window.showInformationMessage(message);
                }
                if (type === "copied") {
                    vscode.window.showInformationMessage("Snipped copied");
                }
                if (type === "tweet") {
                    const res = await vscode.window.showInformationMessage("The snipped is copied in your clipboard. Click Compose Tweet and paste it on the Twitter Composer for sharing it as an image.", "Cancel", "Compose Tweet");
                    if (res === "Compose Tweet") {
                        vscode.env.openExternal(vscode.Uri.parse(`https://twitter.com/intent/tweet`));
                    }
                }
                if (type === "download") {
                    const uri = await vscode.window.showSaveDialog({
                        // eslint-disable-next-line @typescript-eslint/naming-convention
                        filters: { Images: [enablePng ? "png" : "svg"] },
                    });
                    if (uri) {
                        (0, fs_1.writeFile)(uri.fsPath, Buffer.from(data, enablePng ? "base64" : "utf-8"), (err) => {
                            if (!err) {
                                vscode.window.showInformationMessage("Snipped saved");
                            }
                        });
                    }
                }
            });
            let html = await (0, html_1.read)(contentPath);
            const replacements = placeholders_1.placeholders.map(({ key, value }) => ({
                key,
                value: panel.webview
                    .asWebviewUri((0, html_1.generateInternalUri)(context.extensionPath, value))
                    .toString(),
            }));
            const data = {
                start: (editor.selection ? editor.selection.start.line : 0) + 1,
                end: editor.selection
                    ? editor.selection.end.line
                    : editor.document.lineCount,
                fileName: disableTitle
                    ? ""
                    : editor.document.fileName.split(path.sep).pop(),
                lang: editor.document.languageId,
                enableLogo,
                enablePng,
                autoCopy,
                scale,
            };
            // I know
            replacements.push({
                key: "__DATA_PLACEHOLDER__",
                value: JSON.stringify(JSON.stringify(data)),
            });
            replacements.forEach(({ key, value }) => {
                html = html.replace(key, value);
            });
            html = html.replace(/__CSP_SOURCE__/g, panel.webview.cspSource);
            panel.webview.html = html;
        }
        catch (e) {
            log.append("Error when performing extension task");
            console.log(e);
        }
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=extension.js.map