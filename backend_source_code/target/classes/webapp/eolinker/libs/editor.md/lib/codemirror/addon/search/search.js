!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("./searchcursor"),require("../dialog/dialog")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","./searchcursor","../dialog/dialog"],e):e(CodeMirror)}(function(e){"use strict";function o(e,o){return"string"==typeof e?e=new RegExp(e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),o?"gi":"g"):e.global||(e=new RegExp(e.source,e.ignoreCase?"gi":"g")),{token:function(o){e.lastIndex=o.pos;var r=e.exec(o.string);return r&&r.index==o.pos?(o.pos+=r[0].length,"searching"):void(r?o.pos=r.index:o.skipToEnd())}}}function r(){this.posFrom=this.posTo=this.query=null,this.overlay=null}function n(e){return e.state.search||(e.state.search=new r)}function t(e){return"string"==typeof e&&e==e.toLowerCase()}function i(e,o,r){return e.getSearchCursor(o,r,t(o))}function a(e,o,r,n,t){e.openDialog?e.openDialog(o,t,{value:n}):t(prompt(r,n))}function c(e,o,r,n){e.openConfirm?e.openConfirm(o,n):confirm(r)&&n[0]()}function s(e){var o=e.match(/^\/(.*)\/([a-z]*)$/);if(o)try{e=new RegExp(o[1],o[2].indexOf("i")==-1?"":"i")}catch(r){}return("string"==typeof e?""==e:e.test(""))&&(e=/x^/),e}function l(e,r){var i=n(e);return i.query?u(e,r):void a(e,d,"Search for:",e.getSelection(),function(n){e.operation(function(){n&&!i.query&&(i.query=s(n),e.removeOverlay(i.overlay,t(i.query)),i.overlay=o(i.query,t(i.query)),e.addOverlay(i.overlay),e.showMatchesOnScrollbar&&(i.annotate&&(i.annotate.clear(),i.annotate=null),i.annotate=e.showMatchesOnScrollbar(i.query,t(i.query))),i.posFrom=i.posTo=e.getCursor(),u(e,r))})})}function u(o,r){o.operation(function(){var t=n(o),a=i(o,t.query,r?t.posFrom:t.posTo);(a.find(r)||(a=i(o,t.query,r?e.Pos(o.lastLine()):e.Pos(o.firstLine(),0)),a.find(r)))&&(o.setSelection(a.from(),a.to()),o.scrollIntoView({from:a.from(),to:a.to()}),t.posFrom=a.from(),t.posTo=a.to())})}function f(e){e.operation(function(){var o=n(e);o.query&&(o.query=null,e.removeOverlay(o.overlay),o.annotate&&(o.annotate.clear(),o.annotate=null))})}function p(e,o){e.getOption("readOnly")||a(e,m,"Replace:",e.getSelection(),function(r){r&&(r=s(r),a(e,y,"Replace with:","",function(n){if(o)e.operation(function(){for(var o=i(e,r);o.findNext();)if("string"!=typeof r){var t=e.getRange(o.from(),o.to()).match(r);o.replace(n.replace(/\$(\d)/g,function(e,o){return t[o]}))}else o.replace(n)});else{f(e);var t=i(e,r,e.getCursor()),a=function(){var o,n=t.from();!(o=t.findNext())&&(t=i(e,r),!(o=t.findNext())||n&&t.from().line==n.line&&t.from().ch==n.ch)||(e.setSelection(t.from(),t.to()),e.scrollIntoView({from:t.from(),to:t.to()}),c(e,h,"Replace?",[function(){s(o)},a]))},s=function(e){t.replace("string"==typeof r?n:n.replace(/\$(\d)/g,function(o,r){return e[r]})),a()};a()}}))})}var d='Search: <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">(Use /re/ syntax for regexp search)</span>',m='Replace: <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">(Use /re/ syntax for regexp search)</span>',y='With: <input type="text" style="width: 10em" class="CodeMirror-search-field"/>',h="Replace? <button>Yes</button> <button>No</button> <button>Stop</button>";e.commands.find=function(e){f(e),l(e)},e.commands.findNext=l,e.commands.findPrev=function(e){l(e,!0)},e.commands.clearSearch=f,e.commands.replace=p,e.commands.replaceAll=function(e){p(e,!0)}});