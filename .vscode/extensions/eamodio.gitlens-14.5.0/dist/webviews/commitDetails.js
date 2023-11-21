var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};void 0!==e&&Object.defineProperty(e,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}});var t={};e.d(t,{b:()=>Rn,F:()=>Dn});class o{constructor(e,t=!1){this.method=e,this.reset=t}}class n extends o{}class i extends o{}function r(e,t,o){e.method===t.method&&o(t.params,e)}const s=new n("webview/ready"),a=new n("webview/focus"),c=new n("command/execute");new n("configuration/preview"),new n("configuration/update"),new i("configuration/didChange"),new i("configuration/didPreview"),new i("webview/didOpenAnchor");const l=new n("commit/actions"),h=new n("commit/file/actions"),d=new n("commit/file/open"),u=new n("commit/file/openOnRemote"),p=new n("commit/file/compareWorking"),f=new n("commit/file/comparePrevious"),b=new n("commit/file/stage"),m=new n("commit/file/unstage"),g=new n("commit/pickCommit"),v=new n("commit/searchCommit"),y=new n("commit/switchMode"),w=new n("commit/autolinkSettings"),k=new n("commit/explain"),$=new n("commit/pin"),x=new n("commit/navigate"),_=new n("commit/preferences/update"),A=new n("commit/wip/createPatch"),C=new i("commit/didChange",!0),S=new i("commit/didChange/wip"),E=new i("commit/didExplain");function P(e,t){let o,n,i,r,s;function a(e){const o=e-(n??0);return null==n||o>=t||o<0}function c(){const e=Date.now();if(a(e))l();else{s=setTimeout(c,t-(e-(n??0)))}}function l(){return s=void 0,o?function(){const t=o,n=i;return o=i=void 0,r=e.apply(n,t),r}():(o=i=void 0,r)}function h(...e){const l=Date.now(),h=a(l);return o=e,i=this,n=l,h&&null==s?(s=setTimeout(c,t),r):(null==s&&(s=setTimeout(c,t)),r)}return h.cancel=function(){null!=s&&clearTimeout(s),o=n=i=s=void 0},h.flush=function(){return null!=s?l():r},h.pending=function(){return null!=s},h}const O="";const M=new class{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,o=!1){this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=D(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=D(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output=this.output??this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??O}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??O}${this.toLoggableParams(!0,t)}`)}error(e,t,...o){if(this.level<1&&!this.isDebugging)return;let n;if(n=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??O}`,null==n){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(n=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${n??O}${this.toLoggableParams(!1,o)}${null!=e?`\n${String(e)}`:""}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??O}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??O}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??O}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??O}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map((e=>this.toLoggable(e,t))).join(", ")}]`;const o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return O;const o=t.map((e=>this.toLoggable(e))).join(", ");return 0!==o.length?` — ${o}`:O}};function D(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}var R,T;(T=R||(R={})).on=function(e,t,o,n){let i=!1;if("string"==typeof e){const r=function(t){const n=t?.target?.closest(e);null!=n&&o(t,n)};return document.addEventListener(t,r,n??!0),{dispose:()=>{i||(i=!0,document.removeEventListener(t,r,n??!0))}}}const r=function(e){o(e,this)};return e.addEventListener(t,r,n??!1),{dispose:()=>{i||(i=!0,e.removeEventListener(t,r,n??!1))}}},T.insertTemplate=function(e,t,o){const n=document.getElementById(e);if(t.replaceChildren(n?.content.cloneNode(!0)),t.className=n.className,null!=o?.visible){const e=t.querySelectorAll("[data-visible]");for(const t of e){const e=t.dataset.visible;e&&(o.visible[e]?t.style.display="initial":t.style.display="none")}}if(null!=o?.bindings){const e=t.querySelectorAll("[data-bind]");for(const t of e){const e=t.dataset.bind;if(!e)continue;const n=o.bindings[e];null!=n&&(t.textContent=String(n))}}},T.resetSlot=function(e){e.replaceChildren(),e.className=""};var N=(e=>(e[e.Hash=35]="Hash",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Backslash=92]="Backslash",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.Z=90]="Z",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.z=122]="z",e))(N||{});function U(e,t){const o=e+t,n=t<0?o<0?0:o:o>255?255:o;return Math.round(n)}function L(e,t){return j(e,-t)}function j(e,t){const o=function(e){const t=X(e);return null==t?null:[t.rgba.r,t.rgba.g,t.rgba.b,t.rgba.a]}(e);if(null==o)return e;const[n,i,r,s]=o,a=255*t/100;return`rgba(${U(n,a)}, ${U(i,a)}, ${U(r,a)}, ${s})`}function B(e,t){const o=W.from(e);return null==o?e:o.transparent(t/100).toString()}function z(e,t){const o=Math.pow(10,t);return Math.round(e*o)/o}class H{constructor(e,t,o,n=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,o)),this.a=z(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class I{constructor(e,t,o,n){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=z(Math.max(Math.min(1,t),0),3),this.l=z(Math.max(Math.min(1,o),0),3),this.a=z(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,n=e.b/255,i=e.a,r=Math.max(t,o,n),s=Math.min(t,o,n);let a=0,c=0;const l=(s+r)/2,h=r-s;if(h>0){switch(c=Math.min(l<=.5?h/(2*l):h/(2-2*l),1),r){case t:a=(o-n)/h+(o<n?6:0);break;case o:a=(n-t)/h+2;break;case n:a=(t-o)/h+4}a*=60,a=Math.round(a)}return new I(a,c,l,i)}static _hue2rgb(e,t,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+6*(t-e)*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}static toRGBA(e){const t=e.h/360,{s:o,l:n,a:i}=e;let r,s,a;if(0===o)r=s=a=n;else{const e=n<.5?n*(1+o):n+o-n*o,i=2*n-e;r=I._hue2rgb(i,e,t+1/3),s=I._hue2rgb(i,e,t),a=I._hue2rgb(i,e,t-1/3)}return new H(Math.round(255*r),Math.round(255*s),Math.round(255*a),i)}}class F{constructor(e,t,o,n){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=z(Math.max(Math.min(1,t),0),3),this.v=z(Math.max(Math.min(1,o),0),3),this.a=z(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,n=e.b/255,i=Math.max(t,o,n),r=i-Math.min(t,o,n),s=0===i?0:r/i;let a;return a=0===r?0:i===t?((o-n)/r%6+6)%6:i===o?(n-t)/r+2:(t-o)/r+4,new F(Math.round(60*a),s,i,e.a)}static toRGBA(e){const{h:t,s:o,v:n,a:i}=e,r=n*o,s=r*(1-Math.abs(t/60%2-1)),a=n-r;let[c,l,h]=[0,0,0];return t<60?(c=r,l=s):t<120?(c=s,l=r):t<180?(l=r,h=s):t<240?(l=s,h=r):t<300?(c=s,h=r):t<=360&&(c=r,h=s),c=Math.round(255*(c+a)),l=Math.round(255*(l+a)),h=Math.round(255*(h+a)),new H(c,l,h,i)}}function q(e,t){return t.getPropertyValue(e).trim()}const V=class e{static from(t){return t instanceof e?t:X(t)||e.red}static fromCssVariable(t,o){return X(q(t,o))||e.red}static fromHex(t){return J(t)||e.red}static equals(e,t){return!e&&!t||!(!e||!t)&&e.equals(t)}get hsla(){return this._hsla?this._hsla:I.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:F.fromRGBA(this.rgba)}constructor(e){if(!e)throw new Error("Color needs a value");if(e instanceof H)this.rgba=e;else if(e instanceof I)this._hsla=e,this.rgba=I.toRGBA(e);else{if(!(e instanceof F))throw new Error("Invalid color ctor argument");this._hsva=e,this.rgba=F.toRGBA(e)}}equals(e){return null!=e&&(Boolean(e)&&H.equals(this.rgba,e.rgba)&&I.equals(this.hsla,e.hsla)&&F.equals(this.hsva,e.hsva))}getRelativeLuminance(){return z(.2126*e._relativeLuminanceForComponent(this.rgba.r)+.7152*e._relativeLuminanceForComponent(this.rgba.g)+.0722*e._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new W(new H(0,0,0,e.rgba.a));if(1===t)return new W(new H(255,255,255,e.rgba.a));const o=e.getRelativeLuminance();let n=20;const i=(e,o)=>{const r=e.mix(o,.5),s=r.getRelativeLuminance();return Math.abs(t-s)<1e-7||!n--?r:s>t?i(e,r):i(r,o)},r=(o>t?i(W.black,e):i(e,W.white)).rgba;return new W(new H(r.r,r.g,r.b,e.rgba.a))}(this,e)}getContrastRatio(e){const t=this.getRelativeLuminance(),o=e.getRelativeLuminance();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(t){return new e(new I(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*t,this.hsla.a))}darken(t){return new e(new I(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*t,this.hsla.a))}transparent(t){const{r:o,g:n,b:i,a:r}=this.rgba;return new e(new H(o,n,i,r*t))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new e(new H(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(t){const o=t.rgba,n=this.rgba.a,i=o.a,r=n+i*(1-n);if(r<1e-6)return e.transparent;const s=this.rgba.r*n/r+o.r*i*(1-n)/r,a=this.rgba.g*n/r+o.g*i*(1-n)/r,c=this.rgba.b*n/r+o.b*i*(1-n)/r;return new e(new H(s,a,c,r))}mix(e,t){return function(e,t,o){const n=e.rgba,i=t.rgba;return new W(new H(n.r+o*(i.r-n.r),n.g+o*(i.g-n.g),n.b+o*(i.b-n.b),n.a+o*(i.a-n.a)))}(this,e,t)}makeOpaque(t){if(this.isOpaque()||1!==t.rgba.a)return this;const{r:o,g:n,b:i,a:r}=this.rgba;return new e(new H(t.rgba.r-r*(t.rgba.r-o),t.rgba.g-r*(t.rgba.g-n),t.rgba.b-r*(t.rgba.b-i),1))}flatten(...t){const o=t.reduceRight(((t,o)=>e._flatten(o,t)));return e._flatten(this,o)}static _flatten(t,o){const n=1-t.rgba.a;return new e(new H(n*o.rgba.r+t.rgba.a*t.rgba.r,n*o.rgba.g+t.rgba.a*t.rgba.g,n*o.rgba.b+t.rgba.a*t.rgba.b))}toString(){return this._toString||(this._toString=function(e){if(e.isOpaque())return K(e);return Y(e)}(this)),this._toString}static getLighterColor(e,t,o){if(e.isLighterThan(t))return e;o=o||.5;const n=e.getRelativeLuminance(),i=t.getRelativeLuminance();return o=o*(i-n)/i,e.lighten(o)}static getDarkerColor(e,t,o){if(e.isDarkerThan(t))return e;o=o||.5;const n=e.getRelativeLuminance();return o=o*(n-t.getRelativeLuminance())/n,e.darken(o)}};V.white=new V(new H(255,255,255,1)),V.black=new V(new H(0,0,0,1)),V.red=new V(new H(255,0,0,1)),V.blue=new V(new H(0,0,255,1)),V.green=new V(new H(0,255,0,1)),V.cyan=new V(new H(0,255,255,1)),V.lightgrey=new V(new H(211,211,211,1)),V.transparent=new V(new H(0,0,0,0));let W=V;function Y(e){return`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}function G(e){const t=e.toString(16);return 2!==t.length?`0${t}`:t}function K(e){return`#${G(e.rgba.r)}${G(e.rgba.g)}${G(e.rgba.b)}`}const Z=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function X(e){if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===N.Hash)return J(e);const t=Z.exec(e);if(null==t)return null;const o=t[1];let n;switch(o){case"rgb":case"hsl":n=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":n=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}switch(o){case"rgb":case"rgba":return new W(new H(n[0],n[1],n[2],n[3]));case"hsl":case"hsla":return new W(new I(n[0],n[1],n[2],n[3]))}return W.red}function J(e){const t=(e=e.trim()).length;if(0===t)return null;if(e.charCodeAt(0)!==N.Hash)return null;switch(t){case 7:{const t=16*Q(e.charCodeAt(1))+Q(e.charCodeAt(2)),o=16*Q(e.charCodeAt(3))+Q(e.charCodeAt(4)),n=16*Q(e.charCodeAt(5))+Q(e.charCodeAt(6));return new W(new H(t,o,n,1))}case 9:{const t=16*Q(e.charCodeAt(1))+Q(e.charCodeAt(2)),o=16*Q(e.charCodeAt(3))+Q(e.charCodeAt(4)),n=16*Q(e.charCodeAt(5))+Q(e.charCodeAt(6)),i=16*Q(e.charCodeAt(7))+Q(e.charCodeAt(8));return new W(new H(t,o,n,i/255))}case 4:{const t=Q(e.charCodeAt(1)),o=Q(e.charCodeAt(2)),n=Q(e.charCodeAt(3));return new W(new H(16*t+t,16*o+o,16*n+n))}case 5:{const t=Q(e.charCodeAt(1)),o=Q(e.charCodeAt(2)),n=Q(e.charCodeAt(3)),i=Q(e.charCodeAt(4));return new W(new H(16*t+t,16*o+o,16*n+n,(16*i+i)/255))}default:return null}}function Q(e){switch(e){case N.Digit0:return 0;case N.Digit1:return 1;case N.Digit2:return 2;case N.Digit3:return 3;case N.Digit4:return 4;case N.Digit5:return 5;case N.Digit6:return 6;case N.Digit7:return 7;case N.Digit8:return 8;case N.Digit9:return 9;case N.a:case N.A:return 10;case N.b:case N.B:return 11;case N.c:case N.C:return 12;case N.d:case N.D:return 13;case N.e:case N.E:return 14;case N.f:case N.F:return 15}return 0}const ee=class e{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(t,o,n)=>{null==this.listeners&&(this.listeners=new re);const i=this.listeners.push(null==o?t:[t,o]),r={dispose:()=>{r.dispose=e._noop,this._disposed||i()}};return Array.isArray(n)&&n.push(r),r}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new re);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};ee._noop=function(){};let te=ee;const oe={done:!0,value:void 0},ne=class e{constructor(t){this.element=t,this.next=e.Undefined,this.prev=e.Undefined}};ne.Undefined=new ne(void 0);let ie=ne;class re{constructor(){this._first=ie.Undefined,this._last=ie.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===ie.Undefined}clear(){this._first=ie.Undefined,this._last=ie.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const o=new ie(e);if(this._first===ie.Undefined)this._first=o,this._last=o;else if(t){const e=this._last;this._last=o,o.prev=e,e.next=o}else{const e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let n=!1;return()=>{n||(n=!0,this._remove(o))}}shift(){if(this._first===ie.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===ie.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==ie.Undefined&&e.next!==ie.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===ie.Undefined&&e.next===ie.Undefined?(this._first=ie.Undefined,this._last=ie.Undefined):e.next===ie.Undefined?(this._last=this._last.prev,this._last.next=ie.Undefined):e.prev===ie.Undefined&&(this._first=this._first.next,this._first.prev=ie.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===ie.Undefined?oe:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==ie.Undefined;t=t.next)e.push(t.element);return e}}const se=new te,ae=se.event;function ce(e){const t=document.documentElement,o=window.getComputedStyle(t),n=document.body.classList,i=n.contains("vscode-light")||n.contains("vscode-high-contrast-light"),r=n.contains("vscode-high-contrast")||n.contains("vscode-high-contrast-light"),s=t.style,a=q("--vscode-editor-background",o);let c=q("--vscode-editor-foreground",o);c||(c=q("--vscode-foreground",o));let l=q("--color-background",o);return s.setProperty("--color-background--lighten-05",j(l,5)),s.setProperty("--color-background--darken-05",L(l,5)),s.setProperty("--color-background--lighten-075",j(l,7.5)),s.setProperty("--color-background--darken-075",L(l,7.5)),s.setProperty("--color-background--lighten-10",j(l,10)),s.setProperty("--color-background--darken-10",L(l,10)),s.setProperty("--color-background--lighten-15",j(l,15)),s.setProperty("--color-background--darken-15",L(l,15)),s.setProperty("--color-background--lighten-30",j(l,30)),s.setProperty("--color-background--darken-30",L(l,30)),s.setProperty("--color-background--lighten-50",j(l,50)),s.setProperty("--color-background--darken-50",L(l,50)),l=q("--color-button-background",o),s.setProperty("--color-button-background--darken-30",L(l,30)),l=q("--color-highlight",o),s.setProperty("--color-highlight--75",B(l,75)),s.setProperty("--color-highlight--50",B(l,50)),s.setProperty("--color-highlight--25",B(l,25)),l=q("--color-button-secondary-background",o),s.setProperty("--color-button-secondary-background--darken-30",L(l,30)),l=q("--color-foreground",o),s.setProperty("--color-foreground--85",B(l,85)),s.setProperty("--color-foreground--75",B(l,75)),s.setProperty("--color-foreground--65",B(l,65)),s.setProperty("--color-foreground--50",B(l,50)),l=q("--color-link-foreground",o),s.setProperty("--color-link-foreground--darken-20",L(l,20)),s.setProperty("--color-link-foreground--lighten-20",j(l,20)),l=q("--color-alert-infoBackground",o),s.setProperty("--color-alert-infoHoverBackground",i?L(l,5):j(l,5)),l=q("--color-alert-warningBackground",o),s.setProperty("--color-alert-warningHoverBackground",i?L(l,5):j(l,5)),l=q("--color-alert-errorBackground",o),s.setProperty("--color-alert-errorHoverBackground",i?L(l,5):j(l,5)),l=i?L(a,5):j(a,5),s.setProperty("--color-alert-neutralBackground",l),s.setProperty("--color-alert-neutralHoverBackground",i?L(l,5):j(l,5)),{colors:{background:a,foreground:c},computedStyle:o,isLightTheme:i,isHighContrastTheme:r,isInitializing:null==e}}let le=0;function he(){return 1073741824===le?le=1:le++,`webview:${le}`}class de{constructor(e){this.appName=e;const t=[],o=ce();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(o),t.push(ae(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",M.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},"off"),this.log("ctor()"),this._api=acquireVsCodeApi(),null!=this.state){const e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){const e=new MutationObserver((e=>{se.fire(ce(e))}));return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame((()=>{this.log("ctor(): initializing...");try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(R.on(window,"message",this.onMessageReceived.bind(this))),this.sendCommand(s,void 0),this.onInitialized?.()}finally{document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}})),t.push(R.on(window,"pagehide",(()=>{t?.forEach((e=>e.dispose())),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=void 0})))}bind(){this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);const e=P((e=>{this.sendCommand(a,e)}),150);this.bindDisposables.push(R.on(document,"focusin",(t=>{const o=t.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===o||(this._focused=!0,this._inputFocused=o,e({focused:!0,inputFocused:o}))})),R.on(document,"focusout",(()=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))})))}log(e,...t){M.log(e,...t)}getState(){return this._api.getState()}sendCommand(e,t){const o=he();this.log(`sendCommand(${o}): name=${e.method}`),this.postMessage({id:o,method:e.method,params:t})}async sendCommandWithCompletion(e,t,o){const n=he();this.log(`sendCommandWithCompletion(${n}): name=${e.method}`);const i=new Promise(((e,t)=>{let i;const s=[R.on(window,"message",(t=>{r(o,t.data,(o=>{t.data.completionId===n&&(s.forEach((e=>e.dispose())),queueMicrotask((()=>e(o))))}))})),{dispose:function(){null!=i&&(clearTimeout(i),i=void 0)}}];i=setTimeout((()=>{i=void 0,s.forEach((e=>e.dispose())),t(new Error(`Timed out waiting for completion of ${o.method}`))}),6e4)}));return this.postMessage({id:n,method:e.method,params:t,completionId:n}),i}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}}const ue=globalThis,pe=ue.ShadowRoot&&(void 0===ue.ShadyCSS||ue.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,fe=Symbol(),be=new WeakMap;class me{constructor(e,t,o){if(this._$cssResult$=!0,o!==fe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(pe&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=be.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&be.set(t,e))}return e}toString(){return this.cssText}}const ge=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1]),e[0]);return new me(o,e,fe)},ve=(e,t)=>{if(pe)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const o of t){const t=document.createElement("style"),n=ue.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=o.cssText,e.appendChild(t)}},ye=pe?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new me("string"==typeof e?e:e+"",void 0,fe))(t)})(e):e,{is:we,defineProperty:ke,getOwnPropertyDescriptor:$e,getOwnPropertyNames:xe,getOwnPropertySymbols:_e,getPrototypeOf:Ae}=Object,Ce=globalThis,Se=Ce.trustedTypes,Ee=Se?Se.emptyScript:"",Pe=Ce.reactiveElementPolyfillSupport,Oe=(e,t)=>e,Me={toAttribute(e,t){switch(t){case Boolean:e=e?Ee:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},De=(e,t)=>!we(e,t),Re={attribute:!0,type:String,converter:Me,reflect:!1,hasChanged:De};Symbol.metadata??=Symbol("metadata"),Ce.litPropertyMetadata??=new WeakMap;class Te extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Re){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),n=this.getPropertyDescriptor(e,o,t);void 0!==n&&ke(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){const{get:n,set:i}=$e(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){const r=n?.call(this);i.call(this,t),this.requestUpdate(e,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Re}static _$Ei(){if(this.hasOwnProperty(Oe("elementProperties")))return;const e=Ae(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Oe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Oe("properties"))){const e=this.properties,t=[...xe(e),..._e(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(ye(e))}else void 0!==e&&t.push(ye(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$ES??=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$ES?.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ve(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$ES?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t){const o=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,o);if(void 0!==n&&!0===o.reflect){const i=(void 0!==o.converter?.toAttribute?o.converter:Me).toAttribute(t,o.type);this._$Em=e,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(e,t){const o=this.constructor,n=o._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=o.getPropertyOptions(n),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:Me;this._$Em=n,this[n]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o,n=!1,i){if(void 0!==e){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??De)(n?i:this[e],t))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$ES?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$ES?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EO(e,this[e]))),this._$ET()}updated(e){}firstUpdated(e){}}Te.elementStyles=[],Te.shadowRootOptions={mode:"open"},Te[Oe("elementProperties")]=new Map,Te[Oe("finalized")]=new Map,Pe?.({ReactiveElement:Te}),(Ce.reactiveElementVersions??=[]).push("2.0.1");const Ne=globalThis,Ue=Ne.trustedTypes,Le=Ue?Ue.createPolicy("lit-html",{createHTML:e=>e}):void 0,je="$lit$",Be=`lit$${(Math.random()+"").slice(9)}$`,ze="?"+Be,He=`<${ze}>`,Ie=document,Fe=()=>Ie.createComment(""),qe=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Ve=Array.isArray,We=e=>Ve(e)||"function"==typeof e?.[Symbol.iterator],Ye="[ \t\n\f\r]",Ge=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ke=/-->/g,Ze=/>/g,Xe=RegExp(`>|${Ye}(?:([^\\s"'>=/]+)(${Ye}*=${Ye}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Je=/'/g,Qe=/"/g,et=/^(?:script|style|textarea|title)$/i,tt=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),ot=tt(1),nt=(tt(2),Symbol.for("lit-noChange")),it=Symbol.for("lit-nothing"),rt=new WeakMap,st=Ie.createTreeWalker(Ie,129);function at(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Le?Le.createHTML(t):t}const ct=(e,t)=>{const o=e.length-1,n=[];let i,r=2===t?"<svg>":"",s=Ge;for(let t=0;t<o;t++){const o=e[t];let a,c,l=-1,h=0;for(;h<o.length&&(s.lastIndex=h,c=s.exec(o),null!==c);)h=s.lastIndex,s===Ge?"!--"===c[1]?s=Ke:void 0!==c[1]?s=Ze:void 0!==c[2]?(et.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=Xe):void 0!==c[3]&&(s=Xe):s===Xe?">"===c[0]?(s=i??Ge,l=-1):void 0===c[1]?l=-2:(l=s.lastIndex-c[2].length,a=c[1],s=void 0===c[3]?Xe:'"'===c[3]?Qe:Je):s===Qe||s===Je?s=Xe:s===Ke||s===Ze?s=Ge:(s=Xe,i=void 0);const d=s===Xe&&e[t+1].startsWith("/>")?" ":"";r+=s===Ge?o+He:l>=0?(n.push(a),o.slice(0,l)+je+o.slice(l)+Be+d):o+Be+(-2===l?t:d)}return[at(e,r+(e[o]||"<?>")+(2===t?"</svg>":"")),n]};class lt{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let i=0,r=0;const s=e.length-1,a=this.parts,[c,l]=ct(e,t);if(this.el=lt.createElement(c,o),st.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=st.nextNode())&&a.length<s;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(je)){const t=l[r++],o=n.getAttribute(e).split(Be),s=/([.?@])?(.*)/.exec(t);a.push({type:1,index:i,name:s[2],strings:o,ctor:"."===s[1]?ft:"?"===s[1]?bt:"@"===s[1]?mt:pt}),n.removeAttribute(e)}else e.startsWith(Be)&&(a.push({type:6,index:i}),n.removeAttribute(e));if(et.test(n.tagName)){const e=n.textContent.split(Be),t=e.length-1;if(t>0){n.textContent=Ue?Ue.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],Fe()),st.nextNode(),a.push({type:2,index:++i});n.append(e[t],Fe())}}}else if(8===n.nodeType)if(n.data===ze)a.push({type:2,index:i});else{let e=-1;for(;-1!==(e=n.data.indexOf(Be,e+1));)a.push({type:7,index:i}),e+=Be.length-1}i++}}static createElement(e,t){const o=Ie.createElement("template");return o.innerHTML=e,o}}function ht(e,t,o=e,n){if(t===nt)return t;let i=void 0!==n?o._$Co?.[n]:o._$Cl;const r=qe(t)?void 0:t._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),void 0===r?i=void 0:(i=new r(e),i._$AT(e,o,n)),void 0!==n?(o._$Co??=[])[n]=i:o._$Cl=i),void 0!==i&&(t=ht(e,i._$AS(e,t.values),i,n)),t}class dt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,n=(e?.creationScope??Ie).importNode(t,!0);st.currentNode=n;let i=st.nextNode(),r=0,s=0,a=o[0];for(;void 0!==a;){if(r===a.index){let t;2===a.type?t=new ut(i,i.nextSibling,this,e):1===a.type?t=new a.ctor(i,a.name,a.strings,this,e):6===a.type&&(t=new gt(i,this,e)),this._$AV.push(t),a=o[++s]}r!==a?.index&&(i=st.nextNode(),r++)}return st.currentNode=Ie,n}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class ut{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,n){this.type=2,this._$AH=it,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ht(this,e,t),qe(e)?e===it||null==e||""===e?(this._$AH!==it&&this._$AR(),this._$AH=it):e!==this._$AH&&e!==nt&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):We(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==it&&qe(this._$AH)?this._$AA.nextSibling.data=e:this.$(Ie.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:o}=e,n="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=lt.createElement(at(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new dt(n,this),o=e.u(this.options);e.p(t),this.$(o),this._$AH=e}}_$AC(e){let t=rt.get(e.strings);return void 0===t&&rt.set(e.strings,t=new lt(e)),t}T(e){Ve(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,n=0;for(const i of e)n===t.length?t.push(o=new ut(this.k(Fe()),this.k(Fe()),this,this.options)):o=t[n],o._$AI(i),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class pt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,n,i){this.type=1,this._$AH=it,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=it}_$AI(e,t=this,o,n){const i=this.strings;let r=!1;if(void 0===i)e=ht(this,e,t,0),r=!qe(e)||e!==this._$AH&&e!==nt,r&&(this._$AH=e);else{const n=e;let s,a;for(e=i[0],s=0;s<i.length-1;s++)a=ht(this,n[o+s],t,s),a===nt&&(a=this._$AH[s]),r||=!qe(a)||a!==this._$AH[s],a===it?e=it:e!==it&&(e+=(a??"")+i[s+1]),this._$AH[s]=a}r&&!n&&this.O(e)}O(e){e===it?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ft extends pt{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===it?void 0:e}}class bt extends pt{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==it)}}class mt extends pt{constructor(e,t,o,n,i){super(e,t,o,n,i),this.type=5}_$AI(e,t=this){if((e=ht(this,e,t,0)??it)===nt)return;const o=this._$AH,n=e===it&&o!==it||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==it&&(o===it||n);n&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class gt{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){ht(this,e)}}const vt=Ne.litHtmlPolyfillSupport;vt?.(lt,ut),(Ne.litHtmlVersions??=[]).push("3.0.2");class yt extends Te{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const n=o?.renderBefore??t;let i=n._$litPart$;if(void 0===i){const e=o?.renderBefore??null;n._$litPart$=i=new ut(t.insertBefore(Fe(),e),e,void 0,o??{})}return i._$AI(e),i})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return nt}}yt._$litElement$=!0,yt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:yt});const wt=globalThis.litElementPolyfillSupport;wt?.({LitElement:yt});(globalThis.litElementVersions??=[]).push("4.0.1");const kt=e=>(t,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},$t={attribute:!0,type:String,converter:Me,reflect:!1,hasChanged:De},xt=(e=$t,t,o)=>{const{kind:n,metadata:i}=o;let r=globalThis.litPropertyMetadata.get(i);if(void 0===r&&globalThis.litPropertyMetadata.set(i,r=new Map),r.set(o.name,e),"accessor"===n){const{name:n}=o;return{set(o){const i=t.get.call(this);t.set.call(this,o),this.requestUpdate(n,i,e)},init(t){return void 0!==t&&this.C(n,void 0,e),t}}}if("setter"===n){const{name:n}=o;return function(o){const i=this[n];t.call(this,o),this.requestUpdate(n,i,e)}}throw Error("Unsupported decorator location: "+n)};function _t(e){return(t,o)=>"object"==typeof o?xt(e,t,o):((e,t,o)=>{const n=t.hasOwnProperty(o);return t.constructor.createProperty(o,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}function At(e){return _t({...e,state:!0,attribute:!1})}const Ct=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function St(e,t){return(o,n,i)=>{const r=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:s}="object"==typeof n?o:i??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Ct(o,n,{get(){if(t){let t=e.call(this);return void 0===t&&(t=r(this),s.call(this,t)),t}return r(this)}})}return Ct(o,n,{get(){return r(this)}})}}function Et(e){return(t,o)=>{const{slot:n,selector:i}=e??{},r="slot"+(n?`[name=${n}]`:":not([name])");return Ct(t,o,{get(){const t=this.renderRoot?.querySelector(r),o=t?.assignedElements(e)??[];return void 0===i?o:o.filter((e=>e.matches(i)))}})}}var Pt=Object.defineProperty,Ot=Object.getOwnPropertyDescriptor,Mt=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?Ot(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&Pt(t,o,r),r};let Dt=class extends yt{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=16}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};Dt.styles=ge`
		:host {
			font: normal normal normal var(--code-icon-size, 16px) / 1 codicon;
			display: inline-block;
			text-decoration: none;
			text-rendering: auto;
			text-align: center;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
			color: inherit;
			vertical-align: text-bottom;
			letter-spacing: normal;
		}

		:host([icon='add']):before {
			content: '\\ea60';
		}
		:host([icon='plus']):before {
			content: '\\ea60';
		}
		:host([icon='gist-new']):before {
			content: '\\ea60';
		}
		:host([icon='repo-create']):before {
			content: '\\ea60';
		}
		:host([icon='lightbulb']):before {
			content: '\\ea61';
		}
		:host([icon='light-bulb']):before {
			content: '\\ea61';
		}
		:host([icon='repo']):before {
			content: '\\ea62';
		}
		:host([icon='repo-delete']):before {
			content: '\\ea62';
		}
		:host([icon='gist-fork']):before {
			content: '\\ea63';
		}
		:host([icon='repo-forked']):before {
			content: '\\ea63';
		}
		:host([icon='git-pull-request']):before {
			content: '\\ea64';
		}
		:host([icon='git-pull-request-abandoned']):before {
			content: '\\ea64';
		}
		:host([icon='record-keys']):before {
			content: '\\ea65';
		}
		:host([icon='keyboard']):before {
			content: '\\ea65';
		}
		:host([icon='tag']):before {
			content: '\\ea66';
		}
		:host([icon='tag-add']):before {
			content: '\\ea66';
		}
		:host([icon='tag-remove']):before {
			content: '\\ea66';
		}
		:host([icon='person']):before {
			content: '\\ea67';
		}
		:host([icon='person-follow']):before {
			content: '\\ea67';
		}
		:host([icon='person-outline']):before {
			content: '\\ea67';
		}
		:host([icon='person-filled']):before {
			content: '\\ea67';
		}
		:host([icon='git-branch']):before {
			content: '\\ea68';
		}
		:host([icon='git-branch-create']):before {
			content: '\\ea68';
		}
		:host([icon='git-branch-delete']):before {
			content: '\\ea68';
		}
		:host([icon='source-control']):before {
			content: '\\ea68';
		}
		:host([icon='mirror']):before {
			content: '\\ea69';
		}
		:host([icon='mirror-public']):before {
			content: '\\ea69';
		}
		:host([icon='star']):before {
			content: '\\ea6a';
		}
		:host([icon='star-add']):before {
			content: '\\ea6a';
		}
		:host([icon='star-delete']):before {
			content: '\\ea6a';
		}
		:host([icon='star-empty']):before {
			content: '\\ea6a';
		}
		:host([icon='comment']):before {
			content: '\\ea6b';
		}
		:host([icon='comment-add']):before {
			content: '\\ea6b';
		}
		:host([icon='alert']):before {
			content: '\\ea6c';
		}
		:host([icon='warning']):before {
			content: '\\ea6c';
		}
		:host([icon='search']):before {
			content: '\\ea6d';
		}
		:host([icon='search-save']):before {
			content: '\\ea6d';
		}
		:host([icon='log-out']):before {
			content: '\\ea6e';
		}
		:host([icon='sign-out']):before {
			content: '\\ea6e';
		}
		:host([icon='log-in']):before {
			content: '\\ea6f';
		}
		:host([icon='sign-in']):before {
			content: '\\ea6f';
		}
		:host([icon='eye']):before {
			content: '\\ea70';
		}
		:host([icon='eye-unwatch']):before {
			content: '\\ea70';
		}
		:host([icon='eye-watch']):before {
			content: '\\ea70';
		}
		:host([icon='circle-filled']):before {
			content: '\\ea71';
		}
		:host([icon='primitive-dot']):before {
			content: '\\ea71';
		}
		:host([icon='close-dirty']):before {
			content: '\\ea71';
		}
		:host([icon='debug-breakpoint']):before {
			content: '\\ea71';
		}
		:host([icon='debug-breakpoint-disabled']):before {
			content: '\\ea71';
		}
		:host([icon='debug-hint']):before {
			content: '\\ea71';
		}
		:host([icon='primitive-square']):before {
			content: '\\ea72';
		}
		:host([icon='edit']):before {
			content: '\\ea73';
		}
		:host([icon='pencil']):before {
			content: '\\ea73';
		}
		:host([icon='info']):before {
			content: '\\ea74';
		}
		:host([icon='issue-opened']):before {
			content: '\\ea74';
		}
		:host([icon='gist-private']):before {
			content: '\\ea75';
		}
		:host([icon='git-fork-private']):before {
			content: '\\ea75';
		}
		:host([icon='lock']):before {
			content: '\\ea75';
		}
		:host([icon='mirror-private']):before {
			content: '\\ea75';
		}
		:host([icon='close']):before {
			content: '\\ea76';
		}
		:host([icon='remove-close']):before {
			content: '\\ea76';
		}
		:host([icon='x']):before {
			content: '\\ea76';
		}
		:host([icon='repo-sync']):before {
			content: '\\ea77';
		}
		:host([icon='sync']):before {
			content: '\\ea77';
		}
		:host([icon='clone']):before {
			content: '\\ea78';
		}
		:host([icon='desktop-download']):before {
			content: '\\ea78';
		}
		:host([icon='beaker']):before {
			content: '\\ea79';
		}
		:host([icon='microscope']):before {
			content: '\\ea79';
		}
		:host([icon='vm']):before {
			content: '\\ea7a';
		}
		:host([icon='device-desktop']):before {
			content: '\\ea7a';
		}
		:host([icon='file']):before {
			content: '\\ea7b';
		}
		:host([icon='file-text']):before {
			content: '\\ea7b';
		}
		:host([icon='more']):before {
			content: '\\ea7c';
		}
		:host([icon='ellipsis']):before {
			content: '\\ea7c';
		}
		:host([icon='kebab-horizontal']):before {
			content: '\\ea7c';
		}
		:host([icon='mail-reply']):before {
			content: '\\ea7d';
		}
		:host([icon='reply']):before {
			content: '\\ea7d';
		}
		:host([icon='organization']):before {
			content: '\\ea7e';
		}
		:host([icon='organization-filled']):before {
			content: '\\ea7e';
		}
		:host([icon='organization-outline']):before {
			content: '\\ea7e';
		}
		:host([icon='new-file']):before {
			content: '\\ea7f';
		}
		:host([icon='file-add']):before {
			content: '\\ea7f';
		}
		:host([icon='new-folder']):before {
			content: '\\ea80';
		}
		:host([icon='file-directory-create']):before {
			content: '\\ea80';
		}
		:host([icon='trash']):before {
			content: '\\ea81';
		}
		:host([icon='trashcan']):before {
			content: '\\ea81';
		}
		:host([icon='history']):before {
			content: '\\ea82';
		}
		:host([icon='clock']):before {
			content: '\\ea82';
		}
		:host([icon='folder']):before {
			content: '\\ea83';
		}
		:host([icon='file-directory']):before {
			content: '\\ea83';
		}
		:host([icon='symbol-folder']):before {
			content: '\\ea83';
		}
		:host([icon='logo-github']):before {
			content: '\\ea84';
		}
		:host([icon='mark-github']):before {
			content: '\\ea84';
		}
		:host([icon='github']):before {
			content: '\\ea84';
		}
		:host([icon='terminal']):before {
			content: '\\ea85';
		}
		:host([icon='console']):before {
			content: '\\ea85';
		}
		:host([icon='repl']):before {
			content: '\\ea85';
		}
		:host([icon='zap']):before {
			content: '\\ea86';
		}
		:host([icon='symbol-event']):before {
			content: '\\ea86';
		}
		:host([icon='error']):before {
			content: '\\ea87';
		}
		:host([icon='stop']):before {
			content: '\\ea87';
		}
		:host([icon='variable']):before {
			content: '\\ea88';
		}
		:host([icon='symbol-variable']):before {
			content: '\\ea88';
		}
		:host([icon='array']):before {
			content: '\\ea8a';
		}
		:host([icon='symbol-array']):before {
			content: '\\ea8a';
		}
		:host([icon='symbol-module']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-package']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-namespace']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-object']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-method']):before {
			content: '\\ea8c';
		}
		:host([icon='symbol-function']):before {
			content: '\\ea8c';
		}
		:host([icon='symbol-constructor']):before {
			content: '\\ea8c';
		}
		:host([icon='symbol-boolean']):before {
			content: '\\ea8f';
		}
		:host([icon='symbol-null']):before {
			content: '\\ea8f';
		}
		:host([icon='symbol-numeric']):before {
			content: '\\ea90';
		}
		:host([icon='symbol-number']):before {
			content: '\\ea90';
		}
		:host([icon='symbol-structure']):before {
			content: '\\ea91';
		}
		:host([icon='symbol-struct']):before {
			content: '\\ea91';
		}
		:host([icon='symbol-parameter']):before {
			content: '\\ea92';
		}
		:host([icon='symbol-type-parameter']):before {
			content: '\\ea92';
		}
		:host([icon='symbol-key']):before {
			content: '\\ea93';
		}
		:host([icon='symbol-text']):before {
			content: '\\ea93';
		}
		:host([icon='symbol-reference']):before {
			content: '\\ea94';
		}
		:host([icon='go-to-file']):before {
			content: '\\ea94';
		}
		:host([icon='symbol-enum']):before {
			content: '\\ea95';
		}
		:host([icon='symbol-value']):before {
			content: '\\ea95';
		}
		:host([icon='symbol-ruler']):before {
			content: '\\ea96';
		}
		:host([icon='symbol-unit']):before {
			content: '\\ea96';
		}
		:host([icon='activate-breakpoints']):before {
			content: '\\ea97';
		}
		:host([icon='archive']):before {
			content: '\\ea98';
		}
		:host([icon='arrow-both']):before {
			content: '\\ea99';
		}
		:host([icon='arrow-down']):before {
			content: '\\ea9a';
		}
		:host([icon='arrow-left']):before {
			content: '\\ea9b';
		}
		:host([icon='arrow-right']):before {
			content: '\\ea9c';
		}
		:host([icon='arrow-small-down']):before {
			content: '\\ea9d';
		}
		:host([icon='arrow-small-left']):before {
			content: '\\ea9e';
		}
		:host([icon='arrow-small-right']):before {
			content: '\\ea9f';
		}
		:host([icon='arrow-small-up']):before {
			content: '\\eaa0';
		}
		:host([icon='arrow-up']):before {
			content: '\\eaa1';
		}
		:host([icon='bell']):before {
			content: '\\eaa2';
		}
		:host([icon='bold']):before {
			content: '\\eaa3';
		}
		:host([icon='book']):before {
			content: '\\eaa4';
		}
		:host([icon='bookmark']):before {
			content: '\\eaa5';
		}
		:host([icon='debug-breakpoint-conditional-unverified']):before {
			content: '\\eaa6';
		}
		:host([icon='debug-breakpoint-conditional']):before {
			content: '\\eaa7';
		}
		:host([icon='debug-breakpoint-conditional-disabled']):before {
			content: '\\eaa7';
		}
		:host([icon='debug-breakpoint-data-unverified']):before {
			content: '\\eaa8';
		}
		:host([icon='debug-breakpoint-data']):before {
			content: '\\eaa9';
		}
		:host([icon='debug-breakpoint-data-disabled']):before {
			content: '\\eaa9';
		}
		:host([icon='debug-breakpoint-log-unverified']):before {
			content: '\\eaaa';
		}
		:host([icon='debug-breakpoint-log']):before {
			content: '\\eaab';
		}
		:host([icon='debug-breakpoint-log-disabled']):before {
			content: '\\eaab';
		}
		:host([icon='briefcase']):before {
			content: '\\eaac';
		}
		:host([icon='broadcast']):before {
			content: '\\eaad';
		}
		:host([icon='browser']):before {
			content: '\\eaae';
		}
		:host([icon='bug']):before {
			content: '\\eaaf';
		}
		:host([icon='calendar']):before {
			content: '\\eab0';
		}
		:host([icon='case-sensitive']):before {
			content: '\\eab1';
		}
		:host([icon='check']):before {
			content: '\\eab2';
		}
		:host([icon='checklist']):before {
			content: '\\eab3';
		}
		:host([icon='chevron-down']):before {
			content: '\\eab4';
		}
		:host([icon='chevron-left']):before {
			content: '\\eab5';
		}
		:host([icon='chevron-right']):before {
			content: '\\eab6';
		}
		:host([icon='chevron-up']):before {
			content: '\\eab7';
		}
		:host([icon='chrome-close']):before {
			content: '\\eab8';
		}
		:host([icon='chrome-maximize']):before {
			content: '\\eab9';
		}
		:host([icon='chrome-minimize']):before {
			content: '\\eaba';
		}
		:host([icon='chrome-restore']):before {
			content: '\\eabb';
		}
		:host([icon='circle-outline']):before {
			content: '\\eabc';
		}
		:host([icon='debug-breakpoint-unverified']):before {
			content: '\\eabc';
		}
		:host([icon='circle-slash']):before {
			content: '\\eabd';
		}
		:host([icon='circuit-board']):before {
			content: '\\eabe';
		}
		:host([icon='clear-all']):before {
			content: '\\eabf';
		}
		:host([icon='clippy']):before {
			content: '\\eac0';
		}
		:host([icon='close-all']):before {
			content: '\\eac1';
		}
		:host([icon='cloud-download']):before {
			content: '\\eac2';
		}
		:host([icon='cloud-upload']):before {
			content: '\\eac3';
		}
		:host([icon='code']):before {
			content: '\\eac4';
		}
		:host([icon='collapse-all']):before {
			content: '\\eac5';
		}
		:host([icon='color-mode']):before {
			content: '\\eac6';
		}
		:host([icon='comment-discussion']):before {
			content: '\\eac7';
		}
		:host([icon='credit-card']):before {
			content: '\\eac9';
		}
		:host([icon='dash']):before {
			content: '\\eacc';
		}
		:host([icon='dashboard']):before {
			content: '\\eacd';
		}
		:host([icon='database']):before {
			content: '\\eace';
		}
		:host([icon='debug-continue']):before {
			content: '\\eacf';
		}
		:host([icon='debug-disconnect']):before {
			content: '\\ead0';
		}
		:host([icon='debug-pause']):before {
			content: '\\ead1';
		}
		:host([icon='debug-restart']):before {
			content: '\\ead2';
		}
		:host([icon='debug-start']):before {
			content: '\\ead3';
		}
		:host([icon='debug-step-into']):before {
			content: '\\ead4';
		}
		:host([icon='debug-step-out']):before {
			content: '\\ead5';
		}
		:host([icon='debug-step-over']):before {
			content: '\\ead6';
		}
		:host([icon='debug-stop']):before {
			content: '\\ead7';
		}
		:host([icon='debug']):before {
			content: '\\ead8';
		}
		:host([icon='device-camera-video']):before {
			content: '\\ead9';
		}
		:host([icon='device-camera']):before {
			content: '\\eada';
		}
		:host([icon='device-mobile']):before {
			content: '\\eadb';
		}
		:host([icon='diff-added']):before {
			content: '\\eadc';
		}
		:host([icon='diff-ignored']):before {
			content: '\\eadd';
		}
		:host([icon='diff-modified']):before {
			content: '\\eade';
		}
		:host([icon='diff-removed']):before {
			content: '\\eadf';
		}
		:host([icon='diff-renamed']):before {
			content: '\\eae0';
		}
		:host([icon='diff']):before {
			content: '\\eae1';
		}
		:host([icon='discard']):before {
			content: '\\eae2';
		}
		:host([icon='editor-layout']):before {
			content: '\\eae3';
		}
		:host([icon='empty-window']):before {
			content: '\\eae4';
		}
		:host([icon='exclude']):before {
			content: '\\eae5';
		}
		:host([icon='extensions']):before {
			content: '\\eae6';
		}
		:host([icon='eye-closed']):before {
			content: '\\eae7';
		}
		:host([icon='file-binary']):before {
			content: '\\eae8';
		}
		:host([icon='file-code']):before {
			content: '\\eae9';
		}
		:host([icon='file-media']):before {
			content: '\\eaea';
		}
		:host([icon='file-pdf']):before {
			content: '\\eaeb';
		}
		:host([icon='file-submodule']):before {
			content: '\\eaec';
		}
		:host([icon='file-symlink-directory']):before {
			content: '\\eaed';
		}
		:host([icon='file-symlink-file']):before {
			content: '\\eaee';
		}
		:host([icon='file-zip']):before {
			content: '\\eaef';
		}
		:host([icon='files']):before {
			content: '\\eaf0';
		}
		:host([icon='filter']):before {
			content: '\\eaf1';
		}
		:host([icon='flame']):before {
			content: '\\eaf2';
		}
		:host([icon='fold-down']):before {
			content: '\\eaf3';
		}
		:host([icon='fold-up']):before {
			content: '\\eaf4';
		}
		:host([icon='fold']):before {
			content: '\\eaf5';
		}
		:host([icon='folder-active']):before {
			content: '\\eaf6';
		}
		:host([icon='folder-opened']):before {
			content: '\\eaf7';
		}
		:host([icon='gear']):before {
			content: '\\eaf8';
		}
		:host([icon='gift']):before {
			content: '\\eaf9';
		}
		:host([icon='gist-secret']):before {
			content: '\\eafa';
		}
		:host([icon='gist']):before {
			content: '\\eafb';
		}
		:host([icon='git-commit']):before {
			content: '\\eafc';
		}
		:host([icon='git-compare']):before {
			content: '\\eafd';
		}
		:host([icon='compare-changes']):before {
			content: '\\eafd';
		}
		:host([icon='git-merge']):before {
			content: '\\eafe';
		}
		:host([icon='github-action']):before {
			content: '\\eaff';
		}
		:host([icon='github-alt']):before {
			content: '\\eb00';
		}
		:host([icon='globe']):before {
			content: '\\eb01';
		}
		:host([icon='grabber']):before {
			content: '\\eb02';
		}
		:host([icon='graph']):before {
			content: '\\eb03';
		}
		:host([icon='gripper']):before {
			content: '\\eb04';
		}
		:host([icon='heart']):before {
			content: '\\eb05';
		}
		:host([icon='home']):before {
			content: '\\eb06';
		}
		:host([icon='horizontal-rule']):before {
			content: '\\eb07';
		}
		:host([icon='hubot']):before {
			content: '\\eb08';
		}
		:host([icon='inbox']):before {
			content: '\\eb09';
		}
		:host([icon='issue-reopened']):before {
			content: '\\eb0b';
		}
		:host([icon='issues']):before {
			content: '\\eb0c';
		}
		:host([icon='italic']):before {
			content: '\\eb0d';
		}
		:host([icon='jersey']):before {
			content: '\\eb0e';
		}
		:host([icon='json']):before {
			content: '\\eb0f';
		}
		:host([icon='kebab-vertical']):before {
			content: '\\eb10';
		}
		:host([icon='key']):before {
			content: '\\eb11';
		}
		:host([icon='law']):before {
			content: '\\eb12';
		}
		:host([icon='lightbulb-autofix']):before {
			content: '\\eb13';
		}
		:host([icon='link-external']):before {
			content: '\\eb14';
		}
		:host([icon='link']):before {
			content: '\\eb15';
		}
		:host([icon='list-ordered']):before {
			content: '\\eb16';
		}
		:host([icon='list-unordered']):before {
			content: '\\eb17';
		}
		:host([icon='live-share']):before {
			content: '\\eb18';
		}
		:host([icon='loading']):before {
			content: '\\eb19';
		}
		:host([icon='location']):before {
			content: '\\eb1a';
		}
		:host([icon='mail-read']):before {
			content: '\\eb1b';
		}
		:host([icon='mail']):before {
			content: '\\eb1c';
		}
		:host([icon='markdown']):before {
			content: '\\eb1d';
		}
		:host([icon='megaphone']):before {
			content: '\\eb1e';
		}
		:host([icon='mention']):before {
			content: '\\eb1f';
		}
		:host([icon='milestone']):before {
			content: '\\eb20';
		}
		:host([icon='mortar-board']):before {
			content: '\\eb21';
		}
		:host([icon='move']):before {
			content: '\\eb22';
		}
		:host([icon='multiple-windows']):before {
			content: '\\eb23';
		}
		:host([icon='mute']):before {
			content: '\\eb24';
		}
		:host([icon='no-newline']):before {
			content: '\\eb25';
		}
		:host([icon='note']):before {
			content: '\\eb26';
		}
		:host([icon='octoface']):before {
			content: '\\eb27';
		}
		:host([icon='open-preview']):before {
			content: '\\eb28';
		}
		:host([icon='package']):before {
			content: '\\eb29';
		}
		:host([icon='paintcan']):before {
			content: '\\eb2a';
		}
		:host([icon='pin']):before {
			content: '\\eb2b';
		}
		:host([icon='play']):before {
			content: '\\eb2c';
		}
		:host([icon='run']):before {
			content: '\\eb2c';
		}
		:host([icon='plug']):before {
			content: '\\eb2d';
		}
		:host([icon='preserve-case']):before {
			content: '\\eb2e';
		}
		:host([icon='preview']):before {
			content: '\\eb2f';
		}
		:host([icon='project']):before {
			content: '\\eb30';
		}
		:host([icon='pulse']):before {
			content: '\\eb31';
		}
		:host([icon='question']):before {
			content: '\\eb32';
		}
		:host([icon='quote']):before {
			content: '\\eb33';
		}
		:host([icon='radio-tower']):before {
			content: '\\eb34';
		}
		:host([icon='reactions']):before {
			content: '\\eb35';
		}
		:host([icon='references']):before {
			content: '\\eb36';
		}
		:host([icon='refresh']):before {
			content: '\\eb37';
		}
		:host([icon='regex']):before {
			content: '\\eb38';
		}
		:host([icon='remote-explorer']):before {
			content: '\\eb39';
		}
		:host([icon='remote']):before {
			content: '\\eb3a';
		}
		:host([icon='remove']):before {
			content: '\\eb3b';
		}
		:host([icon='replace-all']):before {
			content: '\\eb3c';
		}
		:host([icon='replace']):before {
			content: '\\eb3d';
		}
		:host([icon='repo-clone']):before {
			content: '\\eb3e';
		}
		:host([icon='repo-force-push']):before {
			content: '\\eb3f';
		}
		:host([icon='repo-pull']):before {
			content: '\\eb40';
		}
		:host([icon='repo-push']):before {
			content: '\\eb41';
		}
		:host([icon='report']):before {
			content: '\\eb42';
		}
		:host([icon='request-changes']):before {
			content: '\\eb43';
		}
		:host([icon='rocket']):before {
			content: '\\eb44';
		}
		:host([icon='root-folder-opened']):before {
			content: '\\eb45';
		}
		:host([icon='root-folder']):before {
			content: '\\eb46';
		}
		:host([icon='rss']):before {
			content: '\\eb47';
		}
		:host([icon='ruby']):before {
			content: '\\eb48';
		}
		:host([icon='save-all']):before {
			content: '\\eb49';
		}
		:host([icon='save-as']):before {
			content: '\\eb4a';
		}
		:host([icon='save']):before {
			content: '\\eb4b';
		}
		:host([icon='screen-full']):before {
			content: '\\eb4c';
		}
		:host([icon='screen-normal']):before {
			content: '\\eb4d';
		}
		:host([icon='search-stop']):before {
			content: '\\eb4e';
		}
		:host([icon='server']):before {
			content: '\\eb50';
		}
		:host([icon='settings-gear']):before {
			content: '\\eb51';
		}
		:host([icon='settings']):before {
			content: '\\eb52';
		}
		:host([icon='shield']):before {
			content: '\\eb53';
		}
		:host([icon='smiley']):before {
			content: '\\eb54';
		}
		:host([icon='sort-precedence']):before {
			content: '\\eb55';
		}
		:host([icon='split-horizontal']):before {
			content: '\\eb56';
		}
		:host([icon='split-vertical']):before {
			content: '\\eb57';
		}
		:host([icon='squirrel']):before {
			content: '\\eb58';
		}
		:host([icon='star-full']):before {
			content: '\\eb59';
		}
		:host([icon='star-half']):before {
			content: '\\eb5a';
		}
		:host([icon='symbol-class']):before {
			content: '\\eb5b';
		}
		:host([icon='symbol-color']):before {
			content: '\\eb5c';
		}
		:host([icon='symbol-constant']):before {
			content: '\\eb5d';
		}
		:host([icon='symbol-enum-member']):before {
			content: '\\eb5e';
		}
		:host([icon='symbol-field']):before {
			content: '\\eb5f';
		}
		:host([icon='symbol-file']):before {
			content: '\\eb60';
		}
		:host([icon='symbol-interface']):before {
			content: '\\eb61';
		}
		:host([icon='symbol-keyword']):before {
			content: '\\eb62';
		}
		:host([icon='symbol-misc']):before {
			content: '\\eb63';
		}
		:host([icon='symbol-operator']):before {
			content: '\\eb64';
		}
		:host([icon='symbol-property']):before {
			content: '\\eb65';
		}
		:host([icon='wrench']):before {
			content: '\\eb65';
		}
		:host([icon='wrench-subaction']):before {
			content: '\\eb65';
		}
		:host([icon='symbol-snippet']):before {
			content: '\\eb66';
		}
		:host([icon='tasklist']):before {
			content: '\\eb67';
		}
		:host([icon='telescope']):before {
			content: '\\eb68';
		}
		:host([icon='text-size']):before {
			content: '\\eb69';
		}
		:host([icon='three-bars']):before {
			content: '\\eb6a';
		}
		:host([icon='thumbsdown']):before {
			content: '\\eb6b';
		}
		:host([icon='thumbsup']):before {
			content: '\\eb6c';
		}
		:host([icon='tools']):before {
			content: '\\eb6d';
		}
		:host([icon='triangle-down']):before {
			content: '\\eb6e';
		}
		:host([icon='triangle-left']):before {
			content: '\\eb6f';
		}
		:host([icon='triangle-right']):before {
			content: '\\eb70';
		}
		:host([icon='triangle-up']):before {
			content: '\\eb71';
		}
		:host([icon='twitter']):before {
			content: '\\eb72';
		}
		:host([icon='unfold']):before {
			content: '\\eb73';
		}
		:host([icon='unlock']):before {
			content: '\\eb74';
		}
		:host([icon='unmute']):before {
			content: '\\eb75';
		}
		:host([icon='unverified']):before {
			content: '\\eb76';
		}
		:host([icon='verified']):before {
			content: '\\eb77';
		}
		:host([icon='versions']):before {
			content: '\\eb78';
		}
		:host([icon='vm-active']):before {
			content: '\\eb79';
		}
		:host([icon='vm-outline']):before {
			content: '\\eb7a';
		}
		:host([icon='vm-running']):before {
			content: '\\eb7b';
		}
		:host([icon='watch']):before {
			content: '\\eb7c';
		}
		:host([icon='whitespace']):before {
			content: '\\eb7d';
		}
		:host([icon='whole-word']):before {
			content: '\\eb7e';
		}
		:host([icon='window']):before {
			content: '\\eb7f';
		}
		:host([icon='word-wrap']):before {
			content: '\\eb80';
		}
		:host([icon='zoom-in']):before {
			content: '\\eb81';
		}
		:host([icon='zoom-out']):before {
			content: '\\eb82';
		}
		:host([icon='list-filter']):before {
			content: '\\eb83';
		}
		:host([icon='list-flat']):before {
			content: '\\eb84';
		}
		:host([icon='list-selection']):before {
			content: '\\eb85';
		}
		:host([icon='selection']):before {
			content: '\\eb85';
		}
		:host([icon='list-tree']):before {
			content: '\\eb86';
		}
		:host([icon='debug-breakpoint-function-unverified']):before {
			content: '\\eb87';
		}
		:host([icon='debug-breakpoint-function']):before {
			content: '\\eb88';
		}
		:host([icon='debug-breakpoint-function-disabled']):before {
			content: '\\eb88';
		}
		:host([icon='debug-stackframe-active']):before {
			content: '\\eb89';
		}
		:host([icon='debug-stackframe-dot']):before {
			content: '\\eb8a';
		}
		:host([icon='debug-stackframe']):before {
			content: '\\eb8b';
		}
		:host([icon='debug-stackframe-focused']):before {
			content: '\\eb8b';
		}
		:host([icon='debug-breakpoint-unsupported']):before {
			content: '\\eb8c';
		}
		:host([icon='symbol-string']):before {
			content: '\\eb8d';
		}
		:host([icon='debug-reverse-continue']):before {
			content: '\\eb8e';
		}
		:host([icon='debug-step-back']):before {
			content: '\\eb8f';
		}
		:host([icon='debug-restart-frame']):before {
			content: '\\eb90';
		}
		:host([icon='debug-alt']):before {
			content: '\\eb91';
		}
		:host([icon='call-incoming']):before {
			content: '\\eb92';
		}
		:host([icon='call-outgoing']):before {
			content: '\\eb93';
		}
		:host([icon='menu']):before {
			content: '\\eb94';
		}
		:host([icon='expand-all']):before {
			content: '\\eb95';
		}
		:host([icon='feedback']):before {
			content: '\\eb96';
		}
		:host([icon='group-by-ref-type']):before {
			content: '\\eb97';
		}
		:host([icon='ungroup-by-ref-type']):before {
			content: '\\eb98';
		}
		:host([icon='account']):before {
			content: '\\eb99';
		}
		:host([icon='bell-dot']):before {
			content: '\\eb9a';
		}
		:host([icon='debug-console']):before {
			content: '\\eb9b';
		}
		:host([icon='library']):before {
			content: '\\eb9c';
		}
		:host([icon='output']):before {
			content: '\\eb9d';
		}
		:host([icon='run-all']):before {
			content: '\\eb9e';
		}
		:host([icon='sync-ignored']):before {
			content: '\\eb9f';
		}
		:host([icon='pinned']):before {
			content: '\\eba0';
		}
		:host([icon='github-inverted']):before {
			content: '\\eba1';
		}
		:host([icon='server-process']):before {
			content: '\\eba2';
		}
		:host([icon='server-environment']):before {
			content: '\\eba3';
		}
		:host([icon='pass']):before {
			content: '\\eba4';
		}
		:host([icon='issue-closed']):before {
			content: '\\eba4';
		}
		:host([icon='stop-circle']):before {
			content: '\\eba5';
		}
		:host([icon='play-circle']):before {
			content: '\\eba6';
		}
		:host([icon='record']):before {
			content: '\\eba7';
		}
		:host([icon='debug-alt-small']):before {
			content: '\\eba8';
		}
		:host([icon='vm-connect']):before {
			content: '\\eba9';
		}
		:host([icon='cloud']):before {
			content: '\\ebaa';
		}
		:host([icon='merge']):before {
			content: '\\ebab';
		}
		:host([icon='export']):before {
			content: '\\ebac';
		}
		:host([icon='graph-left']):before {
			content: '\\ebad';
		}
		:host([icon='magnet']):before {
			content: '\\ebae';
		}
		:host([icon='notebook']):before {
			content: '\\ebaf';
		}
		:host([icon='redo']):before {
			content: '\\ebb0';
		}
		:host([icon='check-all']):before {
			content: '\\ebb1';
		}
		:host([icon='pinned-dirty']):before {
			content: '\\ebb2';
		}
		:host([icon='pass-filled']):before {
			content: '\\ebb3';
		}
		:host([icon='circle-large-filled']):before {
			content: '\\ebb4';
		}
		:host([icon='circle-large-outline']):before {
			content: '\\ebb5';
		}
		:host([icon='combine']):before {
			content: '\\ebb6';
		}
		:host([icon='gather']):before {
			content: '\\ebb6';
		}
		:host([icon='table']):before {
			content: '\\ebb7';
		}
		:host([icon='variable-group']):before {
			content: '\\ebb8';
		}
		:host([icon='type-hierarchy']):before {
			content: '\\ebb9';
		}
		:host([icon='type-hierarchy-sub']):before {
			content: '\\ebba';
		}
		:host([icon='type-hierarchy-super']):before {
			content: '\\ebbb';
		}
		:host([icon='git-pull-request-create']):before {
			content: '\\ebbc';
		}
		:host([icon='run-above']):before {
			content: '\\ebbd';
		}
		:host([icon='run-below']):before {
			content: '\\ebbe';
		}
		:host([icon='notebook-template']):before {
			content: '\\ebbf';
		}
		:host([icon='debug-rerun']):before {
			content: '\\ebc0';
		}
		:host([icon='workspace-trusted']):before {
			content: '\\ebc1';
		}
		:host([icon='workspace-untrusted']):before {
			content: '\\ebc2';
		}
		:host([icon='workspace-unknown']):before {
			content: '\\ebc3';
		}
		:host([icon='terminal-cmd']):before {
			content: '\\ebc4';
		}
		:host([icon='terminal-debian']):before {
			content: '\\ebc5';
		}
		:host([icon='terminal-linux']):before {
			content: '\\ebc6';
		}
		:host([icon='terminal-powershell']):before {
			content: '\\ebc7';
		}
		:host([icon='terminal-tmux']):before {
			content: '\\ebc8';
		}
		:host([icon='terminal-ubuntu']):before {
			content: '\\ebc9';
		}
		:host([icon='terminal-bash']):before {
			content: '\\ebca';
		}
		:host([icon='arrow-swap']):before {
			content: '\\ebcb';
		}
		:host([icon='copy']):before {
			content: '\\ebcc';
		}
		:host([icon='person-add']):before {
			content: '\\ebcd';
		}
		:host([icon='filter-filled']):before {
			content: '\\ebce';
		}
		:host([icon='wand']):before {
			content: '\\ebcf';
		}
		:host([icon='debug-line-by-line']):before {
			content: '\\ebd0';
		}
		:host([icon='inspect']):before {
			content: '\\ebd1';
		}
		:host([icon='layers']):before {
			content: '\\ebd2';
		}
		:host([icon='layers-dot']):before {
			content: '\\ebd3';
		}
		:host([icon='layers-active']):before {
			content: '\\ebd4';
		}
		:host([icon='compass']):before {
			content: '\\ebd5';
		}
		:host([icon='compass-dot']):before {
			content: '\\ebd6';
		}
		:host([icon='compass-active']):before {
			content: '\\ebd7';
		}
		:host([icon='azure']):before {
			content: '\\ebd8';
		}
		:host([icon='issue-draft']):before {
			content: '\\ebd9';
		}
		:host([icon='git-pull-request-closed']):before {
			content: '\\ebda';
		}
		:host([icon='git-pull-request-draft']):before {
			content: '\\ebdb';
		}
		:host([icon='debug-all']):before {
			content: '\\ebdc';
		}
		:host([icon='debug-coverage']):before {
			content: '\\ebdd';
		}
		:host([icon='run-errors']):before {
			content: '\\ebde';
		}
		:host([icon='folder-library']):before {
			content: '\\ebdf';
		}
		:host([icon='debug-continue-small']):before {
			content: '\\ebe0';
		}
		:host([icon='beaker-stop']):before {
			content: '\\ebe1';
		}
		:host([icon='graph-line']):before {
			content: '\\ebe2';
		}
		:host([icon='graph-scatter']):before {
			content: '\\ebe3';
		}
		:host([icon='pie-chart']):before {
			content: '\\ebe4';
		}
		:host([icon='bracket']):before {
			content: '\\eb0f';
		}
		:host([icon='bracket-dot']):before {
			content: '\\ebe5';
		}
		:host([icon='bracket-error']):before {
			content: '\\ebe6';
		}
		:host([icon='lock-small']):before {
			content: '\\ebe7';
		}
		:host([icon='azure-devops']):before {
			content: '\\ebe8';
		}
		:host([icon='verified-filled']):before {
			content: '\\ebe9';
		}
		:host([icon='newline']):before {
			content: '\\ebea';
		}
		:host([icon='layout']):before {
			content: '\\ebeb';
		}
		:host([icon='layout-activitybar-left']):before {
			content: '\\ebec';
		}
		:host([icon='layout-activitybar-right']):before {
			content: '\\ebed';
		}
		:host([icon='layout-panel-left']):before {
			content: '\\ebee';
		}
		:host([icon='layout-panel-center']):before {
			content: '\\ebef';
		}
		:host([icon='layout-panel-justify']):before {
			content: '\\ebf0';
		}
		:host([icon='layout-panel-right']):before {
			content: '\\ebf1';
		}
		:host([icon='layout-panel']):before {
			content: '\\ebf2';
		}
		:host([icon='layout-sidebar-left']):before {
			content: '\\ebf3';
		}
		:host([icon='layout-sidebar-right']):before {
			content: '\\ebf4';
		}
		:host([icon='layout-statusbar']):before {
			content: '\\ebf5';
		}
		:host([icon='layout-menubar']):before {
			content: '\\ebf6';
		}
		:host([icon='layout-centered']):before {
			content: '\\ebf7';
		}
		:host([icon='target']):before {
			content: '\\ebf8';
		}

		:host([icon='indent']):before {
			content: '\\ebf9';
		}
		:host([icon='record-small']):before {
			content: '\\ebfa';
		}
		:host([icon='error-small']):before {
			content: '\\ebfb';
		}
		:host([icon='terminal-decoration-error']):before {
			content: '\\ebfb';
		}
		:host([icon='arrow-circle-down']):before {
			content: '\\ebfc';
		}
		:host([icon='arrow-circle-left']):before {
			content: '\\ebfd';
		}
		:host([icon='arrow-circle-right']):before {
			content: '\\ebfe';
		}
		:host([icon='arrow-circle-up']):before {
			content: '\\ebff';
		}
		:host([icon='layout-sidebar-right-off']):before {
			content: '\\ec00';
		}
		:host([icon='layout-panel-off']):before {
			content: '\\ec01';
		}
		:host([icon='layout-sidebar-left-off']):before {
			content: '\\ec02';
		}
		:host([icon='blank']):before {
			content: '\\ec03';
		}
		:host([icon='heart-filled']):before {
			content: '\\ec04';
		}
		:host([icon='map']):before {
			content: '\\ec05';
		}
		:host([icon='map-filled']):before {
			content: '\\ec06';
		}
		:host([icon='circle-small']):before {
			content: '\\ec07';
		}
		:host([icon='bell-slash']):before {
			content: '\\ec08';
		}
		:host([icon='bell-slash-dot']):before {
			content: '\\ec09';
		}
		:host([icon='comment-unresolved']):before {
			content: '\\ec0a';
		}
		:host([icon='git-pull-request-go-to-changes']):before {
			content: '\\ec0b';
		}
		:host([icon='git-pull-request-new-changes']):before {
			content: '\\ec0c';
		}
		:host([icon='search-fuzzy']):before {
			content: '\\ec0d';
		}
		:host([icon='comment-draft']):before {
			content: '\\ec0e';
		}
		:host([icon='send']):before {
			content: '\\ec0f';
		}
		:host([icon='sparkle']):before {
			content: '\\ec10';
		}
		:host([icon='insert']):before {
			content: '\\ec11';
		}

		:host([icon^='gl-']) {
			font-family: 'glicons';
		}
		:host([icon='gl-commit-horizontal']):before {
			content: '\\f101';
		}
		:host([icon='gl-graph']):before {
			content: '\\f102';
		}
		:host([icon='gl-next-commit']):before {
			content: '\\f103';
		}
		:host([icon='gl-prev-commit-menu']):before {
			content: '\\f104';
		}
		:host([icon='gl-prev-commit']):before {
			content: '\\f105';
		}
		:host([icon='gl-compare-ref-working']):before {
			content: '\\f106';
		}
		:host([icon='gl-branches-view']):before {
			content: '\\f107';
		}
		:host([icon='gl-commit-view']):before {
			content: '\\f108';
		}
		:host([icon='gl-commits-view']):before {
			content: '\\f109';
		}
		:host([icon='gl-compare-view']):before {
			content: '\\f10a';
		}
		:host([icon='gl-contributors-view']):before {
			content: '\\f10b';
		}
		:host([icon='gl-history-view']):before {
			content: '\\f10c';
		}
		:host([icon='gl-remotes-view']):before {
			content: '\\f10d';
		}
		:host([icon='gl-repositories-view']):before {
			content: '\\f10e';
		}
		:host([icon='gl-search-view']):before {
			content: '\\f10f';
		}
		:host([icon='gl-stashes-view']):before {
			content: '\\f110';
		}
		:host([icon='gl-tags-view']):before {
			content: '\\f111';
		}
		:host([icon='gl-worktrees-view']):before {
			content: '\\f112';
		}
		:host([icon='gl-gitlens']):before {
			content: '\\f113';
		}
		:host([icon='gl-stash-pop']):before {
			content: '\\f114';
		}
		:host([icon='gl-stash-save']):before {
			content: '\\f115';
		}
		:host([icon='gl-unplug']):before {
			content: '\\f116';
		}
		:host([icon='gl-open-revision']):before {
			content: '\\f117';
		}
		:host([icon='gl-switch']):before {
			content: '\\f118';
		}
		:host([icon='gl-expand']):before {
			content: '\\f119';
		}
		:host([icon='gl-list-auto']):before {
			content: '\\f11a';
		}
		:host([icon='gl-arrow-up-force']):before {
			content: '\\f11b';
		}
		:host([icon='gl-pinned-filled']):before {
			content: '\\f11c';
			/* TODO: see relative positioning needed in every use-case */
			position: relative;
			left: 1px;
		}
		:host([icon='gl-clock']):before {
			content: '\\f11d';
		}
		:host([icon='gl-provider-azdo']):before {
			content: '\\f11e';
		}
		:host([icon='gl-provider-bitbucket']):before {
			content: '\\f11f';
		}
		:host([icon='gl-provider-gerrit']):before {
			content: '\\f120';
		}
		:host([icon='gl-provider-gitea']):before {
			content: '\\f121';
		}
		:host([icon='gl-provider-github']):before {
			content: '\\f122';
		}
		:host([icon='gl-provider-gitlab']):before {
			content: '\\f123';
		}
		:host([icon='gl-gitlens-inspect']):before {
			content: '\\f124';
		}
		:host([icon='gl-workspaces-view']):before {
			content: '\\f125';
		}
		:host([icon='gl-cloud-patch']):before {
			content: '\\f128';
		}
		:host([icon='gl-cloud-patch-share']):before {
			content: '\\f129';
		}

		@keyframes codicon-spin {
			100% {
				transform: rotate(360deg);
			}
		}

		:host([modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;
		}
		:host([icon='loading'][modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;

			/* custom speed & easing for loading icon */
			animation-duration: 1s !important;
			animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67) !important;
		}
	`,Mt([_t()],Dt.prototype,"icon",2),Mt([_t()],Dt.prototype,"modifier",2),Mt([_t({type:Number})],Dt.prototype,"size",2),Dt=Mt([kt("code-icon")],Dt);var Rt=Object.defineProperty,Tt=Object.getOwnPropertyDescriptor,Nt=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?Tt(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&Rt(t,o,r),r};let Ut=class extends yt{constructor(){super(...arguments),this.label="",this.icon=""}render(){return ot`
			<a
				role="${this.href?it:"button"}"
				type="${this.href?it:"button"}"
				aria-label="${this.label}"
				title="${this.label}"
			>
				<code-icon icon="${this.icon}"></code-icon>
			</a>
		`}};Ut.styles=ge`
		:host {
			box-sizing: border-box;
			display: inline-flex;
			justify-content: center;
			align-items: center;
			width: 2rem;
			height: 2rem;
			border-radius: 0.5rem;
			color: inherit;
			padding: 0.2rem;
			vertical-align: text-bottom;
			text-decoration: none;
			cursor: pointer;
		}

		:host(:focus) {
			outline: 1px solid var(--vscode-focusBorder);
			outline-offset: -1px;
		}

		:host(:hover) {
			background-color: var(--vscode-toolbar-hoverBackground);
		}

		:host(:active) {
			background-color: var(--vscode-toolbar-activeBackground);
		}
	`,Nt([_t()],Ut.prototype,"href",2),Nt([_t()],Ut.prototype,"label",2),Nt([_t()],Ut.prototype,"icon",2),Ut=Nt([kt("action-item")],Ut);var Lt=Object.defineProperty,jt=Object.getOwnPropertyDescriptor,Bt=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?jt(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&Lt(t,o,r),r};let zt=class extends yt{firstUpdated(){this.role="navigation"}disconnectedCallback(){this._slotSubscriptionsDisposer?.()}render(){return ot`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(e){if(this._slotSubscriptionsDisposer?.(),this.actionNodes.length<2)return;const t=this.handleKeydown.bind(this),o=`${this.actionNodes.length}`,n=this.actionNodes.map(((e,n)=>(e.setAttribute("aria-posinset",`${n+1}`),e.setAttribute("aria-setsize",o),e.setAttribute("tabindex",0===n?"0":"-1"),e.addEventListener("keydown",t,!1),{dispose:()=>{e?.removeEventListener("keydown",t,!1)}})));this._slotSubscriptionsDisposer=()=>{n?.forEach((({dispose:e})=>e()))}}handleKeydown(e){if(!e.target||null==this.actionNodes||this.actionNodes.length<2)return;const t=e.target,o=parseInt(t.getAttribute("aria-posinset")??"0",10);let n=null;if("ArrowLeft"===e.key){const e=1===o?this.actionNodes.length-1:o-2;n=this.actionNodes[e]}else if("ArrowRight"===e.key){const e=o===this.actionNodes.length?0:o;n=this.actionNodes[e]}null!=n&&n!==t&&(t.setAttribute("tabindex","-1"),n.setAttribute("tabindex","0"),n.focus())}};zt.styles=ge`
		:host {
			display: flex;
			align-items: center;
			user-select: none;
		}
	`,Bt([Et({flatten:!0})],zt.prototype,"actionNodes",2),zt=Bt([kt("action-nav")],zt);const Ht=()=>({toAttribute:e=>e.getTime(),fromAttribute:(e,t)=>new Date(parseInt(e,10))}),It=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,Ft=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,qt=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let Vt;const Wt=new Map;let Yt,Gt,Kt;function Zt(e,t,o,n=!0){const i=`${o??""}:${t=t??void 0}`;let r=Wt.get(i);if(null==r){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=Ft.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}const o={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(It))if(null!=t)for(const e in t){const n=t[e];if(null!=n)switch(e){case"year":o.year=4===n.length?"numeric":"2-digit";break;case"month":switch(n.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":o.day="DD"===n?"2-digit":"numeric";break;case"weekday":switch(n.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===n.length?"2-digit":"numeric",o.hour12="hh"===n||"h"===n;break;case"minute":o.minute=2===n.length?"2-digit":"numeric";break;case"second":o.second=2===n.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===n.length?"long":"short"}}return o}(t);let s;s=null==o?Yt:"system"===o?void 0:[o],r=new Intl.DateTimeFormat(s,e),n&&Wt.set(i,r)}if(null==t||Ft.test(t))return r.format(e);function s(e){const t=`${o??""}:time:${e}`;let i=Wt.get(t);if(null==i){const r={localeMatcher:"best fit",timeStyle:e};let s;s=null==o?Yt:"system"===o?void 0:[o],i=new Intl.DateTimeFormat(s,r),n&&Wt.set(t,i)}return i}const a=r.formatToParts(e);return t.replace(It,((t,o,n,i,r,c,l,h,d,u,p,f,b,m,g)=>{if(null!=o)return o.substring(1,o.length-1);for(const t in g){const o=g[t];if(null==o)continue;const n=a.find((e=>e.type===t));if("Do"===o&&"day"===n?.type)return Jt(Number(n.value));if("a"===o&&"dayPeriod"===n?.type){const t=s("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return` ${(t??n)?.value??""}`}return n?.value??""}return""}))}const Xt=["th","st","nd","rd"];function Jt(e){const t=e%100;return`${e}${Xt[(t-20)%10]??Xt[t]??Xt[0]}`}var Qt=Object.defineProperty,eo=Object.getOwnPropertyDescriptor,to=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?eo(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&Qt(t,o,r),r};let oo=class extends yt{constructor(){super(...arguments),this.format="MMMM Do, YYYY h:mma",this.date=new Date}render(){return ot`<time datetime="${this.date}" title="${Zt(this.date,this.format??"MMMM Do, YYYY h:mma")}"
			>${function(e,t){const o=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,n,i,r]of qt){const s=Math.abs(o);if(s>=n||1e3===n)return t?(null==Vt&&(null!=Kt?Vt=Kt.resolvedOptions().locale:null!=Gt?Vt=Gt.resolvedOptions().locale:(Kt=new Intl.RelativeTimeFormat(Yt,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),Vt=Kt.resolvedOptions().locale)),"en"===Vt||Vt?.startsWith("en-")?`${Math.round(s/i)}${r}`:(null==Kt&&(Kt=new Intl.RelativeTimeFormat(Yt,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),Kt.format(Math.round(o/i),e))):(null==Gt&&(Gt=new Intl.RelativeTimeFormat(Yt,{localeMatcher:"best fit",numeric:"auto",style:"long"})),Gt.format(Math.round(o/i),e))}return""}(this.date)}</time
		>`}};to([_t()],oo.prototype,"format",2),to([_t({converter:Ht(),reflect:!0})],oo.prototype,"date",2),oo=to([kt("formatted-date")],oo);var no=Object.defineProperty,io=Object.getOwnPropertyDescriptor,ro=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?io(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&no(t,o,r),r};let so=class extends yt{constructor(){super(...arguments),this.name="",this.email="",this.avatarUrl="https://www.gravatar.com/avatar/?s=64&d=robohash",this.showAvatar=!1,this.dateFormat="MMMM Do, YYYY h:mma",this.committer=!1,this.actionLabel="committed"}render(){const e=this.showAvatar&&null!=this.avatarUrl&&this.avatarUrl.length>0;return ot`
			<a class="avatar" href="${this.email?`mailto:${this.email}`:"#"}">
				${e?ot`<img class="thumb" src="${this.avatarUrl}" alt="${this.name}" />`:ot`<code-icon icon="person" size="32"></code-icon>`}
			</a>
			<a class="name" href="${this.email?`mailto:${this.email}`:"#"}">${this.name}</a>
			<span class="date">
				${this.actionLabel}
				<formatted-date date=${this.date?.getTime()} format=${this.dateFormat}> </formatted-date>
			</span>
		`}};so.styles=ge`
		:host {
			display: grid;
			gap: 0rem 1rem;
			justify-content: start;
		}

		a {
			color: var(--color-link-foreground);
			text-decoration: none;
		}

		.avatar {
			grid-column: 1;
			grid-row: 1 / 3;
			width: 36px;
		}

		.thumb {
			width: 100%;
			height: auto;
			border-radius: 0.4rem;
		}

		.name {
			grid-column: 2;
			grid-row: 1;
			font-size: 1.5rem;
		}

		.date {
			grid-column: 2;
			grid-row: 2;
			font-size: 1.3rem;
		}
	`,ro([_t()],so.prototype,"name",2),ro([_t()],so.prototype,"email",2),ro([_t({converter:Ht(),reflect:!0})],so.prototype,"date",2),ro([_t()],so.prototype,"avatarUrl",2),ro([_t({type:Boolean})],so.prototype,"showAvatar",2),ro([_t()],so.prototype,"dateFormat",2),ro([_t({type:Boolean})],so.prototype,"committer",2),ro([_t()],so.prototype,"actionLabel",2),so=ro([kt("commit-identity")],so);var ao=Object.defineProperty,co=Object.getOwnPropertyDescriptor,lo=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?co(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&ao(t,o,r),r};let ho=class extends yt{constructor(){super(...arguments),this.url="",this.name="",this.date="",this.status="merged",this.type="autolink",this.key=""}renderDate(){return""===this.date?it:ot`<formatted-date date="${this.date}"></formatted-date>`}render(){let e;switch(this.type){case"issue":e="closed"===this.status?"pass":"issues";break;case"pr":switch(this.status){case"merged":e="git-merge";break;case"closed":e="git-pull-request-closed";break;default:e="git-pull-request"}break;default:e="link"}return ot`
			<span class="icon"><code-icon icon=${e}></code-icon></span>
			<p class="title">
				<a href="${this.url}">${this.name}</a>
			</p>
			<p class="date">${this.key} ${this.status?this.status:it} ${this.renderDate()}</p>
		`}};ho.styles=ge`
		:host {
			display: grid;
			gap: 0.25rem 0.6rem;
			justify-content: start;
		}

		a {
			color: var(--color-link-foreground);
			text-decoration: none;
		}

		.icon {
			grid-column: 1;
			grid-row: 1 / 3;
			color: var(--vscode-gitlens-mergedPullRequestIconColor);
			text-align: center;
			padding-top: 0.1rem;
		}

		.title {
			grid-column: 2;
			grid-row: 1;
			margin: 0;
			font-size: 1.4rem;
		}

		.date {
			grid-column: 2;
			grid-row: 2;
			margin: 0;
			font-size: 1.3rem;
		}
	`,lo([_t()],ho.prototype,"url",2),lo([_t()],ho.prototype,"name",2),lo([_t()],ho.prototype,"date",2),lo([_t()],ho.prototype,"status",2),lo([_t()],ho.prototype,"type",2),lo([_t()],ho.prototype,"key",2),ho=lo([kt("issue-pull-request")],ho);var uo=Object.defineProperty,po=Object.getOwnPropertyDescriptor,fo=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?po(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&uo(t,o,r),r};let bo=class extends yt{constructor(){super(...arguments),this.lines=1}render(){const e=`--skeleton-lines: ${this.lines};`;return ot`<div class="skeleton" style=${e}></div>`}};function mo(e,t,o){return e?t(e):o?.(e)}bo.styles=ge`
		:host {
			--skeleton-line-height: 1.2;
			--skeleton-lines: 1;
		}

		.skeleton {
			position: relative;
			display: block;
			overflow: hidden;
			border-radius: 0.25em;
			width: 100%;
			height: calc(1em * var(--skeleton-line-height, 1.2) * var(--skeleton-lines, 1));
			background-color: var(--color-background--lighten-15);
		}

		.skeleton::before {
			content: '';
			position: absolute;
			display: block;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-image: linear-gradient(
				to right,
				transparent 0%,
				var(--color-background--lighten-15) 20%,
				var(--color-background--lighten-30) 60%,
				transparent 100%
			);
			transform: translateX(-100%);
			animation: skeleton-loader 2s ease-in-out infinite;
		}

		@keyframes skeleton-loader {
			100% {
				transform: translateX(100%);
			}
		}
	`,fo([_t({type:Number})],bo.prototype,"lines",2),bo=fo([kt("skeleton-loader")],bo);var go=Object.defineProperty,vo=Object.getOwnPropertyDescriptor,yo=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?vo(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&go(t,o,r),r};let wo=class extends yt{constructor(){super(...arguments),this.added=0,this.modified=0,this.removed=0}render(){return ot`
			${mo(null!=this.added,(()=>ot`<span class="stat added" title="${this.added} added" aria-label="${this.added} added"
						><span class="label">+${this.added}</span></span
					>`))}
			${mo(null!=this.modified,(()=>ot`<span
						class="stat modified"
						title="${this.modified} modified"
						aria-label="${this.modified} modified"
						><span class="label">~${this.modified}</span></span
					>`))}
			${mo(null!=this.removed,(()=>ot`<span class="stat deleted" title="${this.removed} removed" aria-label="${this.removed} removed"
						><span class="label">-${this.removed}</span></span
					>`))}
		`}};wo.styles=ge`
		:host {
			display: inline-flex;
			flex-direction: row;
			align-items: center;
			gap: 1rem;
		}

		.stat {
			display: inline-flex;
			flex-direction: row;
			align-items: center;
		}

		.stat code-icon {
			margin-right: 0.25rem;
		}

		.added {
			color: var(--vscode-gitDecoration-addedResourceForeground);
		}
		.modified {
			color: var(--vscode-gitDecoration-modifiedResourceForeground);
		}
		.deleted {
			color: var(--vscode-gitDecoration-deletedResourceForeground);
		}

		.label {
			flex-basis: 100%;
			text-align: center;
		}
	`,yo([_t({type:Number})],wo.prototype,"added",2),yo([_t({type:Number})],wo.prototype,"modified",2),yo([_t({type:Number})],wo.prototype,"removed",2),wo=yo([kt("commit-stats")],wo);ge`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus) {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		width: 1px;
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
	}
`;const ko=ge`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,$o=ge`
	:host {
		box-sizing: border-box;
	}
	:host *,
	:host *::before,
	:host *::after {
		box-sizing: inherit;
	}
	[hidden] {
		display: none !important;
	}
`,xo=(ge`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${ko}
	}
	a:hover {
		text-decoration: underline;
	}
`,ge`
	::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}
	::-webkit-scrollbar-corner {
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		background-color: transparent;
		border-color: inherit;
		border-right-style: inset;
		border-right-width: calc(100vw + 100vh);
		border-radius: unset !important;
	}
	::-webkit-scrollbar-thumb:hover {
		border-color: var(--vscode-scrollbarSlider-hoverBackground);
	}
	::-webkit-scrollbar-thumb:active {
		border-color: var(--vscode-scrollbarSlider-activeBackground);
	}

	.scrollable {
		border-color: transparent;
		transition: border-color 1s linear;
	}

	:host(:hover) .scrollable,
	:host(:focus-within) .scrollable {
		border-color: var(--vscode-scrollbarSlider-background);
		transition: none;
	}
`);var _o=Object.defineProperty,Ao=Object.getOwnPropertyDescriptor,Co=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?Ao(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&_o(t,o,r),r};let So=class extends yt{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return ot`<div class="progress-bar"></div>`}};So.styles=ge`
		* {
			box-sizing: border-box;
		}

		:host {
			position: absolute;
			left: 0;
			z-index: 5;
			height: 2px;
			width: 100%;
			overflow: hidden;
		}

		:host([position='bottom']) {
			bottom: 0;
		}

		:host([position='top']) {
			top: 0;
		}

		.progress-bar {
			background-color: var(--vscode-progressBar-background);
			display: none;
			position: absolute;
			left: 0;
			width: 2%;
			height: 2px;
		}

		:host([active]:not([active='false'])) .progress-bar {
			display: inherit;
		}

		:host([mode='discrete']) .progress-bar {
			left: 0;
			transition: width 0.1s linear;
		}

		:host([mode='discrete done']) .progress-bar {
			width: 100%;
		}

		:host([mode='infinite']) .progress-bar {
			animation-name: progress;
			animation-duration: 4s;
			animation-iteration-count: infinite;
			animation-timing-function: steps(100);
			transform: translateZ(0);
		}

		@keyframes progress {
			0% {
				transform: translateX(0) scaleX(1);
			}

			50% {
				transform: translateX(2500%) scaleX(3);
			}

			to {
				transform: translateX(4900%) scaleX(1);
			}
		}
	`,Co([_t({reflect:!0})],So.prototype,"mode",2),Co([_t({type:Boolean})],So.prototype,"active",2),Co([_t()],So.prototype,"position",2),So=Co([kt("progress-indicator")],So);var Eo=Object.defineProperty,Po=Object.getOwnPropertyDescriptor,Oo=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?Po(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&Eo(t,o,r),r};let Mo=class extends yt{constructor(){super(...arguments),this.collapsable=!1,this.expanded=!1,this.loading=!1}renderTitle(){return this.collapsable?ot`<button
			type="button"
			class="label"
			aria-controls="content"
			aria-expanded=${this.expanded}
			@click="${this.toggleExpanded}"
		>
			<code-icon class="icon" icon=${this.expanded?"chevron-down":"chevron-right"}></code-icon
			><span class="title"><slot name="title">Section</slot></span>
			<span class="subtitle"><slot name="subtitle"></slot></span>
		</button>`:ot`<div class="label">
				<span class="title"><slot name="title">Section</slot></span>
				<span class="subtitle"><slot name="subtitle"></slot></span>
			</div>`}render(){return ot`
			<header class="header">
				${this.renderTitle()}
				<slot name="actions"></slot>
				<progress-indicator ?active="${this.loading}"></progress-indicator>
			</header>
			<div id="content" role="region" part="content" class="content scrollable">
				<slot></slot>
			</div>
		`}toggleExpanded(){this.expanded=!this.expanded,this.dispatchEvent(new CustomEvent("expanded-change",{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))}};Mo.styles=[xo,ge`
			:host {
				display: flex;
				flex-direction: column;
				background-color: var(--vscode-sideBar-background);
			}

			* {
				box-sizing: border-box;
			}

			.header {
				flex: none;
				display: flex;
				background-color: var(--vscode-sideBarSectionHeader-background);
				color: var(--vscode-sideBarSectionHeader-foreground);
				border-top: 1px solid var(--vscode-sideBarSectionHeader-border);
				position: relative;
			}

			.header:focus-within {
				outline: 1px solid var(--vscode-focusBorder);
				outline-offset: -1px;
			}

			.label {
				appearance: none;
				display: flex;
				flex-direction: row;
				align-items: center;
				width: 100%;
				padding: 0;
				border: none;
				text-align: left;
				font-family: var(--font-family);
				font-size: 1.1rem;
				line-height: 2.2rem;
				height: 2.2rem;
				background: transparent;
				color: inherit;
				outline: none;
				text-overflow: ellipsis;
				user-select: none;
			}

			:host([collapsable]) .label {
				cursor: pointer;
			}

			.title {
				font-weight: bold;
				text-transform: uppercase;
			}

			:host(:not([collapsable])) .title {
				margin-left: 0.8rem;
			}

			.subtitle {
				margin-left: 1rem;
				opacity: 0.6;
			}

			.icon {
				font-weight: normal;
				margin: 0 0.2rem;
			}

			.content {
				flex: 1;
				overflow: auto;
				min-height: 0;
				/*
			scrollbar-gutter: stable;
			box-shadow: #000000 0 0.6rem 0.6rem -0.6rem inset;
			*/
				padding-top: 0.6rem;
			}

			:host([collapsable]:not([expanded])) .content,
			:host([collapsable][expanded='false']) .content {
				display: none;
			}

			slot[name='actions']::slotted(*) {
				flex: none;
				margin-left: auto;
			}
		`],Oo([_t({type:Boolean,reflect:!0})],Mo.prototype,"collapsable",2),Oo([_t({type:Boolean,reflect:!0})],Mo.prototype,"expanded",2),Oo([_t({type:Boolean,reflect:!0})],Mo.prototype,"loading",2),Mo=Oo([kt("webview-pane")],Mo);var Do=Object.defineProperty,Ro=Object.getOwnPropertyDescriptor,To=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?Ro(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&Do(t,o,r),r};let No=class extends yt{handleSlotChange(e){if(this._slotSubscriptionsDisposer?.(),!this._listItems?.length)return;const t=this._listItems.map((e=>{const t=this.handleKeydown.bind(this),o=this.handleBeforeSelected.bind(this),n=this.handleSelected.bind(this);return e.addEventListener("keydown",t,!1),e.addEventListener("select",o,!1),e.addEventListener("selected",n,!1),{dispose:function(){e?.removeEventListener("keydown",t,!1),e?.removeEventListener("select",o,!1),e?.removeEventListener("selected",n,!1)}}}));this._slotSubscriptionsDisposer=()=>{t?.forEach((({dispose:e})=>e()))}}disconnectedCallback(){super.disconnectedCallback(),this._slotSubscriptionsDisposer?.()}handleBeforeSelected(e){if(!e.target)return;const t=e.target;null!=this._lastSelected&&this._lastSelected!==t&&this._lastSelected.deselect(),this._lastSelected=t}handleSelected(e){if(!e.target||!e.detail.branch)return;function t(e){return parseInt(e.getAttribute("level")??"0",10)}function o(e){const o=t(e);let n=e.previousElementSibling;for(;n;){if(t(n)<o)return n;n=n.previousElementSibling}}const n=e.target,i=t(n);let r=n.nextElementSibling;for(;r&&i!=t(r);){const t=o(r);r.parentexpanded=!1!==t?.expanded,r.expanded=e.detail.expanded,r=r.nextElementSibling}}handleKeydown(e){if(!e.target)return;const t=e.target;if("ArrowUp"===e.key){const e=t.previousElementSibling;e?.focus()}else if("ArrowDown"===e.key){const e=t.nextElementSibling;e?.focus()}}firstUpdated(){this.setAttribute("role","tree")}render(){return ot`<slot @slotchange=${this.handleSlotChange}></slot>`}};No.styles=ge`
		::slotted(*) {
			box-sizing: inherit;
		}
	`,To([Et()],No.prototype,"_listItems",2),No=To([kt("list-container")],No);var Uo=Object.defineProperty,Lo=Object.getOwnPropertyDescriptor,jo=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?Lo(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&Uo(t,o,r),r};let Bo=class extends yt{constructor(){super(...arguments),this.tree=!1,this.branch=!1,this.expanded=!0,this.parentexpanded=!0,this.level=1,this.checkable=!1,this.checked=!1,this.disableCheck=!1,this.active=!1,this.hideIcon=!1}get treeLeaves(){const e=this.level-1;return e<1?[]:Array.from({length:e},((e,t)=>t+1))}get isHidden(){return!1===this.parentexpanded||!this.branch&&!this.expanded?"true":"false"}onItemClick(e){if(this.checkable&&e.target===this.checkboxEl)return e.preventDefault(),void e.stopPropagation();this.select(e.altKey?{viewColumn:-2}:void 0)}onDblItemClick(e){if(this.checkable&&e.target===this.checkboxEl)return e.preventDefault(),void e.stopPropagation();this.select({preview:!1,viewColumn:e.altKey||e.ctrlKey||e.metaKey?-2:void 0})}select(e,t=!1){this.dispatchEvent(new CustomEvent("select")),this.branch&&(this.expanded=!this.expanded),this.active=!0,t||window.requestAnimationFrame((()=>{this.dispatchEvent(new CustomEvent("selected",{detail:{tree:this.tree,branch:this.branch,expanded:this.expanded,level:this.level,showOptions:e}}))}))}deselect(){this.active=!1}focus(e){this.shadowRoot?.getElementById("item")?.focus(e)}firstUpdated(e){this.setAttribute("role","treeitem")}updated(){this.setAttribute("aria-expanded",this.expanded?"true":"false"),this.setAttribute("aria-hidden",this.isHidden)}renderCheckbox(){return this.checkable?ot`<span class="checkbox"
			><input
				class="checkbox__input"
				id="checkbox"
				type="checkbox"
				.checked=${this.checked}
				?disabled=${this.disableCheck}
				@change=${this.onCheckedChange}
				@click=${this.onCheckedClick} /><code-icon icon="check" size="14" class="checkbox__check"></code-icon
		></span>`:it}render(){return ot`
			<button
				id="item"
				class="item"
				type="button"
				@click="${this.onItemClick}"
				@dblclick="${this.onDblItemClick}"
			>
				${this.treeLeaves.map((()=>ot`<span class="node node--connector"><code-icon name="blank"></code-icon></span>`))}
				${this.branch?ot`<span class="node"
							><code-icon
								class="branch"
								icon="${this.expanded?"chevron-down":"chevron-right"}"
							></code-icon
					  ></span>`:it}
				${this.renderCheckbox()}
				${this.hideIcon?it:ot`<span class="icon"><slot name="icon"></slot></span>`}
				<span class="text">
					<span class="main"><slot></slot></span>
					<span class="description"><slot name="description"></slot></span>
				</span>
			</button>
			<nav class="actions"><slot name="actions"></slot></nav>
		`}onCheckedClick(e){e.stopPropagation()}onCheckedChange(e){e.preventDefault(),e.stopPropagation(),this.checked=e.target.checked,this.dispatchEvent(new CustomEvent("list-item-checked",{detail:{checked:this.checked}}))}};Bo.styles=ge`
		:host {
			box-sizing: border-box;
			padding-left: var(--gitlens-gutter-width);
			padding-right: var(--gitlens-scrollbar-gutter-width);
			padding-top: 0.1rem;
			padding-bottom: 0.1rem;
			line-height: 2.2rem;
			height: 2.2rem;

			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			font-size: var(--vscode-font-size);
			color: var(--vscode-sideBar-foreground);

			content-visibility: auto;
			contain-intrinsic-size: auto 2.2rem;
		}

		:host(:hover) {
			color: var(--vscode-list-hoverForeground);
			background-color: var(--vscode-list-hoverBackground);
		}

		:host([active]) {
			color: var(--vscode-list-inactiveSelectionForeground);
			background-color: var(--vscode-list-inactiveSelectionBackground);
		}

		:host(:focus-within) {
			outline: 1px solid var(--vscode-list-focusOutline);
			outline-offset: -0.1rem;
			color: var(--vscode-list-activeSelectionForeground);
			background-color: var(--vscode-list-activeSelectionBackground);
		}

		:host([aria-hidden='true']) {
			display: none;
		}

		* {
			box-sizing: border-box;
		}

		.item {
			appearance: none;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			gap: 0.6rem;
			width: 100%;
			padding: 0;
			text-decoration: none;
			color: inherit;
			background: none;
			border: none;
			outline: none;
			cursor: pointer;
			min-width: 0;
		}

		.icon {
			display: inline-block;
			width: 1.6rem;
			text-align: center;
		}

		slot[name='icon']::slotted(*) {
			width: 1.6rem;
			aspect-ratio: 1;
			vertical-align: text-bottom;
		}

		.node {
			display: inline-block;
			width: 1.6rem;
			text-align: center;
		}

		.node--connector {
			position: relative;
		}
		.node--connector::before {
			content: '';
			position: absolute;
			height: 2.2rem;
			border-left: 1px solid transparent;
			top: 50%;
			transform: translate(-50%, -50%);
			left: 0.8rem;
			width: 0.1rem;
			transition: border-color 0.1s linear;
			opacity: 0.4;
		}

		:host-context(.indentGuides-always) .node--connector::before,
		:host-context(.indentGuides-onHover:focus-within) .node--connector::before,
		:host-context(.indentGuides-onHover:hover) .node--connector::before {
			border-color: var(--vscode-tree-indentGuidesStroke);
		}

		.text {
			line-height: 1.6rem;
			overflow: hidden;
			white-space: nowrap;
			text-align: left;
			text-overflow: ellipsis;
			flex: 1;
		}

		.description {
			opacity: 0.7;
			margin-left: 0.3rem;
		}

		.actions {
			flex: none;
			user-select: none;
			color: var(--vscode-icon-foreground);
		}

		:host(:focus-within) .actions {
			color: var(--vscode-list-activeSelectionIconForeground);
		}

		:host(:not(:hover):not(:focus-within)) .actions {
			display: none;
		}

		slot[name='actions']::slotted(*) {
			display: flex;
			align-items: center;
		}

		.checkbox {
			position: relative;
			display: inline-flex;
			width: 1.6rem;
			aspect-ratio: 1 / 1;
			text-align: center;
			color: var(--vscode-checkbox-foreground);
			background: var(--vscode-checkbox-background);
			border: 1px solid var(--vscode-checkbox-border);
			border-radius: 0.3rem;
			// overflow: hidden;
		}

		.checkbox:has(:checked) {
			color: var(--vscode-inputOption-activeForeground);
			border-color: var(--vscode-inputOption-activeBorder);
			background-color: var(--vscode-inputOption-activeBackground);
		}

		.checkbox:has(:disabled) {
			opacity: 0.4;
		}

		.checkbox__input {
			position: absolute;
			top: 0;
			left: 0;
			appearance: none;
			width: 1.4rem;
			aspect-ratio: 1 / 1;
			margin: 0;
			cursor: pointer;
			border-radius: 0.3rem;
		}

		.checkbox__input:disabled {
			cursor: default;
		}

		.checkbox__check {
			width: 1.6rem;
			aspect-ratio: 1 / 1;
			opacity: 0;
			transition: opacity 0.1s linear;
			color: var(--vscode-checkbox-foreground);
			pointer-events: none;
		}

		.checkbox__input:checked + .checkbox__check {
			opacity: 1;
		}
	`,jo([_t({type:Boolean,reflect:!0})],Bo.prototype,"tree",2),jo([_t({type:Boolean,reflect:!0})],Bo.prototype,"branch",2),jo([_t({type:Boolean,reflect:!0})],Bo.prototype,"expanded",2),jo([_t({type:Boolean,reflect:!0})],Bo.prototype,"parentexpanded",2),jo([_t({type:Number})],Bo.prototype,"level",2),jo([_t({type:Boolean,reflect:!0})],Bo.prototype,"checkable",2),jo([_t({type:Boolean,reflect:!0})],Bo.prototype,"checked",2),jo([_t({type:Boolean,attribute:"disable-check",reflect:!0})],Bo.prototype,"disableCheck",2),jo([_t({type:Boolean})],Bo.prototype,"active",2),jo([_t({attribute:"hide-icon",type:Boolean})],Bo.prototype,"hideIcon",2),jo([At()],Bo.prototype,"treeLeaves",1),jo([At()],Bo.prototype,"isHidden",1),jo([St("#checkbox")],Bo.prototype,"checkboxEl",2),Bo=jo([kt("list-item")],Bo);var zo=Object.defineProperty,Ho=Object.getOwnPropertyDescriptor,Io=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?Ho(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&zo(t,o,r),r};const Fo={".":"Unchanged","!":"Ignored","?":"Untracked",A:"Added",D:"Deleted",M:"Modified",R:"Renamed",C:"Copied",AA:"Conflict",AU:"Conflict",UA:"Conflict",DD:"Conflict",DU:"Conflict",UD:"Conflict",UU:"Conflict",T:"Modified",U:"Updated but Unmerged"};let qo=class extends yt{get statusName(){return this.status?Fo[this.status]:""}updated(e){super.updated(e),e.has("status")&&(this.statusName?this.setAttribute("title",this.statusName):this.removeAttribute("title"))}renderIgnored(){return ot`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#969696"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM10 4l-6.01 6.01 1.06 1.061 6.01-6.01L10 4z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderUntracked(){return ot`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#6C6C6C"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-3.942-3.942l7.5-7.5.884.884-.664.664c.95.655 1.65 1.524 2.222 2.394-1.15 1.75-2.824 3.5-6 3.5-.696 0-1.32-.084-1.882-.234l-1.176 1.176-.884-.884zm5.188-3.42l1.629-1.629c.634.393 1.147.913 1.594 1.491C10.99 8.767 9.692 9.75 7.5 9.75c-.287 0-.56-.017-.817-.05l.455-.454a1.5 1.5 0 0 0 1.608-1.608zM7.362 6.254L5.754 7.862a1.5 1.5 0 0 1 1.608-1.608zm.955-.955A6.595 6.595 0 0 0 7.5 5.25c-2.192 0-3.49.982-4.469 2.25.447.578.96 1.098 1.594 1.491l-.903.903C2.772 9.239 2.072 8.369 1.5 7.5 2.65 5.75 4.324 4 7.5 4c.696 0 1.32.084 1.882.234L8.317 5.299z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderAdded(){return ot`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#388A34"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm.75-6.75h3v-1.5h-3v-3h-1.5v3h-3v1.5h3v3h1.5v-3z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderDeleted(){return ot`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#9E121D"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm3.75-6.75v-1.5h-7.5v1.5h7.5z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderModified(){return ot`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#1B80B2"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm3.75-9.5V7h-3v2.5h-1.5V7h-3V5.5h3v-3h1.5v3h3zm0 5V12h-7.5v-1.5h7.5z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderRenamed(){return ot`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#C63"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM9.25 4.5v1.25h1.25l1 1v2.5l-1 1H9.25v1.25H10v1.25H7V11.5h.75v-1.25H4l-1-1v-2.5l1-1h3.75V4.5H7V3.25h3V4.5h-.75zm-5 2.5h3.5v2h-3.5V7zm5 0v2h1V7h-1z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderCopied(){return ot`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#692C77"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM6.964 3.75L5.893 4.813v.53h1.071v-.53h3.215v4.25h-.536v1.062h.536l1.071-1.063v-4.25L10.179 3.75H6.964zM3.75 6.938l1.071-1.063h3.215l1.071 1.063v4.25L8.036 12.25H4.82L3.75 11.187v-4.25zm1.071 0v4.25h3.215v-4.25H4.82z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderConflict(){return ot`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#7F4E7E"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-4.03-4.53L6.44 7.5 3.47 4.53l1.06-1.06L7.5 6.44l2.97-2.97 1.06 1.06L8.56 7.5l2.97 2.97-1.06 1.06L7.5 8.56l-2.97 2.97-1.06-1.06z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderUnknown(){return ot`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#6C6C6C"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM9.19 2.822c-.439-.215-.97-.322-1.596-.322-1.25 0-2.282.478-3.094 1.435l1.05.798c.275-.331.579-.574.91-.728.331-.154.66-.231.987-.231.415 0 .76.093 1.036.28.275.182.413.448.413.798 0 .275-.082.509-.245.7-.159.187-.36.364-.602.532a9.506 9.506 0 0 0-.728.56 2.66 2.66 0 0 0-.602.763c-.159.299-.238.679-.238 1.141v.483h1.498v-.413c0-.364.086-.663.259-.896a2.76 2.76 0 0 1 .637-.616c.252-.177.504-.362.756-.553.257-.196.471-.436.644-.721.173-.285.259-.651.259-1.099 0-.387-.114-.749-.343-1.085-.229-.34-.562-.616-1.001-.826zm-1.169 7.917a1.024 1.024 0 0 0-.763-.315c-.294 0-.544.105-.749.315-.2.205-.301.453-.301.742 0 .294.1.546.301.756.205.205.455.308.749.308.303 0 .558-.103.763-.308.205-.21.308-.462.308-.756 0-.29-.103-.537-.308-.742z"
					clip-rule="evenodd"
				/>
			</svg>
		`}render(){switch(this.status){case"!":return this.renderIgnored();case"?":return this.renderUntracked();case"A":return this.renderAdded();case"D":return this.renderDeleted();case"M":case"T":case"U":return this.renderModified();case"R":return this.renderRenamed();case"C":return this.renderCopied();case"AA":case"AU":case"UA":case"DD":case"DU":case"UD":case"UU":return this.renderConflict()}return this.renderUnknown()}};qo.styles=[ge`
			:host-context(.vscode-high-contrast),
			:host-context(.vscode-dark) {
				--gl-git-status-ignored: #969696;
				--gl-git-status-untracked: #6c6c6c;
				--gl-git-status-added: #388a34;
				--gl-git-status-deleted: #9e121d;
				--gl-git-status-modified: #1b80b2;
				--gl-git-status-renamed: #c63;
				--gl-git-status-copied: #692c77;
				--gl-git-status-conflict: #7f4e7e;
				--gl-git-status-unknown: #6c6c6c;
			}

			:host-context(.vscode-high-contrast-light),
			:host-context(.vscode-light) {
				--gl-git-status-ignored: #969696;
				--gl-git-status-untracked: #6c6c6c;
				--gl-git-status-added: #388a34;
				--gl-git-status-deleted: #9e121d;
				--gl-git-status-modified: #1b80b2;
				--gl-git-status-renamed: #c63;
				--gl-git-status-copied: #692c77;
				--gl-git-status-conflict: #7f4e7e;
				--gl-git-status-unknown: #6c6c6c;
			}

			:host {
				display: inline-block;
				width: 16px;
				aspect-ratio: 1 / 1;
			}

			svg {
				display: inline-block;
				vertical-align: text-bottom;
			}
		`],Io([_t()],qo.prototype,"status",2),Io([At()],qo.prototype,"statusName",1),qo=Io([kt("gl-git-status")],qo);var Vo=Object.defineProperty,Wo=Object.getOwnPropertyDescriptor,Yo=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?Wo(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&Vo(t,o,r),r};let Go=class extends yt{constructor(){super(...arguments),this.tree=!1,this.expanded=!0,this.parentexpanded=!0,this.level=1,this.checkable=!1,this.checked=!1,this.active=!1,this.stash=!1,this.uncommitted=!1,this.readonly=!1,this.icon="",this.path="",this.repo="",this.staged=!1,this.status=""}select(e){this.baseRef.select(e)}deselect(){this.baseRef.deselect()}focus(e){this.baseRef.focus(e)}get isHidden(){return this.baseRef?.isHidden??"false"}get pathIndex(){return this.path.lastIndexOf("/")}get fileName(){return this.pathIndex>-1?this.path.substring(this.pathIndex+1):this.path}get filePath(){return!this.tree&&this.pathIndex>-1?this.path.substring(0,this.pathIndex):""}render(){return ot`
			<list-item
				?tree=${this.tree}
				level=${this.level}
				?active=${this.active}
				?expanded=${this.expanded}
				?parentexpanded=${this.parentexpanded}
				?checkable=${this.checkable}
				?checked=${this.checked}
				@selected=${this.onComparePrevious}
			>
				<gl-git-status slot="icon" .status=${this.status}></gl-git-status>
				${this.fileName} ${this.tree?it:ot`<span slot="description">${this.filePath}</span>`}
				<span slot="actions">
					<a
						class="change-list__action"
						@click=${this.onOpenFile}
						href="#"
						title="Open file"
						aria-label="Open file"
					>
						<code-icon icon="go-to-file"></code-icon>
					</a>
					${this.uncommitted&&!this.readonly?this.staged?ot`
									<a
										class="change-list__action"
										@click=${this.onUnstageFile}
										href="#"
										title="Unstage Changes"
										aria-label="Unstage Changes"
									>
										<code-icon icon="remove"></code-icon>
									</a>
							  `:ot`
									<a
										class="change-list__action"
										@click=${this.onStageFile}
										href="#"
										title="Stage Changes"
										aria-label="Stage Changes"
									>
										<code-icon icon="plus"></code-icon>
									</a>
							  `:this.uncommitted?it:ot`
								<a
									class="change-list__action"
									@click=${this.onCompareWorking}
									href="#"
									title="Open Changes with Working File"
									aria-label="Open Changes with Working File"
								>
									<code-icon icon="git-compare"></code-icon>
								</a>
								${this.stash?it:ot`
											<a
												class="change-list__action"
												@click=${this.onOpenFileOnRemote}
												href="#"
												title="Open on remote"
												aria-label="Open on remote"
											>
												<code-icon icon="globe"></code-icon>
											</a>
											<a
												class="change-list__action"
												@click=${this.onMoreActions}
												href="#"
												title="Show more actions"
												aria-label="Show more actions"
											>
												<code-icon icon="ellipsis"></code-icon>
											</a>
									  `}
						  `}
				</span>
			</list-item>
		`}onOpenFile(e){const t=new CustomEvent("file-open",{detail:this.getEventDetail({preview:!1,viewColumn:e.altKey?-2:void 0})});this.dispatchEvent(t)}onOpenFileOnRemote(e){const t=new CustomEvent("file-open-on-remote",{detail:this.getEventDetail({preview:!1,viewColumn:e.altKey?-2:void 0})});this.dispatchEvent(t)}onCompareWorking(e){const t=new CustomEvent("file-compare-working",{detail:this.getEventDetail({preview:!1,viewColumn:e.altKey?-2:void 0})});this.dispatchEvent(t)}onComparePrevious(e){const t=new CustomEvent("file-compare-previous",{detail:this.getEventDetail(e.detail.showOptions)});this.dispatchEvent(t)}onMoreActions(e){const t=new CustomEvent("file-more-actions",{detail:this.getEventDetail()});this.dispatchEvent(t)}onStageFile(e){const t=new CustomEvent("file-stage",{detail:this.getEventDetail()});this.dispatchEvent(t)}onUnstageFile(e){const t=new CustomEvent("file-unstage",{detail:this.getEventDetail()});this.dispatchEvent(t)}getEventDetail(e){return{path:this.path,repoPath:this.repo,status:this.status,staged:this.staged,showOptions:e}}};Go.styles=ge`
		.change-list__action {
			box-sizing: border-box;
			display: inline-flex;
			justify-content: center;
			align-items: center;
			width: 2rem;
			height: 2rem;
			border-radius: 0.25em;
			color: inherit;
			padding: 2px;
			vertical-align: text-bottom;
			text-decoration: none;
		}
		.change-list__action:focus {
			outline: 1px solid var(--vscode-focusBorder);
			outline-offset: -1px;
		}
		.change-list__action:hover {
			background-color: var(--vscode-toolbar-hoverBackground);
		}
		.change-list__action:active {
			background-color: var(--vscode-toolbar-activeBackground);
		}
	`,Yo([St("list-item")],Go.prototype,"baseRef",2),Yo([_t({type:Boolean})],Go.prototype,"tree",2),Yo([_t({type:Boolean,reflect:!0})],Go.prototype,"expanded",2),Yo([_t({type:Boolean,reflect:!0})],Go.prototype,"parentexpanded",2),Yo([_t({type:Number})],Go.prototype,"level",2),Yo([_t({type:Boolean,reflect:!0})],Go.prototype,"checkable",2),Yo([_t({type:Boolean,reflect:!0})],Go.prototype,"checked",2),Yo([_t({type:Boolean})],Go.prototype,"active",2),Yo([_t({type:Boolean})],Go.prototype,"stash",2),Yo([_t({type:Boolean})],Go.prototype,"uncommitted",2),Yo([_t({type:Boolean})],Go.prototype,"readonly",2),Yo([_t({type:String})],Go.prototype,"icon",2),Yo([_t({type:String})],Go.prototype,"path",2),Yo([_t({type:String})],Go.prototype,"repo",2),Yo([_t({type:Boolean})],Go.prototype,"staged",2),Yo([_t({type:String})],Go.prototype,"status",2),Yo([At()],Go.prototype,"isHidden",1),Yo([At()],Go.prototype,"pathIndex",1),Yo([At()],Go.prototype,"fileName",1),Yo([At()],Go.prototype,"filePath",1),Go=Yo([kt("file-change-list-item")],Go);var Ko={408:(e,t)=>{var o=Symbol.for("react.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),p=Symbol.iterator,f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,m={};function g(e,t,o){this.props=e,this.context=t,this.refs=m,this.updater=o||f}function v(){}function y(e,t,o){this.props=e,this.context=t,this.refs=m,this.updater=o||f}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var w=y.prototype=new v;w.constructor=y,b(w,g.prototype),w.isPureReactComponent=!0;var k=Array.isArray,$=Object.prototype.hasOwnProperty,x={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function A(e,t,n){var i,r={},s=null,a=null;if(null!=t)for(i in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)$.call(t,i)&&!_.hasOwnProperty(i)&&(r[i]=t[i]);var c=arguments.length-2;if(1===c)r.children=n;else if(1<c){for(var l=Array(c),h=0;h<c;h++)l[h]=arguments[h+2];r.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps)void 0===r[i]&&(r[i]=c[i]);return{$$typeof:o,type:e,key:s,ref:a,props:r,_owner:x.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var S=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,i,r,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case n:c=!0}}if(c)return s=s(c=e),e=""===r?"."+E(c,0):r,k(s)?(i="",null!=e&&(i=e.replace(S,"$&/")+"/"),P(s,t,i,"",(function(e){return e}))):null!=s&&(C(s)&&(s=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,i+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(S,"$&/")+"/")+e)),t.push(s)),1;if(c=0,r=""===r?".":r+":",k(e))for(var l=0;l<e.length;l++){var h=r+E(a=e[l],l);c+=P(a,t,i,h,s)}else if(h=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof h)for(e=h.call(e),l=0;!(a=e.next()).done;)c+=P(a=a.value,t,i,h=r+E(a,l++),s);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function O(e,t,o){if(null==e)return e;var n=[],i=0;return P(e,n,"","",(function(e){return t.call(o,e,i++)})),n}function M(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var D={current:null},R={transition:null},T={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:R,ReactCurrentOwner:x};t.Children={map:O,forEach:function(e,t,o){O(e,(function(){t.apply(this,arguments)}),o)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=i,t.Profiler=s,t.PureComponent=y,t.StrictMode=r,t.Suspense=h,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=b({},e.props),r=e.key,s=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,a=x.current),void 0!==t.key&&(r=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)$.call(t,l)&&!_.hasOwnProperty(l)&&(i[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){c=Array(l);for(var h=0;h<l;h++)c[h]=arguments[h+2];i.children=c}return{$$typeof:o,type:e.type,key:r,ref:s,props:i,_owner:a}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=A,t.createFactory=function(e){var t=A.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:M}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=R.transition;R.transition={};try{e()}finally{R.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return D.current.useCallback(e,t)},t.useContext=function(e){return D.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return D.current.useDeferredValue(e)},t.useEffect=function(e,t){return D.current.useEffect(e,t)},t.useId=function(){return D.current.useId()},t.useImperativeHandle=function(e,t,o){return D.current.useImperativeHandle(e,t,o)},t.useInsertionEffect=function(e,t){return D.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return D.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return D.current.useMemo(e,t)},t.useReducer=function(e,t,o){return D.current.useReducer(e,t,o)},t.useRef=function(e){return D.current.useRef(e)},t.useState=function(e){return D.current.useState(e)},t.useSyncExternalStore=function(e,t,o){return D.current.useSyncExternalStore(e,t,o)},t.useTransition=function(){return D.current.useTransition()},t.version="18.2.0"},294:(e,t,o)=>{e.exports=o(408)}},Zo={};function Xo(e){var t=Zo[e];if(void 0!==t)return t.exports;var o=Zo[e]={exports:{}};return Ko[e](o,o.exports,Xo),o.exports}Xo.d=(e,t)=>{for(var o in t)Xo.o(t,o)&&!Xo.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},Xo.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var Jo={};(()=>{Xo.d(Jo,{Tn:()=>wt,qE:()=>Ot,HE:()=>Mt,Ct:()=>Nt,zx:()=>Bt,M1:()=>Ft,sX:()=>lo,D0:()=>ao,fs:()=>co,Tw:()=>Ct,ud:()=>Dt,wt:()=>Rt,ne:()=>Ut,Ku:()=>zt,FU:()=>qt,XO:()=>ho,Ze:()=>uo,K$:()=>po,cX:()=>Co,Js:()=>So,J9:()=>Eo,si:()=>no,sg:()=>Mo,hW:()=>Do,II:()=>yo,v2:()=>xo,sN:()=>_o,Lb:()=>Ao,J2:()=>mt,$$:()=>oo,Vp:()=>Oo,u:()=>vt,fW:()=>Ro,WV:()=>be,h4:()=>fe,kZ:()=>pe});const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap;class i{constructor(e,t,n){if(this._$cssResult$=!0,n!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const o=this.t;if(t&&void 0===e){const t=void 0!==o&&1===o.length;t&&(e=n.get(o)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&n.set(o,e))}return e}toString(){return this.cssText}}const r=(e,...t)=>{const n=1===e.length?e[0]:t.reduce(((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1]),e[0]);return new i(n,e,o)},s=(o,n)=>{if(t)o.adoptedStyleSheets=n.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const t of n){const n=document.createElement("style"),i=e.litNonce;void 0!==i&&n.setAttribute("nonce",i),n.textContent=t.cssText,o.appendChild(n)}},a=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new i("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:c,defineProperty:l,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,f=globalThis,b=f.trustedTypes,m=b?b.emptyScript:"",g=f.reactiveElementPolyfillSupport,v=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?m:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},w=(e,t)=>!c(e,t),k={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:w};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=k){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),n=this.getPropertyDescriptor(e,o,t);void 0!==n&&l(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){const{get:n,set:i}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){const r=n?.call(this);i.call(this,t),this.requestUpdate(e,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??k}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=p(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...d(e),...u(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$ES??=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$ES?.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return s(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$ES?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t){const o=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,o);if(void 0!==n&&!0===o.reflect){const i=(void 0!==o.converter?.toAttribute?o.converter:y).toAttribute(t,o.type);this._$Em=e,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(e,t){const o=this.constructor,n=o._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=o.getPropertyOptions(n),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:y;this._$Em=n,this[n]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o,n=!1,i){if(void 0!==e){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??w)(n?i:this[e],t))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$ES?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$ES?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EO(e,this[e]))),this._$ET()}updated(e){}firstUpdated(e){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[v("elementProperties")]=new Map,$[v("finalized")]=new Map,g?.({ReactiveElement:$}),(f.reactiveElementVersions??=[]).push("2.0.0");const x=globalThis,_=x.trustedTypes,A=_?_.createPolicy("lit-html",{createHTML:e=>e}):void 0,C="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,E="?"+S,P=`<${E}>`,O=document,M=()=>O.createComment(""),D=e=>null===e||"object"!=typeof e&&"function"!=typeof e,R=Array.isArray,T="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,L=/>/g,j=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,z=/"/g,H=/^(?:script|style|textarea|title)$/i,I=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),F=I(1),q=(I(2),Symbol.for("lit-noChange")),V=Symbol.for("lit-nothing"),W=new WeakMap,Y=O.createTreeWalker(O,129);function G(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(t):t}class K{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let i=0,r=0;const s=e.length-1,a=this.parts,[c,l]=((e,t)=>{const o=e.length-1,n=[];let i,r=2===t?"<svg>":"",s=N;for(let t=0;t<o;t++){const o=e[t];let a,c,l=-1,h=0;for(;h<o.length&&(s.lastIndex=h,c=s.exec(o),null!==c);)h=s.lastIndex,s===N?"!--"===c[1]?s=U:void 0!==c[1]?s=L:void 0!==c[2]?(H.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=j):void 0!==c[3]&&(s=j):s===j?">"===c[0]?(s=i??N,l=-1):void 0===c[1]?l=-2:(l=s.lastIndex-c[2].length,a=c[1],s=void 0===c[3]?j:'"'===c[3]?z:B):s===z||s===B?s=j:s===U||s===L?s=N:(s=j,i=void 0);const d=s===j&&e[t+1].startsWith("/>")?" ":"";r+=s===N?o+P:l>=0?(n.push(a),o.slice(0,l)+C+o.slice(l)+S+d):o+S+(-2===l?t:d)}return[G(e,r+(e[o]||"<?>")+(2===t?"</svg>":"")),n]})(e,t);if(this.el=K.createElement(c,o),Y.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=Y.nextNode())&&a.length<s;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(C)){const t=l[r++],o=n.getAttribute(e).split(S),s=/([.?@])?(.*)/.exec(t);a.push({type:1,index:i,name:s[2],strings:o,ctor:"."===s[1]?ee:"?"===s[1]?te:"@"===s[1]?oe:Q}),n.removeAttribute(e)}else e.startsWith(S)&&(a.push({type:6,index:i}),n.removeAttribute(e));if(H.test(n.tagName)){const e=n.textContent.split(S),t=e.length-1;if(t>0){n.textContent=_?_.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],M()),Y.nextNode(),a.push({type:2,index:++i});n.append(e[t],M())}}}else if(8===n.nodeType)if(n.data===E)a.push({type:2,index:i});else{let e=-1;for(;-1!==(e=n.data.indexOf(S,e+1));)a.push({type:7,index:i}),e+=S.length-1}i++}}static createElement(e,t){const o=O.createElement("template");return o.innerHTML=e,o}}function Z(e,t,o=e,n){if(t===q)return t;let i=void 0!==n?o._$Co?.[n]:o._$Cl;const r=D(t)?void 0:t._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),void 0===r?i=void 0:(i=new r(e),i._$AT(e,o,n)),void 0!==n?(o._$Co??=[])[n]=i:o._$Cl=i),void 0!==i&&(t=Z(e,i._$AS(e,t.values),i,n)),t}class X{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,n=(e?.creationScope??O).importNode(t,!0);Y.currentNode=n;let i=Y.nextNode(),r=0,s=0,a=o[0];for(;void 0!==a;){if(r===a.index){let t;2===a.type?t=new J(i,i.nextSibling,this,e):1===a.type?t=new a.ctor(i,a.name,a.strings,this,e):6===a.type&&(t=new ne(i,this,e)),this._$AV.push(t),a=o[++s]}r!==a?.index&&(i=Y.nextNode(),r++)}return Y.currentNode=O,n}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class J{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,n){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Z(this,e,t),D(e)?e===V||null==e||""===e?(this._$AH!==V&&this._$AR(),this._$AH=V):e!==this._$AH&&e!==q&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>R(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==V&&D(this._$AH)?this._$AA.nextSibling.data=e:this.$(O.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:o}=e,n="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=K.createElement(G(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new X(n,this),o=e.u(this.options);e.p(t),this.$(o),this._$AH=e}}_$AC(e){let t=W.get(e.strings);return void 0===t&&W.set(e.strings,t=new K(e)),t}T(e){R(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,n=0;for(const i of e)n===t.length?t.push(o=new J(this.k(M()),this.k(M()),this,this.options)):o=t[n],o._$AI(i),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,n,i){this.type=1,this._$AH=V,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=V}_$AI(e,t=this,o,n){const i=this.strings;let r=!1;if(void 0===i)e=Z(this,e,t,0),r=!D(e)||e!==this._$AH&&e!==q,r&&(this._$AH=e);else{const n=e;let s,a;for(e=i[0],s=0;s<i.length-1;s++)a=Z(this,n[o+s],t,s),a===q&&(a=this._$AH[s]),r||=!D(a)||a!==this._$AH[s],a===V?e=V:e!==V&&(e+=(a??"")+i[s+1]),this._$AH[s]=a}r&&!n&&this.j(e)}j(e){e===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ee extends Q{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===V?void 0:e}}class te extends Q{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==V)}}class oe extends Q{constructor(e,t,o,n,i){super(e,t,o,n,i),this.type=5}_$AI(e,t=this){if((e=Z(this,e,t,0)??V)===q)return;const o=this._$AH,n=e===V&&o!==V||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==V&&(o===V||n);n&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ne{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}}const ie=x.litHtmlPolyfillSupport;ie?.(K,J),(x.litHtmlVersions??=[]).push("3.0.0");class re extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const n=o?.renderBefore??t;let i=n._$litPart$;if(void 0===i){const e=o?.renderBefore??null;n._$litPart$=i=new J(t.insertBefore(M(),e),e,void 0,o??{})}return i._$AI(e),i})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}re._$litElement$=!0,re.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:re});const se=globalThis.litElementPolyfillSupport;se?.({LitElement:re}),(globalThis.litElementVersions??=[]).push("4.0.0");const ae={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:w},ce=(e=ae,t,o)=>{const{kind:n,metadata:i}=o;let r=globalThis.litPropertyMetadata.get(i);if(void 0===r&&globalThis.litPropertyMetadata.set(i,r=new Map),r.set(o.name,e),"accessor"===n){const{name:n}=o;return{set(o){const i=t.get.call(this);t.set.call(this,o),this.requestUpdate(n,i,e)},init(t){return void 0!==t&&this.C(n,void 0,e),t}}}if("setter"===n){const{name:n}=o;return function(o){const i=this[n];t.call(this,o),this.requestUpdate(n,i,e)}}throw Error("Unsupported decorator location: "+n)};function le(e){return(t,o)=>"object"==typeof o?ce(e,t,o):((e,t,o)=>{const n=t.hasOwnProperty(o);return t.constructor.createProperty(o,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}const he=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function de(e,t){return(o,n,i)=>{const r=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:s}="object"==typeof n?o:i??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return he(o,n,{get(){if(t){let t=e.call(this);return void 0===t&&(t=r(this),s.call(this,t)),t}return r(this)}})}return he(o,n,{get(){return r(this)}})}}class ue extends re{}const pe=r`.sr-only,.sr-only-focusable:not(:active):not(:focus){clip:rect(0 0 0 0);clip-path:inset(50%);width:1px;height:1px;overflow:hidden;position:absolute;white-space:nowrap}`,fe=r``,be=r`:host{box-sizing:border-box}:host *,:host ::after,:host ::before{box-sizing:inherit}[hidden]{display:none!important}`,me=Math.min,ge=Math.max,ve=Math.round,ye=(Math.floor,e=>({x:e,y:e})),we={left:"right",right:"left",bottom:"top",top:"bottom"},ke={start:"end",end:"start"};function $e(e,t,o){return ge(e,me(t,o))}function xe(e,t){return"function"==typeof e?e(t):e}function _e(e){return e.split("-")[0]}function Ae(e){return e.split("-")[1]}function Ce(e){return"x"===e?"y":"x"}function Se(e){return"y"===e?"height":"width"}function Ee(e){return["top","bottom"].includes(_e(e))?"y":"x"}function Pe(e){return Ce(Ee(e))}function Oe(e){return e.replace(/start|end/g,(e=>ke[e]))}function Me(e){return e.replace(/left|right|bottom|top/g,(e=>we[e]))}function De(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function Re(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Te(e,t,o){let{reference:n,floating:i}=e;const r=Ee(t),s=Pe(t),a=Se(s),c=_e(t),l="y"===r,h=n.x+n.width/2-i.width/2,d=n.y+n.height/2-i.height/2,u=n[a]/2-i[a]/2;let p;switch(c){case"top":p={x:h,y:n.y-i.height};break;case"bottom":p={x:h,y:n.y+n.height};break;case"right":p={x:n.x+n.width,y:d};break;case"left":p={x:n.x-i.width,y:d};break;default:p={x:n.x,y:n.y}}switch(Ae(t)){case"start":p[s]-=u*(o&&l?-1:1);break;case"end":p[s]+=u*(o&&l?-1:1)}return p}async function Ne(e,t){var o;void 0===t&&(t={});const{x:n,y:i,platform:r,rects:s,elements:a,strategy:c}=e,{boundary:l="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:u=!1,padding:p=0}=xe(t,e),f=De(p),b=a[u?"floating"===d?"reference":"floating":d],m=Re(await r.getClippingRect({element:null==(o=await(null==r.isElement?void 0:r.isElement(b)))||o?b:b.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(a.floating)),boundary:l,rootBoundary:h,strategy:c})),g="floating"===d?{...s.floating,x:n,y:i}:s.reference,v=await(null==r.getOffsetParent?void 0:r.getOffsetParent(a.floating)),y=await(null==r.isElement?void 0:r.isElement(v))&&await(null==r.getScale?void 0:r.getScale(v))||{x:1,y:1},w=Re(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:g,offsetParent:v,strategy:c}):g);return{top:(m.top-w.top+f.top)/y.y,bottom:(w.bottom-m.bottom+f.bottom)/y.y,left:(m.left-w.left+f.left)/y.x,right:(w.right-m.right+f.right)/y.x}}const Ue=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var o,n;const{placement:i,middlewareData:r,rects:s,initialPlacement:a,platform:c,elements:l}=t,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:u,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:b=!0,...m}=xe(e,t);if(null!=(o=r.arrow)&&o.alignmentOffset)return{};const g=_e(i),v=_e(a)===a,y=await(null==c.isRTL?void 0:c.isRTL(l.floating)),w=u||(v||!b?[Me(a)]:function(e){const t=Me(e);return[Oe(e),t,Oe(t)]}(a));u||"none"===f||w.push(...function(e,t,o,n){const i=Ae(e);let r=function(e,t,o){const n=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return o?t?i:n:t?n:i;case"left":case"right":return t?r:s;default:return[]}}(_e(e),"start"===o,n);return i&&(r=r.map((e=>e+"-"+i)),t&&(r=r.concat(r.map(Oe)))),r}(a,b,f,y));const k=[a,...w],$=await Ne(t,m),x=[];let _=(null==(n=r.flip)?void 0:n.overflows)||[];if(h&&x.push($[g]),d){const e=function(e,t,o){void 0===o&&(o=!1);const n=Ae(e),i=Pe(e),r=Se(i);let s="x"===i?n===(o?"end":"start")?"right":"left":"start"===n?"bottom":"top";return t.reference[r]>t.floating[r]&&(s=Me(s)),[s,Me(s)]}(i,s,y);x.push($[e[0]],$[e[1]])}if(_=[..._,{placement:i,overflows:x}],!x.every((e=>e<=0))){var A,C;const e=((null==(A=r.flip)?void 0:A.index)||0)+1,t=k[e];if(t)return{data:{index:e,overflows:_},reset:{placement:t}};let o=null==(C=_.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:C.placement;if(!o)switch(p){case"bestFit":{var S;const e=null==(S=_.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:S[0];e&&(o=e);break}case"initialPlacement":o=a}if(i!==o)return{reset:{placement:o}}}return{}}}},Le=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){const{x:o,y:n}=t,i=await async function(e,t){const{placement:o,platform:n,elements:i}=e,r=await(null==n.isRTL?void 0:n.isRTL(i.floating)),s=_e(o),a=Ae(o),c="y"===Ee(o),l=["left","top"].includes(s)?-1:1,h=r&&c?-1:1,d=xe(t,e);let{mainAxis:u,crossAxis:p,alignmentAxis:f}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return a&&"number"==typeof f&&(p="end"===a?-1*f:f),c?{x:p*h,y:u*l}:{x:u*l,y:p*h}}(t,e);return{x:o+i.x,y:n+i.y,data:i}}}};function je(e){return He(e)?(e.nodeName||"").toLowerCase():"#document"}function Be(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function ze(e){var t;return null==(t=(He(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function He(e){return e instanceof Node||e instanceof Be(e).Node}function Ie(e){return e instanceof Element||e instanceof Be(e).Element}function Fe(e){return e instanceof HTMLElement||e instanceof Be(e).HTMLElement}function qe(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof Be(e).ShadowRoot)}function Ve(e){const{overflow:t,overflowX:o,overflowY:n,display:i}=Ze(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+o)&&!["inline","contents"].includes(i)}function We(e){return["table","td","th"].includes(je(e))}function Ye(e){const t=Ge(),o=Ze(e);return"none"!==o.transform||"none"!==o.perspective||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||["transform","perspective","filter"].some((e=>(o.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(o.contain||"").includes(e)))}function Ge(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Ke(e){return["html","body","#document"].includes(je(e))}function Ze(e){return Be(e).getComputedStyle(e)}function Xe(e){return Ie(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Je(e){if("html"===je(e))return e;const t=e.assignedSlot||e.parentNode||qe(e)&&e.host||ze(e);return qe(t)?t.host:t}function Qe(e){const t=Je(e);return Ke(t)?e.ownerDocument?e.ownerDocument.body:e.body:Fe(t)&&Ve(t)?t:Qe(t)}function et(e,t,o){var n;void 0===t&&(t=[]),void 0===o&&(o=!0);const i=Qe(e),r=i===(null==(n=e.ownerDocument)?void 0:n.body),s=Be(i);return r?t.concat(s,s.visualViewport||[],Ve(i)?i:[],s.frameElement&&o?et(s.frameElement):[]):t.concat(i,et(i,[],o))}function tt(e){const t=Ze(e);let o=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const i=Fe(e),r=i?e.offsetWidth:o,s=i?e.offsetHeight:n,a=ve(o)!==r||ve(n)!==s;return a&&(o=r,n=s),{width:o,height:n,$:a}}function ot(e){return Ie(e)?e:e.contextElement}function nt(e){const t=ot(e);if(!Fe(t))return ye(1);const o=t.getBoundingClientRect(),{width:n,height:i,$:r}=tt(t);let s=(r?ve(o.width):o.width)/n,a=(r?ve(o.height):o.height)/i;return s&&Number.isFinite(s)||(s=1),a&&Number.isFinite(a)||(a=1),{x:s,y:a}}const it=ye(0);function rt(e){const t=Be(e);return Ge()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:it}function st(e,t,o,n){void 0===t&&(t=!1),void 0===o&&(o=!1);const i=e.getBoundingClientRect(),r=ot(e);let s=ye(1);t&&(n?Ie(n)&&(s=nt(n)):s=nt(e));const a=function(e,t,o){return void 0===t&&(t=!1),!(!o||t&&o!==Be(e))&&t}(r,o,n)?rt(r):ye(0);let c=(i.left+a.x)/s.x,l=(i.top+a.y)/s.y,h=i.width/s.x,d=i.height/s.y;if(r){const e=Be(r),t=n&&Ie(n)?Be(n):n;let o=e.frameElement;for(;o&&n&&t!==e;){const e=nt(o),t=o.getBoundingClientRect(),n=Ze(o),i=t.left+(o.clientLeft+parseFloat(n.paddingLeft))*e.x,r=t.top+(o.clientTop+parseFloat(n.paddingTop))*e.y;c*=e.x,l*=e.y,h*=e.x,d*=e.y,c+=i,l+=r,o=Be(o).frameElement}}return Re({width:h,height:d,x:c,y:l})}function at(e){return st(ze(e)).left+Xe(e).scrollLeft}function ct(e,t,o){let n;if("viewport"===t)n=function(e,t){const o=Be(e),n=ze(e),i=o.visualViewport;let r=n.clientWidth,s=n.clientHeight,a=0,c=0;if(i){r=i.width,s=i.height;const e=Ge();(!e||e&&"fixed"===t)&&(a=i.offsetLeft,c=i.offsetTop)}return{width:r,height:s,x:a,y:c}}(e,o);else if("document"===t)n=function(e){const t=ze(e),o=Xe(e),n=e.ownerDocument.body,i=ge(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),r=ge(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let s=-o.scrollLeft+at(e);const a=-o.scrollTop;return"rtl"===Ze(n).direction&&(s+=ge(t.clientWidth,n.clientWidth)-i),{width:i,height:r,x:s,y:a}}(ze(e));else if(Ie(t))n=function(e,t){const o=st(e,!0,"fixed"===t),n=o.top+e.clientTop,i=o.left+e.clientLeft,r=Fe(e)?nt(e):ye(1);return{width:e.clientWidth*r.x,height:e.clientHeight*r.y,x:i*r.x,y:n*r.y}}(t,o);else{const o=rt(e);n={...t,x:t.x-o.x,y:t.y-o.y}}return Re(n)}function lt(e,t){const o=Je(e);return!(o===t||!Ie(o)||Ke(o))&&("fixed"===Ze(o).position||lt(o,t))}function ht(e,t,o){const n=Fe(t),i=ze(t),r="fixed"===o,s=st(e,!0,r,t);let a={scrollLeft:0,scrollTop:0};const c=ye(0);if(n||!n&&!r)if(("body"!==je(t)||Ve(i))&&(a=Xe(t)),n){const e=st(t,!0,r,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else i&&(c.x=at(i));return{x:s.left+a.scrollLeft-c.x,y:s.top+a.scrollTop-c.y,width:s.width,height:s.height}}function dt(e,t){return Fe(e)&&"fixed"!==Ze(e).position?t?t(e):e.offsetParent:null}function ut(e,t){const o=Be(e);if(!Fe(e))return o;let n=dt(e,t);for(;n&&We(n)&&"static"===Ze(n).position;)n=dt(n,t);return n&&("html"===je(n)||"body"===je(n)&&"static"===Ze(n).position&&!Ye(n))?o:n||function(e){let t=Je(e);for(;Fe(t)&&!Ke(t);){if(Ye(t))return t;t=Je(t)}return null}(e)||o}const pt={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:o,strategy:n}=e;const i=Fe(o),r=ze(o);if(o===r)return t;let s={scrollLeft:0,scrollTop:0},a=ye(1);const c=ye(0);if((i||!i&&"fixed"!==n)&&(("body"!==je(o)||Ve(r))&&(s=Xe(o)),Fe(o))){const e=st(o);a=nt(o),c.x=e.x+o.clientLeft,c.y=e.y+o.clientTop}return{width:t.width*a.x,height:t.height*a.y,x:t.x*a.x-s.scrollLeft*a.x+c.x,y:t.y*a.y-s.scrollTop*a.y+c.y}},getDocumentElement:ze,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:n,strategy:i}=e;const r=[..."clippingAncestors"===o?function(e,t){const o=t.get(e);if(o)return o;let n=et(e,[],!1).filter((e=>Ie(e)&&"body"!==je(e))),i=null;const r="fixed"===Ze(e).position;let s=r?Je(e):e;for(;Ie(s)&&!Ke(s);){const t=Ze(s),o=Ye(s);o||"fixed"!==t.position||(i=null),(r?!o&&!i:!o&&"static"===t.position&&i&&["absolute","fixed"].includes(i.position)||Ve(s)&&!o&&lt(e,s))?n=n.filter((e=>e!==s)):i=t,s=Je(s)}return t.set(e,n),n}(t,this._c):[].concat(o),n],s=r[0],a=r.reduce(((e,o)=>{const n=ct(t,o,i);return e.top=ge(n.top,e.top),e.right=me(n.right,e.right),e.bottom=me(n.bottom,e.bottom),e.left=ge(n.left,e.left),e}),ct(t,s,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:ut,getElementRects:async function(e){let{reference:t,floating:o,strategy:n}=e;const i=this.getOffsetParent||ut,r=this.getDimensions;return{reference:ht(t,await i(o),n),floating:{x:0,y:0,...await r(o)}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){return tt(e)},getScale:nt,isElement:Ie,isRTL:function(e){return"rtl"===Ze(e).direction}},ft=r`:host{display:contents;position:relative}.popover{display:block;left:0;top:0;position:absolute;z-index:var(--gk-popover-z-index,100)}.arrow{background:var(--gk-tooltip-background-color,#000);height:8px;position:absolute;transform:rotate(45deg);width:8px}`;var bt=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};class mt extends ue{constructor(){super(...arguments),this.arrow=!1,this.hover=!1,this.placement="top",this.popoverId=`popover_${Math.random().toString(16).slice(2)}`,this.srVisible=!1,this.open=!1,this.isTrackingOutside=!1}static{this.styles=[be,pe,ft]}static{this.elementName="gk-popover"}firstUpdated(e){const t=this.triggerSlot.assignedElements()[0];this.triggerEl=t instanceof HTMLSlotElement?t.assignedElements({flatten:!0})[0]:t}async connectedCallback(){super.connectedCallback(),await this.updateComplete,await this.updateToggle(),null==this._toggleHandler&&(this._toggleHandler=this.handleToggle.bind(this)),this.hover?(this.triggerEl?.addEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.addEventListener("mouseout",this._toggleHandler,!1)):this.triggerEl?.addEventListener("focus",this._toggleHandler,!1)}disconnectedCallback(){super.disconnectedCallback(),null!=this._toggleHandler&&(this.triggerEl?.removeEventListener("focus",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseout",this._toggleHandler,!1),this._toggleHandler=void 0),this.disposeTrackOutside()}handleToggle(e){e.composedPath().includes(this.triggerEl)&&(this.open=!this.open,this.updateToggle())}async updateToggle(){this.open?(await this.showPopover(),null!=this.popoverEl&&window.requestAnimationFrame((()=>{this.popoverEl?.focus()}))):this.hidePopover()}handleDocumentEvent(e){!1!==this.open&&(e.composedPath().includes(this)||this.hidePopover())}trackOutside(){this.hover||this.isTrackingOutside||!this.open||(this.isTrackingOutside=!0,null==this._documentEventHandler&&(this._documentEventHandler=this.handleDocumentEvent.bind(this)),document.addEventListener("click",this._documentEventHandler,!1),document.addEventListener("focusin",this._documentEventHandler,!1))}disposeTrackOutside(){this.isTrackingOutside&&(this.isTrackingOutside=!1,null!=this._documentEventHandler&&(document.removeEventListener("click",this._documentEventHandler,!1),window.removeEventListener("focusin",this._documentEventHandler,!1),this._documentEventHandler=void 0))}async updatePositioning(){const e=[Le(6),Ue(),(t={padding:5},void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:a={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...c}=xe(t,e),l={x:o,y:n},h=await Ne(e,c),d=Ee(_e(i)),u=Ce(d);let p=l[u],f=l[d];if(r){const e="y"===u?"bottom":"right";p=$e(p+h["y"===u?"top":"left"],p,p-h[e])}if(s){const e="y"===d?"bottom":"right";f=$e(f+h["y"===d?"top":"left"],f,f-h[e])}const b=a.fn({...e,[u]:p,[d]:f});return{...b,data:{x:b.x-o,y:b.y-n}}}})];var t;this.arrowEl&&e.push((e=>({name:"arrow",options:e,async fn(t){const{x:o,y:n,placement:i,rects:r,platform:s,elements:a,middlewareData:c}=t,{element:l,padding:h=0}=xe(e,t)||{};if(null==l)return{};const d=De(h),u={x:o,y:n},p=Pe(i),f=Se(p),b=await s.getDimensions(l),m="y"===p,g=m?"top":"left",v=m?"bottom":"right",y=m?"clientHeight":"clientWidth",w=r.reference[f]+r.reference[p]-u[p]-r.floating[f],k=u[p]-r.reference[p],$=await(null==s.getOffsetParent?void 0:s.getOffsetParent(l));let x=$?$[y]:0;x&&await(null==s.isElement?void 0:s.isElement($))||(x=a.floating[y]||r.floating[f]);const _=w/2-k/2,A=x/2-b[f]/2-1,C=me(d[g],A),S=me(d[v],A),E=C,P=x-b[f]-S,O=x/2-b[f]/2+_,M=$e(E,O,P),D=!c.arrow&&null!=Ae(i)&&O!=M&&r.reference[f]/2-(O<E?C:S)-b[f]/2<0,R=D?O<E?O-E:O-P:0;return{[p]:u[p]+R,data:{[p]:M,centerOffset:O-M-R,...D&&{alignmentOffset:R}},reset:D}}}))({element:this.arrowEl})),await((e,t,o)=>{const n=new Map,i={platform:pt,...o},r={...i.platform,_c:n};return(async(e,t,o)=>{const{placement:n="bottom",strategy:i="absolute",middleware:r=[],platform:s}=o,a=r.filter(Boolean),c=await(null==s.isRTL?void 0:s.isRTL(t));let l=await s.getElementRects({reference:e,floating:t,strategy:i}),{x:h,y:d}=Te(l,n,c),u=n,p={},f=0;for(let o=0;o<a.length;o++){const{name:r,fn:b}=a[o],{x:m,y:g,data:v,reset:y}=await b({x:h,y:d,initialPlacement:n,placement:u,strategy:i,middlewareData:p,rects:l,platform:s,elements:{reference:e,floating:t}});h=null!=m?m:h,d=null!=g?g:d,p={...p,[r]:{...p[r],...v}},y&&f<=50&&(f++,"object"==typeof y&&(y.placement&&(u=y.placement),y.rects&&(l=!0===y.rects?await s.getElementRects({reference:e,floating:t,strategy:i}):y.rects),({x:h,y:d}=Te(l,u,c))),o=-1)}return{x:h,y:d,placement:u,strategy:i,middlewareData:p}})(e,t,{...i,platform:r})})(this.triggerEl,this.popoverEl,{middleware:e,placement:this.placement}).then((({x:e,y:t,placement:o,middlewareData:n})=>{if(Object.assign(this.popoverEl.style,{left:`${e}px`,top:`${t}px`}),this.arrowEl){const e=n.arrow?.x,t=n.arrow?.y,i={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];Object.assign(this.arrowEl.style,{left:null!=e?`${e}px`:"",top:null!=t?`${t}px`:"",right:"",bottom:"",[i]:"-4px"})}}))}async showPopover(){this.open=!0,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="true"),this.srVisible?this.popoverEl.classList.remove("sr-only"):this.popoverEl.removeAttribute("hidden"),await this.updatePositioning(),this.trackOutside()}hidePopover(){this.open=!1,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="false"),this.srVisible?this.popoverEl.classList.add("sr-only"):this.popoverEl.setAttribute("hidden","true"),this.disposeTrackOutside()}get arrowMarkup(){return this.arrow?F`<div part="arrow" class="arrow"></div>`:""}render(){return F`<slot name="trigger" aria-describedby="${this.popoverId}"></slot><div class="popover ${this.srVisible&&"sr-only"}" ?hidden="${!this.srVisible}" id="${this.popoverId}" part="popover" role="tooltip"><slot></slot>${this.arrowMarkup}</div>`}}bt([le({type:Boolean})],mt.prototype,"arrow",void 0),bt([le({type:Boolean})],mt.prototype,"hover",void 0),bt([le()],mt.prototype,"placement",void 0),bt([le({attribute:"popover-id"})],mt.prototype,"popoverId",void 0),bt([le({attribute:"sr-visible",type:Boolean})],mt.prototype,"srVisible",void 0),bt([de('slot[name="trigger"]')],mt.prototype,"triggerSlot",void 0),bt([de(".popover")],mt.prototype,"popoverEl",void 0),bt([de(".arrow")],mt.prototype,"arrowEl",void 0),bt([le({state:!0,attribute:!1})],mt.prototype,"open",void 0);const gt=r`gk-popover::part(popover){background:var(--gk-tooltip-background-color,#000);border-radius:var(--gk-tooltip-border-radius,0);color:var(--gk-tooltip-font-color,#fff);font-size:var(--gk-tooltip-font-size, 14px);font-weight:var(--gk-tooltip-font-weight,bold);line-height:var(--gk-tooltip-line-height, 14px);max-width:var(--gk-tooltip-max-width,none);padding:var(--gk-tooltip-padding,10px 16px);text-align:var(--gk-tooltip-text-align,left);width:max-content}`;class vt extends ue{constructor(){super(...arguments),this.srVisible=!1}static{this.styles=[be,pe,gt]}static{this.elementName="gk-tooltip"}static{this.components=[mt]}render(){return F`<gk-popover arrow hover ?sr-visible="${this.srVisible}" part="base"><slot name="trigger" slot="trigger"></slot><slot></slot></gk-popover>`}}!function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);r>3&&s&&Object.defineProperty(t,o,s)}([le({attribute:"sr-visible",type:Boolean})],vt.prototype,"srVisible",void 0);const yt=r`:host{display:inline-block;vertical-align:middle;font-weight:700}.deletions{color:var(--gk-deletions-color,#fe5955);padding-left:4px}.additions{color:var(--gk-additions-color,#74b666);padding-right:4px}`;class wt extends ue{constructor(){super(...arguments),this.tooltipText="Lines Added/Removed",this.tooltipId=`additions-deletions_${Math.random().toString(16).slice(2)}`}static{this.styles=yt}static{this.elementName="gk-additions-deletions"}static{this.components=[vt]}render(){return F`<gk-tooltip sr-visible tooltip-id="${this.tooltipId}"><span slot="trigger" part="base"><span class="additions">+<slot name="additions"></slot></span>/ <span class="deletions">−<slot name="deletions"></slot></span></span><span>${this.tooltipText}</span></gk-tooltip>`}}!function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);r>3&&s&&Object.defineProperty(t,o,s)}([le({attribute:"tooltip-text"})],wt.prototype,"tooltipText",void 0);const kt=new Set(["children","localName","ref","style","className"]),$t=new WeakMap,xt=(e,t,o,n,i)=>{const r=i?.[t];void 0===r||o===n?(e[t]=o,null==o&&t in HTMLElement.prototype&&e.removeAttribute(t)):((e,t,o)=>{let n=$t.get(e);void 0===n&&$t.set(e,n=new Map);let i=n.get(t);void 0!==o?void 0===i?(n.set(t,i={handleEvent:o}),e.addEventListener(t,i)):i.handleEvent=o:void 0!==i&&(n.delete(t),e.removeEventListener(t,i))})(e,r,o)},_t=({react:e,tagName:t,elementClass:o,events:n,displayName:i})=>{const r=new Set(Object.keys(n??{})),s=e.forwardRef(((i,s)=>{const a=e.useRef(null),c=e.useRef(null),l={},h={};for(const[e,t]of Object.entries(i))kt.has(e)?l["className"===e?"class":e]=t:r.has(e)||e in o.prototype?h[e]=t:l[e]=t;return e.useLayoutEffect((()=>{if(null!==c.current){for(const e in h)xt(c.current,e,i[e],a.current?a.current[e]:void 0,n);a.current=i}})),e.useLayoutEffect((()=>{c.current?.removeAttribute("defer-hydration")}),[]),l.suppressHydrationWarning=!0,e.createElement(t,{...l,ref:e=>{c.current=e,"function"==typeof s?s(e):null!==s&&(s.current=e)}})}));return s.displayName=i??o.name,s};var At=Xo(294);const Ct=_t({react:At,tagName:wt.elementName,elementClass:wt}),St=r`:host{display:inline-block}.avatar{vertical-align:middle;background-color:var(--gk-avatar-background-color,#e0e0e0);width:var(--gk-avatar-size,30px);aspect-ratio:1/1;border-radius:50%;transition:.2s}.avatar.is-offline{border:2px solid var(--gk-avatar-offline-outline-color,#3d424d)}.avatar.is-online{border:2px solid var(--gk-avatar-online-outline-color,#60b864)}.avatar--image{display:inline-block;object-fit:cover;object-position:50% 50%}.avatar--content{display:inline-flex;justify-content:center;align-items:center;font-size:var(--gk-avatar-font-size, 11px);line-height:var(--gk-avatar-size, 30px);text-align:center}.avatar:hover{transform:scale(1.2)}`,Et=r`:host{display:inline-block}.avatar-group{display:inline-flex;flex-direction:row;justify-content:center;align-items:center}.avatar-group::slotted(:not(:first-child)){margin-left:calc(var(--gk-avatar-size,2.4rem) * -.2)}.avatar-group:focus-within::slotted(*),.avatar-group:hover::slotted(*){opacity:.5}.avatar-group:focus-within::slotted(:focus),.avatar-group:hover::slotted(:hover){opacity:1;z-index:var(--gk-avatar-selected-zindex,1)!important}`;var Pt=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};class Ot extends ue{static{this.styles=[be,St]}static{this.elementName="gk-avatar"}get indicatorClass(){return this.indicator?`is-${this.indicator}`:""}render(){return this.src?F`<img src="${this.src}" class="avatar avatar--image${this.indicatorClass}" part="base" alt="">`:F`<slot class="avatar avatar--content${this.indicatorClass}" part="base"></slot>`}}Pt([le()],Ot.prototype,"src",void 0),Pt([le()],Ot.prototype,"indicator",void 0);class Mt extends ue{static{this.elementName="gk-avatar-group"}static{this.styles=[be,Et]}render(){return F`<slot class="avatar-group" part="base"></slot>`}}const Dt=_t({react:At,tagName:Ot.elementName,elementClass:Ot}),Rt=_t({react:At,tagName:Mt.elementName,elementClass:Mt}),Tt=r`.badge{border-radius:var(--gk-badge-border-radius,22px);display:inline-block;font-size:var(--gk-badge-font-size, 12px)}.badge--outline{border-color:var(--gk-badge-outline-color,#ffffff99);border-style:solid;border-width:var(--gk-badge-outline-border-width,1px);color:var(--gk-badge-outline-color,#ffffff99);padding:var(--gk-badge-outline-padding,0 8px)}.badge--filled{background-color:var(--gk-badge-filled-background-color,#2b2f36);color:var(--gk-badge-filled-color,#ffffff99);padding:var(--gk-badge-filled-padding,2px 6px)}`;class Nt extends ue{constructor(){super(...arguments),this.variant="outline"}static{this.styles=Tt}static{this.elementName="gk-badge"}render(){return F`<slot class="${`badge badge--${this.variant}`}" part="base"></slot>`}}!function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);r>3&&s&&Object.defineProperty(t,o,s)}([le()],Nt.prototype,"variant",void 0);const Ut=_t({react:At,tagName:Nt.elementName,elementClass:Nt}),Lt=r`:host{display:inline-block}button{appearance:none;border:none;padding:8px 12px}button:hover{cursor:pointer}button:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.button--ghost{background:0 0;color:var(--gk-button-ghost-color,#fff)}.button--ghost:focus,.button--ghost:hover{text-decoration:underline}.button--ghost:active{color:var(--gk-button-ghost-color-active,#adb8c2)}.button--ghost:disabled,.button--ghost:disabled:active,.button--ghost:disabled:focus,.button--ghost:disabled:hover{color:var(--gk-button-ghost-color-disabled,#ffffff60);cursor:default;text-decoration:none}.button--outline{background:0 0;border-radius:2px;border-style:solid;border-width:var(--gk-button-outline-border-width,1px);color:var(--gk-button-outline-color,#fff)}.button--outline:focus,.button--outline:hover{background-color:#ffffff50}.button--outline:active{background-color:var(--gk-button-outline-color-active,#adb8c2)}.button--outline:disabled,.button--outline:disabled:active,.button--outline:disabled:focus,.button--outline:disabled:hover{background-color:transparent;border-color:var(--gk-button-outline-color-disabled,#ffffff60);color:var(--gk-button-outline-color-disabled,#ffffff60);cursor:default;text-decoration:none}`;var jt=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};class Bt extends ue{constructor(){super(...arguments),this.disabled=!1,this.type="button",this.variant="ghost"}static{this.styles=Lt}static{this.elementName="gk-button"}get allClasses(){const e=["button"];return e.push(`button--${this.variant}`),e.join(" ")}_handleClick(e){e.stopPropagation(),this.dispatchEvent(new Event("click"))}render(){return F`<button class="${this.allClasses}" @click="${this._handleClick}" ?disabled="${this.disabled}" part="base" type="${this.type}"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></button>`}}jt([le({type:Boolean,reflect:!0})],Bt.prototype,"disabled",void 0),jt([le({reflect:!0})],Bt.prototype,"type",void 0),jt([le()],Bt.prototype,"variant",void 0);const zt=_t({react:At,tagName:Bt.elementName,elementClass:Bt,events:{onClick:"click"}}),Ht=r`:host{display:inline-block}.complexity-indicator{display:inline-flex}.complexity-indicator__box{display:block;height:var(--gk-complexity-indicator-box-size,8px);width:var(--gk-complexity-indicator-box-size,8px)}.complexity-indicator__box:not(:last-of-type){margin-right:var(--gk-complexity-indicator-space-between,2px)}.complexity-indicator--level-1 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-1,#5cb85c)}.complexity-indicator--level-2 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-2,#4d88ff)}.complexity-indicator--level-3 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-3,#de9b43)}.complexity-indicator--level-4 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-4,#d9413d)}`;var It=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};class Ft extends ue{constructor(){super(...arguments),this.level=1,this.label="Complexity of pull request"}static{this.styles=[be,pe,Ht]}static{this.elementName="gk-complexity-indicator"}render(){const e=[];for(let t=0;t<this.level;t++)e.push(t);return F`<div class="complexity-indicator complexity-indicator--level-${this.level}" part="base"><span class="sr-only">${this.label}</span> ${e.map((()=>F`<span class="complexity-indicator__box"></span>`))}</div>`}}It([le({type:Number})],Ft.prototype,"level",void 0),It([le()],Ft.prototype,"label",void 0);const qt=_t({react:At,tagName:Ft.elementName,elementClass:Ft}),Vt=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,Wt=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,Yt=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let Gt;const Kt=new Map;let Zt,Xt,Jt;new Map;const Qt=["th","st","nd","rd"];function eo(e){const t=e%100;return`${e}${Qt[(t-20)%10]??Qt[t]??Qt[0]}`}var to=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};class oo extends ue{constructor(){super(...arguments),this.date=new Date,this.format="MMMM Do, YYYY h:mma"}static{this.styles=[be]}static{this.elementName="gk-date-from"}static{this.components=[vt]}get relativeTime(){return function(e,t){const o=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,t,n,i]of Yt){const r=Math.abs(o);if(r>=t||1e3===t)return null==Gt&&(null!=Jt?Gt=Jt.resolvedOptions().locale:null!=Xt?Gt=Xt.resolvedOptions().locale:(Jt=new Intl.RelativeTimeFormat(Zt,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),Gt=Jt.resolvedOptions().locale)),"en"===Gt||Gt?.startsWith("en-")?`${Math.round(r/n)}${i}`:(null==Jt&&(Jt=new Intl.RelativeTimeFormat(Zt,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),Jt.format(Math.round(o/n),e))}return""}(this.date)}get isDate(){return this.date&&!isNaN(this.date.getMilliseconds())}render(){if(this.isDate)return F`<gk-tooltip><time datetime="${this.date}" part="base" slot="trigger">${this.relativeTime}</time><span>${function(e,t,o,n=!0){const i=`${o??""}:${t=t??void 0}`;let r=Kt.get(i);if(null==r){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=Wt.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}const o={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(Vt))if(null!=t)for(const e in t){const n=t[e];if(null!=n)switch(e){case"year":o.year=4===n.length?"numeric":"2-digit";break;case"month":switch(n.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":o.day="DD"===n?"2-digit":"numeric";break;case"weekday":switch(n.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===n.length?"2-digit":"numeric",o.hour12="hh"===n||"h"===n;break;case"minute":o.minute=2===n.length?"2-digit":"numeric";break;case"second":o.second=2===n.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===n.length?"long":"short"}}return o}(t);let s;s=null==o?Zt:"system"===o?void 0:[o],r=new Intl.DateTimeFormat(s,e),n&&Kt.set(i,r)}if(null==t||Wt.test(t))return r.format(e);function s(e){const t=`${o??""}:time:${e}`;let i=Kt.get(t);if(null==i){const r={localeMatcher:"best fit",timeStyle:e};let s;s=null==o?Zt:"system"===o?void 0:[o],i=new Intl.DateTimeFormat(s,r),n&&Kt.set(t,i)}return i}const a=r.formatToParts(e);return t.replace(Vt,((t,o,n,i,r,c,l,h,d,u,p,f,b,m,g)=>{if(null!=o)return o.substring(1,o.length-1);for(const t in g){const o=g[t];if(null==o)continue;const n=a.find((e=>e.type===t));if("Do"===o&&"day"===n?.type)return eo(Number(n.value));if("a"===o&&"dayPeriod"===n?.type){const t=s("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return`${(t??n)?.value??""}`}return n?.value??""}return""}))}(this.date,this.format??"MMMM Do, YYYY h:mma")}</span></gk-tooltip>`}}to([le({converter:(e=>({toAttribute:t=>t.toLocaleDateString(e),fromAttribute:e=>new Date(e)}))(navigator.language),reflect:!0})],oo.prototype,"date",void 0),to([le()],oo.prototype,"format",void 0);const no=_t({react:At,tagName:oo.elementName,elementClass:oo}),io=r`.row--heading{text-transform:uppercase;color:var(--gk-text-secondary-color,rgba(255,255,255,.6))}.content::slotted(:not(:first-child)){border-top:1px solid var(--gk-divider-color,rgba(255,255,255,.04))}`,ro=r`:host{display:contents}.row{display:flex;flex-direction:row;padding:var(--gk-focus-row-padding,8px)}.row:not(.row--heading):focus-within,.row:not(.row--heading):hover{background-color:var(--gk-focus-background-color-hover,rgba(255,255,255,.04))}.row:not(.row--heading):focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.row__key{flex:none;display:block;width:var(--gk-focus-row-key-min-width,64px)}@media (max-width:720px){.row__key{width:var(--gk-focus-row-key-min-width-screen-sm,32px)}}.row__content{flex:1;display:block}.row__pin{display:block;min-width:var(--gk-focus-row-pin-min-width,35px)}.row__date{display:block;min-width:var(--gk-focus-row-date-min-width,48px)}@media (max-width:720px){.row--heading .item__date,.row--heading .item__secondary{display:none}}`,so=r`.item{display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item{flex-direction:column;align-items:stretch}}.item__primary{flex:1;display:flex;flex-direction:row;gap:12px}.item__type{flex:none}@media (max-width:720px){.item__type{order:-1}}.item__content{display:flex;flex-direction:column;gap:6px;min-width:var(--gk-focus-item-content-min-width,92px)}@media (max-width:720px){.item__content{align-items:stretch}}.item__content>p{margin:0}.item__secondary{flex:none;display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item__secondary{flex-wrap:wrap;padding-left:36px}}.item__people{display:block;min-width:var(--gk-focus-item-people-min-width,92px)}@media (max-width:720px){.item__people{min-width:0}}.item__repo{display:block;width:var(--gk-focus-item-repo-min-width,150px)}@media (max-width:720px){.item__repo{width:max-content}}@media (max-width:720px){.item__date{align-self:flex-start;min-width:0}}.item__actions{display:block;min-width:var(--gk-focus-item-actions-min-width,70px)}@media (max-width:720px){.item__actions{width:100%}}`;class ao extends ue{static{this.styles=[be,so]}static{this.elementName="gk-focus-item"}render(){return F`<div class="item"><div class="item__primary"><div class="item__content" part="base"><slot></slot></div></div><div class="item__secondary"><slot name="people" class="item__people" part="people"></slot><slot name="repo" class="item__repo" part="repo"></slot><slot name="actions" class="item__actions" part="actions"></slot></div></div>`}}class co extends ue{static{this.styles=[be,ro]}static{this.elementName="gk-focus-row"}render(){return F`<div class="row" part="row"><slot name="pin" class="row__pin" part="pin"></slot><div class="row__date" part="date"><slot name="date"></slot></div><div class="row__key" part="key"><slot name="key"></slot></div><slot class="row__content"></slot></div>`}}class lo extends ue{static{this.styles=[be,ro,so,io]}static{this.elementName="gk-focus-container"}render(){return F`<div class="row row--heading"><slot name="pin" class="row__pin" part="pin">Pinned</slot><slot name="date" class="row__date" part="date">Updated</slot><slot name="key" class="row__key" part="key">Key</slot><div class="row__content"><div class="item"><div class="item__primary"><slot name="item" class="item__content" part="item">Item</slot></div><div class="item__secondary"><slot name="people" class="item__people" part="people">People</slot><slot name="repo" class="item__repo" part="repo">Repo</slot><slot name="actions" class="item__actions" part="actions">Action</slot></div></div></div></div><slot class="content"></slot>`}}const ho=_t({react:At,tagName:ao.elementName,elementClass:ao}),uo=_t({react:At,tagName:co.elementName,elementClass:co}),po=_t({react:At,tagName:lo.elementName,elementClass:lo});class fo{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const bo=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends fo{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.st?.has(e)&&this.it.add(e);return this.render(t)}const o=e.element.classList;for(const e of this.it)e in t||(o.remove(e),this.it.delete(e));for(const e in t){const n=!!t[e];n===this.it.has(e)||this.st?.has(e)||(n?(o.add(e),this.it.add(e)):(o.remove(e),this.it.delete(e)))}return q}}),mo=e=>e??V,go=r`:host{display:block}.input-container{background-color:var(--gk-input-background-color,#000);border:1px solid var(--gk-input-border-color,#ffffff14);border-radius:var(--gk-input-border-radius,2px);color:var(--gk-input-color,#ffffff99);cursor:text;display:inline-flex;justify-content:start;padding:var(--gk-input-padding,10px);vertical-align:middle;width:100%}.input{appearance:none;background:inherit;border:none;box-shadow:none;color:inherit;flex:1 1 auto;font:inherit;height:100%;margin:0;outline:0;padding:0}.input-container:focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}`;var vo=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};class yo extends ue{static{this.formAssociated=!0}static{this.styles=[be,pe,go]}static{this.elementName="gk-input"}constructor(){super(),this.disabled=!1,this.labelVisibility="visible",this.required=!1,this.type="text",this.value="";try{this.internals=this.attachInternals()}catch{}}firstUpdated(){this.internals&&this.internals.setFormValue(this.value)}render(){return F`<div class="field"><label class="${bo({label:!0,"sr-only":"sr-only"===this.labelVisibility})}" for="input" ?hidden="${"hidden"===this.labelVisibility}" part="field-label"><slot name="label">${this.label}</slot></label><div class="${bo({"input-container":!0,"input-container--disabled":this.disabled})}"><slot name="prefix" part="prefix"></slot><input autocomplete="${mo(this.autocomplete)}" autocorrect="${mo(this.autocorrect)}" class="input" ?disabled="${this.disabled}" id="input" name="${mo(this.name)}" part="input" placeholder="${mo(this.placeholder)}" type="${this.type}" @input="${this.onInput}"><slot name="suffix" part="suffix"></slot></div></div>`}onInput(e){this.value=e.target.value,this.internals&&this.internals.setFormValue(this.value)}}vo([le()],yo.prototype,"autocomplete",void 0),vo([le()],yo.prototype,"autocorrect",void 0),vo([le({type:Boolean,reflect:!0})],yo.prototype,"disabled",void 0),vo([le()],yo.prototype,"label",void 0),vo([le({attribute:"label-visibility"})],yo.prototype,"labelVisibility",void 0),vo([le()],yo.prototype,"name",void 0),vo([le()],yo.prototype,"placeholder",void 0),vo([le({type:Boolean,reflect:!0})],yo.prototype,"required",void 0),vo([le({reflect:!0})],yo.prototype,"type",void 0),vo([le()],yo.prototype,"value",void 0);const wo=r`:host{display:inline-block}.menu{border:1px solid var(--gk-menu-border-color,#2a2f35);border-radius:4px;background:var(--gk-menu-background-color,#32363f);box-shadow:0 5px 16px 0 rgba(0,0,0,.85);display:inline-block;padding:4px 0}`,ko=r`:host{display:block}.menu-item{font-size:var(--gk-menu-item-font-size, 12px);padding:5px 6px}.menu-item:focus,.menu-item:hover{background-color:var(--gk-menu-item-background-color-hover,#4d88ff1a);cursor:pointer}.menu-item:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.menu-item:active{background-color:var(--gk-menu-item-background-color-active,#4d88ff4d)}.menu-item--disabled,.menu-item--disabled:active,.menu-item--disabled:focus,.menu-item--disabled:hover{background-color:initial;color:var(--gk-menu-item-font-color-disabled,#ffffff60);cursor:default;pointer-events:none}`,$o=r`:host{display:block}.menu-label{cursor:default;display:inline-block;font-size:var(--gk-menu-label-font-size, 12px);font-weight:700;padding:5px 6px}`;class xo extends ue{constructor(){super(...arguments),this._currentMenuItem=void 0}static{this.styles=[be,wo]}static{this.elementName="gk-menu"}_handleSlotChange(){const e=this._getAllItems();e.length&&this._setCurrentItem(e[0])}_handleClick(e){e.stopPropagation();const t=e.target.closest("gk-menu-item");if(!t||t.disabled)return;this._currentMenuItem=t;const o=new CustomEvent("select",{detail:{target:t}});this.dispatchEvent(o)}_handleKeyDown(e){if("Enter"===e.key||" "===e.key)return e.preventDefault(),void this._currentMenuItem?.click();if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=this._getAllItems(),o=t.length;let n=this._currentMenuItem?t.indexOf(this._currentMenuItem):0;"ArrowUp"===e.key?n=(n-1+o)%o:"ArrowDown"===e.key?n=(n+1)%o:"Home"===e.key?n=0:"End"===e.key&&(n=o-1),this._setCurrentItem(t[n]),t[n].focus()}}_handleMouseDown(e){const t=e.target;this._isMenuItem(t)&&this._setCurrentItem(t)}_isMenuItem(e){const t=e.getAttribute("role")||"";return"gk-menu-item"===e.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(t)}_setCurrentItem(e){this._currentMenuItem=e,this._setTabIndex()}_getAllItems(){return this.slotChildren.filter((e=>this._isMenuItem(e)))}_setTabIndex(){this._getAllItems().forEach((e=>{e.setAttribute("tabindex",this._currentMenuItem===e?"0":"-1")}))}render(){return F`<slot class="menu" @click="${this._handleClick}" @keydown="${this._handleKeyDown}" @mousedown="${this._handleMouseDown}" @slotchange="${this._handleSlotChange}" part="base" role="menu"></slot>`}}!function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);r>3&&s&&Object.defineProperty(t,o,s)}([function(e){return(t,o)=>{const{slot:n,selector:i}=e??{},r="slot"+(n?`[name=${n}]`:":not([name])");return he(t,o,{get(){const t=this.renderRoot?.querySelector(r),o=t?.assignedElements(e)??[];return void 0===i?o:o.filter((e=>e.matches(i)))}})}}({flatten:!0})],xo.prototype,"slotChildren",void 0);class _o extends ue{constructor(){super(...arguments),this.disabled=!1}static{this.styles=[be,ko]}static{this.elementName="gk-menu-item"}get allClasses(){return this.disabled?"menu-item--disabled":""}render(){return F`<div aria-disabled="${this.disabled}" class="menu-item ${this.allClasses}" part="base" role="menuitem"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></div>`}}!function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);r>3&&s&&Object.defineProperty(t,o,s)}([le({type:Boolean,reflect:!0})],_o.prototype,"disabled",void 0);class Ao extends ue{static{this.styles=[be,$o]}static{this.elementName="gk-menu-label"}render(){return F`<slot class="menu-label" part="base"></slot>`}}const Co=_t({react:At,tagName:xo.elementName,elementClass:xo,events:{onClick:"select"}}),So=_t({react:At,tagName:_o.elementName,elementClass:_o}),Eo=_t({react:At,tagName:Ao.elementName,elementClass:Ao}),Po=r`:host{display:inline-block}.tag{display:inline-flex;align-items:center;vertical-align:middle;gap:8px;padding:var(--gk-tag-padding,2px 6px);border-radius:var(--gk-tag-radius,4px);background-color:var(--gk-tag-background-color,#33363e);color:var(--gk-tag-color,#85868b);max-width:100%}.tag__prefix,.tag__suffix{flex:none}.tag__label{display:inline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tag--ghost{background-color:transparent}`;class Oo extends ue{static{this.styles=[be,Po]}static{this.elementName="gk-tag"}render(){return F`<span class="tag ${this.variant?`tag--${this.variant}`:""}" part="base"><slot class="tag__prefix" name="prefix"></slot><slot class="tag__label"></slot><slot class="tag__suffix" name="suffix"></slot></span>`}}!function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);r>3&&s&&Object.defineProperty(t,o,s)}([le()],Oo.prototype,"variant",void 0);const Mo=_t({react:At,tagName:Oo.elementName,elementClass:Oo}),Do=_t({react:At,tagName:vt.elementName,elementClass:vt});function Ro(...e){e.forEach((e=>{e.elementName&&!customElements.get(e.elementName)&&(customElements.define(e.elementName,e),e.components&&e.components.length>0&&Ro(...e.components))}))}})();var Qo=Jo.Ct,en=Jo.fW;const tn=e=>e??it,{fromCharCode:on}=String;new TextEncoder;function nn(e,t,o){if(null==o)return`${t} ${e}${1===t?"":"s"}`;const n=1===t?e:o.plural??`${e}s`;return o.only?n:`${0===t?o.zero??t:o.format?.(t)??t}${o.infix??" "}${n}`}var rn=Object.defineProperty,sn=Object.getOwnPropertyDescriptor,an=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?sn(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&rn(t,o,r),r};let cn=class extends yt{constructor(){super(...arguments),this.full=!1,this.disabled=!1,this.tabIndex=0}get role(){return this.href?"link":"button"}updated(e){super.updated(e),e.has("disabled")&&(this.tabIndex=this.disabled?-1:0,this.setAttribute("aria-disabled",this.disabled.toString()))}render(){const e=ot`<slot></slot>`;return null!=this.href?ot`<a href=${this.href}>${e}</a>`:e}};cn.styles=[$o,ge`
			:host {
				--button-foreground: var(--color-button-foreground);
				--button-background: var(--color-button-background);
				--button-hover-background: var(--vscode-button-hoverBackground);
				--button-padding: 0.4rem 1.1rem;
				--button-compact-padding: 0.4rem 0.4rem;
				--button-line-height: 1.694;
				--button-border: var(--vscode-button-border, transparent);

				display: inline-block;
				border: none;
				font-family: inherit;
				font-size: inherit;
				line-height: var(--button-line-height);
				text-align: center;
				text-decoration: none;
				user-select: none;
				background: var(--button-background);
				color: var(--button-foreground);
				cursor: pointer;
				border: 1px solid var(--button-border);
				border-radius: var(--gk-action-radius);
			}

			:host(:not([href])) {
				padding: var(--button-padding);
			}

			:host([href]) > a {
				display: inline-block;
				padding: var(--button-padding);

				color: inherit;
				text-decoration: none;

				width: 100%;
				height: 100%;
			}

			:host(:hover) {
				background: var(--button-hover-background);
			}

			:host(:focus) {
				${ko}
			}

			:host([full]) {
				width: 100%;
			}

			:host([appearance='secondary']) {
				--button-background: var(--vscode-button-secondaryBackground);
				--button-foreground: var(--vscode-button-secondaryForeground);
				--button-hover-background: var(--vscode-button-secondaryHoverBackground);
			}

			:host([appearance='toolbar']) {
				--button-background: transparent;
				--button-foreground: var(--vscode-foreground);
				--button-hover-background: var(--vscode-toolbar-hoverBackground);
				--button-padding: 0.4rem;
				--button-line-height: 1.6;
				--button-border: transparent;
			}

			:host([appearance='alert']) {
				--button-background: transparent;
				--button-border: var(--color-alert-infoBorder);
				--button-foreground: var(--color-button-foreground);
				--button-hover-background: var(--color-alert-infoBorder);
				--button-line-height: 1.64;
				width: max-content;
			}

			:host-context(.vscode-light):host([appearance='alert']:not(:hover)),
			:host-context(.vscode-high-contrast-light):host([appearance='alert']:not(:hover)) {
				--button-foreground: var(--color-foreground);
			}

			:host([appearance='toolbar'][href]) > a {
				display: flex;
				align-items: center;
			}

			:host([appearance='alert'][href]) > a {
				display: block;
				width: max-content;
			}

			:host([density='compact']) {
				padding: var(--button-compact-padding);
			}

			:host([disabled]) {
				opacity: 0.4;
				cursor: not-allowed;
				pointer-events: none;
			}
		`],an([_t({type:Boolean,reflect:!0})],cn.prototype,"full",2),an([_t({type:Boolean,reflect:!0})],cn.prototype,"disabled",2),an([_t({reflect:!0})],cn.prototype,"density",2),an([_t()],cn.prototype,"href",2),an([_t({reflect:!0})],cn.prototype,"role",1),an([_t()],cn.prototype,"appearance",2),an([_t({type:Number,reflect:!0})],cn.prototype,"tabIndex",2),cn=an([kt("gl-button")],cn);const ln=2;class hn{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}class dn extends hn{constructor(e){if(super(e),this.et=it,e.type!==ln)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===it||null==e)return this.vt=void 0,this.et=e;if(e===nt)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;const t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}dn.directiveName="unsafeHTML",dn.resultType=1;const un=(e=>(...t)=>({_$litDirective$:e,values:t}))(dn);function pn(e,t,o,n=!1,i){const r={name:"",relativePath:"",children:new Map,descendants:[]};let s=e.reduce(((e,n)=>{let i=e,r="";for(const e of t(n)){r=o(r,e),void 0===i.children&&(i.children=new Map);let t=i.children.get(e);void 0===t&&(t={name:e,relativePath:r,parent:i,children:void 0,descendants:void 0},i.children.set(e,t)),void 0===i.descendants&&(i.descendants=[]),i.descendants.push(n),i=t}return i.value=n,e}),r);return n&&(s=fn(s,o,!0,i)),s}function fn(e,t,o=!0,n){if(void 0===e.children)return e;const i=[...e.children.values()];for(const e of i)fn(e,t,!1,n);if(!o&&1===i.length){const o=i[0];(void 0===o.value||n?.(o.value))&&(e.name=t(e.name,o.name),e.relativePath=o.relativePath,e.children=o.children,e.descendants=o.descendants,e.value=o.value)}return e}var bn=Object.defineProperty,mn=Object.getOwnPropertyDescriptor,gn=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?mn(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&bn(t,o,r),r};class vn extends yt{constructor(){super(...arguments),this.tab="commit",this.isUncommitted=!1,this.emptyText="No Files"}renderWipCategory(e=!0,t=!0){const o=e?"Staged Changes":"Unstaged Changes",n=`Share ${o}`;return ot`
			<list-item tree branch hide-icon>
				${o}
				${mo("wip"===this.tab,(()=>ot` <span slot="actions"
							><a
								class="change-list__action ${t?"":"is-disabled"}"
								href="#"
								title="${n}"
								aria-label="${n}"
								data-action="create-patch"
								data-wip-checked="${e?"staged":"true"}"
								><code-icon icon="gl-cloud-patch-share"></code-icon></a
						></span>`))}</list-item
			>
		`}renderFileList(e,t){let o,n;if(this.isUncommitted){o=[],n=`indentGuides-${this.preferences?.indentGuides}`;const i=t.filter((e=>e.staged));if(i.length){o.push(this.renderWipCategory(!0,!0));for(const t of i)o.push(this.renderFile(e,t,2,!0))}const r=t.filter((e=>!e.staged));if(r.length){o.push(this.renderWipCategory(!1,!0));for(const t of r)o.push(this.renderFile(e,t,2,!0))}}else o=t.map((t=>this.renderFile(e,t)));return ot`<list-container class=${tn(n)}>${o}</list-container>`}renderFileTree(e,t){const o=this.preferences?.files?.compact??!0;let n;if(this.isUncommitted){n=[];const i=t.filter((e=>e.staged));i.length&&(n.push(this.renderWipCategory(!0,!0)),n.push(...this.renderFileSubtree(e,i,1,o)));const r=t.filter((e=>!e.staged));r.length&&(n.push(this.renderWipCategory(!1,!0)),n.push(...this.renderFileSubtree(e,r,1,o)))}else n=this.renderFileSubtree(e,t,0,o);return ot`<list-container class="indentGuides-${this.preferences?.indentGuides}">${n}</list-container>`}renderFileSubtree(e,t,o,n){const i=pn(t,(e=>e.path.split("/")),((...e)=>e.join("/")),n);return yn(i).map((({level:t,item:n})=>{if(""!==n.name)return null==n.value?ot`
					<list-item level="${o+t}" tree branch>
						<code-icon slot="icon" icon="folder" title="Directory" aria-label="Directory"></code-icon>
						${n.name}
					</list-item>
				`:this.renderFile(e,n.value,o+t,!0)}))}renderFile(e,t,o=1,n=!1){return ot`
			<file-change-list-item
				?tree=${n}
				level="${o}"
				?stash=${"stash"===e}
				?uncommitted=${this.isUncommitted}
				?readonly=${this.isUncommitted&&"wip"!==e}
				path="${t.path}"
				repo="${t.repoPath}"
				?staged=${t.staged}
				status="${t.status}"
			></file-change-list-item>
		`}renderChangedFiles(e,t){const o=this.preferences?.files?.layout??"auto";let n="tree",i="list-tree",r="View as Tree",s=!1;if(null!=this.preferences&&null!=this.files)switch(s="auto"===o?this.files.length>(this.preferences.files?.threshold??5):"tree"===o,o){case"auto":n="list",i="gl-list-auto",r="View as List";break;case"list":n="tree",i="list-flat",r="View as Tree";break;case"tree":n="auto",i="list-tree",r="View as Auto"}return ot`
			<webview-pane collapsable expanded>
				<span slot="title">Files changed </span>
				<span slot="subtitle" data-region="stats">${t}</span>
				<action-nav slot="actions">
					<action-item
						data-action="files-layout"
						data-files-layout="${n}"
						label="${r}"
						icon="${i}"
					></action-item>
				</action-nav>

				<div class="change-list" data-region="files">
					${mo(null==this.files,(()=>ot`
							<div class="section section--skeleton">
								<skeleton-loader></skeleton-loader>
							</div>
							<div class="section section--skeleton">
								<skeleton-loader></skeleton-loader>
							</div>
							<div class="section section--skeleton">
								<skeleton-loader></skeleton-loader>
							</div>
						`),(()=>mo(this.files.length>0,(()=>s?this.renderFileTree(e,this.files):this.renderFileList(e,this.files)),(()=>ot`<div class="section"><p>${this.emptyText}</p></div>`))))}
				</div>
			</webview-pane>
		`}onShareWipChanges(e,t,o){if(!o)return;const n=new CustomEvent("share-wip",{detail:{checked:t}});this.dispatchEvent(n)}createRenderRoot(){return this}}function yn(e,t=0){const o=[];if(null==e)return o;if(o.push({level:t,item:e}),null!=e.children){const n=Array.from(e.children.values());n.sort(((e,t)=>e.value&&t.value?e.relativePath<t.relativePath?-1:e.relativePath>t.relativePath?1:0:(e.value?1:-1)-(t.value?1:-1))),n.forEach((e=>{o.push(...yn(e,t+1))}))}return o}gn([_t({type:Array})],vn.prototype,"files",2),gn([_t({type:Boolean})],vn.prototype,"isUncommitted",2),gn([_t({type:Object})],vn.prototype,"preferences",2),gn([_t({attribute:"empty-text"})],vn.prototype,"emptyText",2);var wn=Object.defineProperty,kn=Object.getOwnPropertyDescriptor,$n=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?kn(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&wn(t,o,r),r};let xn=class extends vn{constructor(){super(...arguments),this.tab="commit",this.explainBusy=!1}get isStash(){return null!=this.state?.commit?.stashNumber}get shortSha(){return this.state?.commit?.shortSha??""}get navigation(){if(null==this.state?.navigationStack)return{back:!1,forward:!1};const e={back:!0,forward:!0};return this.state.navigationStack.count<=1?(e.back=!1,e.forward=!1):0===this.state.navigationStack.position?(e.back=!0,e.forward=!1):this.state.navigationStack.position===this.state.navigationStack.count-1&&(e.back=!1,e.forward=!0),e}updated(e){e.has("explain")&&(this.explainBusy=!1,this.querySelector('[data-region="commit-explanation"]')?.scrollIntoView())}renderEmptyContent(){return ot`
			<div class="section section--empty" id="empty">
				<p>Rich details for commits and stashes are shown as you navigate:</p>

				<ul class="bulleted">
					<li>lines in the text editor</li>
					<li>
						commits in the <a href="command:gitlens.showGraph">Commit Graph</a>,
						<a href="command:gitlens.showTimelineView">Visual File History</a>, or
						<a href="command:gitlens.showCommitsView">Commits view</a>
					</li>
					<li>stashes in the <a href="command:gitlens.showStashesView">Stashes view</a></li>
				</ul>

				<p>Alternatively, show your work-in-progress, or search for or choose a commit</p>

				<p class="button-container">
					<button class="button button--full" type="button" data-action="wip">Show Working Changes</button>
				</p>
				<p class="button-container">
					<span class="button-group button-group--single">
						<button class="button button--full" type="button" data-action="pick-commit">
							Choose Commit...
						</button>
						<button
							class="button"
							type="button"
							data-action="search-commit"
							aria-label="Search for Commit"
							title="Search for Commit"
						>
							<code-icon icon="search"></code-icon>
						</button>
					</span>
				</p>
			</div>
		`}renderCommitMessage(){if(null==this.state?.commit)return;const e=this.state.commit.message,t=e.indexOf("\0\n\0");return ot`
			<div class="section section--message">
				<div class="message-block">
					${mo(-1===t,(()=>ot`<p class="message-block__text scrollable" data-region="message">
								<strong>${un(e)}</strong>
							</p>`),(()=>ot`<p class="message-block__text scrollable" data-region="message">
								<strong>${un(e.substring(0,t))}</strong><br /><span
									>${un(e.substring(t+3))}</span
								>
							</p>`))}
				</div>
			</div>
		`}renderAutoLinks(){if(this.isUncommitted)return;const e=new Map;if(null!=this.state?.commit?.autolinks)for(const t of this.state.commit.autolinks)e.set(t.id,{type:"autolink",value:t});if(null!=this.state?.autolinkedIssues)for(const t of this.state.autolinkedIssues)e.set(t.id,{type:"issue",value:t});null!=this.state?.pullRequest&&e.set(this.state.pullRequest.id,{type:"pr",value:this.state.pullRequest});const t=[],o=[],n=[];for(const i of e.values())switch(i.type){case"autolink":t.push(i.value);break;case"issue":o.push(i.value);break;case"pr":n.push(i.value)}return ot`
			<webview-pane
				collapsable
				?expanded=${this.state?.preferences?.autolinksExpanded??!0}
				?loading=${!this.state?.includeRichContent}
				data-region="rich-pane"
			>
				<span slot="title">Autolinks</span>
				<span slot="subtitle" data-region="autolink-count"
					>${this.state?.includeRichContent||e.size?`${e.size} found `:""}${this.state?.includeRichContent?"":"…"}</span
				>
				${mo(null==this.state,(()=>ot`
						<div class="section" data-region="autolinks">
							<section class="auto-link" aria-label="Custom Autolinks" data-region="custom-autolinks">
								<skeleton-loader lines="2"></skeleton-loader>
							</section>
							<section class="pull-request" aria-label="Pull request" data-region="pull-request">
								<skeleton-loader lines="2"></skeleton-loader>
							</section>
							<section class="issue" aria-label="Issue" data-region="issue">
								<skeleton-loader lines="2"></skeleton-loader>
							</section>
						</div>
					`),(()=>0===e.size?ot`
								<div class="section" data-region="rich-info">
									<p>
										<code-icon icon="info"></code-icon>&nbsp;Use
										<a href="#" data-action="autolink-settings" title="Configure autolinks"
											>autolinks</a
										>
										to linkify external references, like Jira issues or Zendesk tickets, in commit
										messages.
									</p>
								</div>
							`:ot`
							<div class="section" data-region="autolinks">
								${t.length?ot`
											<section
												class="auto-link"
												aria-label="Custom Autolinks"
												data-region="custom-autolinks"
											>
												${t.map((e=>{let t=e.description??e.title;return void 0===t&&(t=`Custom Autolink ${e.prefix}${e.id}`),ot`
														<issue-pull-request
															type="autolink"
															name="${t}"
															url="${e.url}"
															key="${e.prefix}${e.id}"
															status=""
														></issue-pull-request>
													`}))}
											</section>
									  `:void 0}
								${n.length?ot`
											<section
												class="pull-request"
												aria-label="Pull request"
												data-region="pull-request"
											>
												${n.map((e=>ot`
														<issue-pull-request
																type="pr"
																name="${e.title}"
																url="${e.url}"
																key="#${e.id}"
																status="${e.state}"
																date=${e.date}
																dateFormat="${this.state.preferences.dateFormat}"
															></issue-pull-request>
														</section>
									  				`))}
											</section>
									  `:void 0}
								${o.length?ot`
											<section class="issue" aria-label="Issue" data-region="issue">
												${o.map((e=>ot`
														<issue-pull-request
															type="issue"
															name="${e.title}"
															url="${e.url}"
															key="${e.id}"
															status="${e.state}"
															date="${e.closed?e.closedDate:e.date}"
															dateFormat="${this.state.preferences.dateFormat}"
														></issue-pull-request>
													`))}
											</section>
									  `:void 0}
							</div>
						`))}
			</webview-pane>
		`}renderExplainAi(){return ot`
			<webview-pane collapsable data-region="explain-pane">
				<span slot="title">Explain (AI)</span>
				<span slot="subtitle"><code-icon icon="beaker" size="12"></code-icon></span>
				<action-nav slot="actions">
					<action-item data-action="switch-ai" label="Switch AI Model" icon="hubot"></action-item>
				</action-nav>

				<div class="section">
					<p>Let AI assist in understanding the changes made with this commit.</p>
					<p class="button-container">
						<span class="button-group">
							<button
								class="button button--full button--busy"
								type="button"
								data-action="explain-commit"
								aria-busy="${this.explainBusy?"true":it}"
								@click=${this.onExplainChanges}
								@keydown=${this.onExplainChanges}
							>
								<code-icon icon="loading" modifier="spin"></code-icon>Explain Changes
							</button>
						</span>
					</p>
					${mo(this.explain,(()=>ot`
							<div
								class="ai-content${this.explain?.error?" has-error":""}"
								data-region="commit-explanation"
							>
								${mo(this.explain?.error,(()=>ot`<p class="ai-content__summary scrollable">
											${this.explain.error.message??"Error retrieving content"}
										</p>`))}
								${mo(this.explain?.summary,(()=>ot`<p class="ai-content__summary scrollable">${this.explain.summary}</p>`))}
							</div>
						`))}
				</div>
			</webview-pane>
		`}render(){if(null==this.state?.commit)return this.renderEmptyContent();const e=this.state.commit,t=this.state.pinned?"Unpin this Commit\nRestores Automatic Following":"Pin this Commit\nSuspends Automatic Following";return ot`
			<div class="top-details">
				<div class="top-details__top-menu">
					<div class="top-details__actionbar${this.state.pinned?" is-pinned":""}">
						<div class="top-details__actionbar-group">
							<a
								class="commit-action${this.state.pinned?" is-active":""}"
								href="#"
								data-action="pin"
								aria-label="${t}"
								title="${t}"
								><code-icon
									icon="${this.state.pinned?"gl-pinned-filled":"pin"}"
									data-region="commit-pin"
								></code-icon
							></a>
							<a
								class="commit-action${this.navigation.back?"":" is-disabled"}"
								aria-disabled="${this.navigation.back?it:"true"}"
								href="#"
								data-action="back"
								aria-label="Back"
								title="Back"
								><code-icon icon="arrow-left" data-region="commit-back"></code-icon
							></a>
							${mo(this.navigation.forward,(()=>ot`
									<a
										class="commit-action"
										href="#"
										data-action="forward"
										aria-label="Forward"
										title="Forward"
										><code-icon icon="arrow-right" data-region="commit-forward"></code-icon
									></a>
								`))}
							${mo(this.state.navigationStack?.hint,(()=>ot`
									<a
										class="commit-action commit-action--emphasis-low"
										href="#"
										title="View this Commit"
										data-action="${this.state?.pinned?"forward":"back"}"
										><code-icon icon="git-commit"></code-icon
										><span data-region="commit-hint">${this.state.navigationStack?.hint}</span></a
									>
								`))}
						</div>
						<div class="top-details__actionbar-group">
							${mo(!this.isUncommitted,(()=>ot`
									<a
										class="commit-action"
										href="#"
										data-action="commit-actions"
										data-action-type="sha"
										aria-label="Copy SHA
[⌥] Pick Commit..."
										title="Copy SHA
[⌥] Pick Commit..."
									>
										<code-icon icon="git-commit"></code-icon>
										<span class="top-details__sha" data-region="shortsha">${this.shortSha}</span></a
									>
								`),(()=>ot`
									<a
										class="commit-action"
										href="#"
										data-action="commit-actions"
										data-action-type="scm"
										aria-label="Open SCM view"
										title="Open SCM view"
										><code-icon icon="source-control"></code-icon
									></a>
								`))}
							<a
								class="commit-action"
								href="#"
								data-action="commit-actions"
								data-action-type="graph"
								aria-label="Open in Commit Graph"
								title="Open in Commit Graph"
								><code-icon icon="gl-graph"></code-icon
							></a>
							${mo(!this.isUncommitted,(()=>ot`
									<a
										class="commit-action"
										href="#"
										data-action="commit-actions"
										data-action-type="more"
										aria-label="Show Commit Actions"
										title="Show Commit Actions"
										><code-icon icon="kebab-vertical"></code-icon
									></a>
								`))}
						</div>
					</div>
					${mo(null!=e&&!this.isStash,(()=>ot`
							<ul class="top-details__authors" aria-label="Authors">
								<li class="top-details__author" data-region="author">
									<commit-identity
										name="${e.author.name}"
										email="${e.author.email}"
										date=${e.author.date}
										dateFormat="${this.preferences?.dateFormat}"
										avatarUrl="${e.author.avatar??""}"
										showAvatar="${this.preferences?.avatars??!0}"
										actionLabel="${e.sha===Dn?"modified":"committed"}"
									></commit-identity>
								</li>
							</ul>
						`))}
				</div>
			</div>
			${this.renderCommitMessage()} ${this.renderAutoLinks()}
			${this.renderChangedFiles(this.isStash?"stash":"commit",this.renderCommitStats(e?.stats))}
			${this.renderExplainAi()}
		`}onExplainChanges(e){if(!0===this.explainBusy||e instanceof KeyboardEvent&&"Enter"!==e.key)return e.preventDefault(),void e.stopPropagation();this.explainBusy=!0}renderCommitStats(e){if(null==e?.changedFiles)return;if("number"==typeof e.changedFiles)return ot`<commit-stats added="?" modified="${e.changedFiles}" removed="?"></commit-stats>`;const{added:t,deleted:o,changed:n}=e.changedFiles;return ot`<commit-stats added="${t}" modified="${n}" removed="${o}"></commit-stats>`}};$n([_t({type:Object})],xn.prototype,"state",2),$n([At()],xn.prototype,"isStash",1),$n([At()],xn.prototype,"shortSha",1),$n([At()],xn.prototype,"explainBusy",2),$n([_t({type:Object})],xn.prototype,"explain",2),xn=$n([kt("gl-commit-details")],xn);var _n=Object.defineProperty,An=Object.getOwnPropertyDescriptor,Cn=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?An(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&_n(t,o,r),r};let Sn=class extends vn{constructor(){super(...arguments),this.tab="wip"}render(){return ot`
			<div class="top-details">
				<div class="top-details__top-menu">
					<div class="top-details__actionbar">
						<div class="top-details__actionbar-group">
							${mo(null==this.wip?.changes||null==this.files,(()=>"Loading..."),(()=>ot`<span
										>${nn("change",this.files.length)} on
										<span
											class="top-details__actionbar--highlight"
											title="${this.wip.repositoryCount>1?`${this.wip.changes.repository.name}:${this.wip.changes.branchName}`:this.wip.changes.branchName}"
											>${this.wip.repositoryCount>1?`${this.wip.changes.repository.name}:${this.wip.changes.branchName}`:this.wip.changes.branchName}</span
										></span
									>`))}
						</div>
						<div class="top-details__actionbar-group">
							<a
								class="commit-action"
								href="#"
								data-action="create-patch"
								aria-label="Share as Cloud Patch"
								title="Share as Cloud Patch"
							>
								<code-icon icon="gl-cloud-patch-share"></code-icon>
								<span class="top-details__sha">Share</span>
							</a>
							<a
								class="commit-action"
								href="#"
								data-action="commit-actions"
								data-action-type="scm"
								aria-label="Open SCM view"
								title="Open SCM view"
								><code-icon icon="source-control"></code-icon
							></a>
							<a
								class="commit-action"
								href="#"
								data-action="commit-actions"
								data-action-type="graph"
								aria-label="Open in Commit Graph"
								title="Open in Commit Graph"
								><code-icon icon="gl-graph"></code-icon
							></a>
						</div>
					</div>
				</div>
			</div>
			${this.renderChangedFiles("wip")}
		`}};Cn([_t({type:Object})],Sn.prototype,"wip",2),Sn=Cn([kt("gl-wip-details")],Sn);var En=Object.defineProperty,Pn=Object.getOwnPropertyDescriptor,On=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?Pn(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&En(t,o,r),r};let Mn=class extends yt{constructor(){super(),en(Qo)}get isUncommitted(){return this.state?.commit?.sha===Dn}get isStash(){return null!=this.state?.commit?.stashNumber}get navigation(){if(null==this.state?.navigationStack)return{back:!1,forward:!1};const e={back:!0,forward:!0};return this.state.navigationStack.count<=1?(e.back=!1,e.forward=!1):0===this.state.navigationStack.position?(e.back=!0,e.forward=!1):this.state.navigationStack.position===this.state.navigationStack.count-1&&(e.back=!1,e.forward=!0),e}render(){const e=this.state?.wip;return ot`
			<div class="commit-detail-panel scrollable">
				<main id="main" tabindex="-1">
					<nav class="details-tab">
						<button
							class="details-tab__item ${"commit"===this.state?.mode?" is-active":""}"
							data-action="details"
						>
							${this.isStash?"Stash":"Commit"}
						</button>
						<button
							class="details-tab__item ${"wip"===this.state?.mode?" is-active":""}"
							data-action="wip"
							title="${tn("wip"===this.state?.mode&&e?.changes?.files.length?`${nn("change",e.changes.files.length)} on ${e.repositoryCount>1?`${e.changes.repository.name}:${e.changes.branchName}`:e.changes.branchName}`:void 0)}"
						>
							Working
							Changes${tn("wip"===this.state?.mode&&e?.changes?.files.length?ot` &nbsp;<gk-badge variant="filled">${e.changes.files.length}</gk-badge>`:void 0)}
						</button>
					</nav>
					${mo("commit"===this.state?.mode,(()=>ot`<gl-commit-details
								.state=${this.state}
								.files=${this.state?.commit?.files}
								.explain=${this.explain}
								.preferences=${this.state?.preferences}
								.isUncommitted=${this.isUncommitted}
							></gl-commit-details>`),(()=>ot`<gl-wip-details
								.wip=${e}
								.files=${e?.changes?.files}
								.preferences=${this.state?.preferences}
								.isUncommitted=${!0}
								.emptyText=${"No working changes"}
							></gl-wip-details>`))}
				</main>
			</div>
		`}createRenderRoot(){return this}};On([_t({type:Object})],Mn.prototype,"state",2),On([_t({type:Object})],Mn.prototype,"explain",2),On([At()],Mn.prototype,"isUncommitted",1),On([At()],Mn.prototype,"isStash",1),Mn=On([kt("gl-commit-details-app")],Mn);const Dn="0000000000000000000000000000000000000000";class Rn extends de{constructor(){super("CommitDetailsApp")}onInitialize(){this.attachState()}onBind(){const e=[R.on("file-change-list-item","file-open-on-remote",(e=>this.onOpenFileOnRemote(e.detail))),R.on("file-change-list-item","file-open",(e=>this.onOpenFile(e.detail))),R.on("file-change-list-item","file-compare-working",(e=>this.onCompareFileWithWorking(e.detail))),R.on("file-change-list-item","file-compare-previous",(e=>this.onCompareFileWithPrevious(e.detail))),R.on("file-change-list-item","file-more-actions",(e=>this.onFileMoreActions(e.detail))),R.on("file-change-list-item","file-stage",(e=>this.onStageFile(e.detail))),R.on("file-change-list-item","file-unstage",(e=>this.onUnstageFile(e.detail))),R.on('[data-action="commit-actions"]',"click",(e=>this.onCommitActions(e))),R.on('[data-action="pick-commit"]',"click",(e=>this.onPickCommit(e))),R.on('[data-action="wip"]',"click",(e=>this.onSwitchMode(e,"wip"))),R.on('[data-action="details"]',"click",(e=>this.onSwitchMode(e,"commit"))),R.on('[data-action="search-commit"]',"click",(e=>this.onSearchCommit(e))),R.on('[data-action="autolink-settings"]',"click",(e=>this.onAutolinkSettings(e))),R.on('[data-action="files-layout"]',"click",(e=>this.onToggleFilesLayout(e))),R.on('[data-action="pin"]',"click",(e=>this.onTogglePin(e))),R.on('[data-action="back"]',"click",(e=>this.onNavigate("back",e))),R.on('[data-action="forward"]',"click",(e=>this.onNavigate("forward",e))),R.on('[data-action="create-patch"]',"click",(e=>this.onCreatePatchFromWip(e))),R.on('[data-region="rich-pane"]',"expanded-change",(e=>this.onExpandedChange(e.detail))),R.on('[data-action="explain-commit"]',"click",(e=>this.onExplainCommit(e))),R.on('[data-action="switch-ai"]',"click",(e=>this.onSwitchAiModel(e)))];return e}onMessageReceived(e){const t=e.data;switch(this.log(`onMessageReceived(${t.id}): name=${t.method}`),t.method){case C.method:r(C,t,(e=>{e.state,this.state=e.state,this.setState(this.state),this.attachState()}));break;case S.method:r(S,t,(e=>{this.state={...this.state,...e},this.setState(this.state),this.attachState()}));break;default:super.onMessageReceived?.(e)}}onCreatePatchFromWip(e){if(null==this.state.wip?.changes)return;const t=e.target?.closest("[data-wip-checked]")?.dataset.wipChecked;let o;o=null==t||("staged"===t?t:"true"===t),this.sendCommand(A,{changes:this.state.wip?.changes,checked:o})}onCommandClickedCore(e){const t=e?.startsWith("command:")?e.slice(8):e;null!=t&&this.sendCommand(c,{command:t})}onSwitchAiModel(e){this.onCommandClickedCore("gitlens.switchAIModel")}async onExplainCommit(e){try{const e=await this.sendCommandWithCompletion(k,void 0,E);e.error?this.component.explain={error:{message:e.error.message??"Error retrieving content"}}:e.summary?this.component.explain={summary:e.summary}:this.component.explain=void 0}catch(e){this.component.explain={error:{message:"Error retrieving content"}}}}onToggleFilesLayout(e){const t=e.target?.dataset.filesLayout??void 0;if(t===this.state.preferences?.files?.layout)return;const o={...this.state.preferences?.files,layout:t??"auto"};this.state={...this.state,preferences:{...this.state.preferences,files:o}},this.attachState(),this.sendCommand(_,{files:o})}onExpandedChange(e){this.state={...this.state,preferences:{...this.state.preferences,autolinksExpanded:e.expanded}},this.attachState(),this.sendCommand(_,{autolinksExpanded:e.expanded})}onNavigate(e,t){t.preventDefault(),this.sendCommand(x,{direction:e})}onTogglePin(e){e.preventDefault(),this.sendCommand($,{pin:!this.state.pinned})}onAutolinkSettings(e){e.preventDefault(),this.sendCommand(w,void 0)}onPickCommit(e){this.sendCommand(g,void 0)}onSearchCommit(e){this.sendCommand(v,void 0)}onSwitchMode(e,t){this.state={...this.state,mode:t},this.attachState(),this.sendCommand(y,{mode:t,repoPath:this.state.commit?.repoPath})}onOpenFileOnRemote(e){this.sendCommand(u,e)}onOpenFile(e){this.sendCommand(d,e)}onCompareFileWithWorking(e){this.sendCommand(p,e)}onCompareFileWithPrevious(e){this.sendCommand(f,e)}onFileMoreActions(e){this.sendCommand(h,e)}onStageFile(e){this.sendCommand(b,e)}onUnstageFile(e){this.sendCommand(m,e)}onCommitActions(e){if(e.preventDefault(),void 0===this.state.commit)return void e.stopPropagation();const t=e.target?.getAttribute("data-action-type");null!=t&&this.sendCommand(l,{action:t,alt:e.altKey})}get component(){return null==this._component&&(this._component=document.getElementById("app")),this._component}attachState(){this.component.state=this.state}}new Rn;var Tn=t.b,Nn=t.F;export{Tn as CommitDetailsApp,Nn as uncommittedSha};