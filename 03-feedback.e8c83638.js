parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"TTyb":[function(require,module,exports) {
const e="feedback-message",t={form:document.querySelector(".js-feedback-form"),textarea:document.querySelector(".js-feedback-form textarea")};function o(t){t.preventDefault(),console.log("Відправляємо форму"),t.currentTarget.reset(),localStorage.removeItem(e)}function a(t){const o=t.target.value;localStorage.setItem(e,o)}function r(){const o=localStorage.getItem(e);o&&(console.log(o),t.textarea.value=o)}t.form.addEventListener("submit",o),t.textarea.addEventListener("input",a),t.form.addEventListener("input",e=>{console.log(e.target.name),console.log(e.target.value),FormData[e.target.name]=e.target.value,console.log(FormData)});
},{}]},{},["TTyb"], null)
//# sourceMappingURL=/modul-08/03-feedback.e8c83638.js.map