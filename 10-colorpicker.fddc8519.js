parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"GMzT":[function(require,module,exports) {
const e=[{hex:"#f44336",rgb:"244,67,54"},{hex:"#e91e63",rgb:"233,30,99"},{hex:"#9c27b0",rgb:"156,39,176"},{hex:"#673ab7",rgb:"103,58,183"},{hex:"#3f51b5",rgb:"63,81,181"},{hex:"#2196f3",rgb:"33,150,243"},{hex:"#00bcd4",rgb:"0,188,212"},{hex:"#009688",rgb:"0,150,136"},{hex:"#4caf50",rgb:"76,175,80"},{hex:"#ffeb3b",rgb:"255,235,59"},{hex:"#ff9800",rgb:"255,152,0"},{hex:"#795548",rgb:"121,85,72"},{hex:"#607d8b",rgb:"96,125,139"}],c=document.querySelector(".js-palette"),r=t(e);function t(e){return e.map(({hex:e,rgb:c})=>`\n    <div class="color-card">\n    <div\n    class="color-swatch"\n    data-hex="${e}"\n    data-rgb="${c}"\n    style="background-color: ${e}">\n  </div>\n  <div class="color-meta">\n    <p>HEX: ${e}</p>\n    <p>RGB: ${c}</p>\n  </div>\n  </div> `).join("")}function n(e){if(!e.target.classList.contains("color-swatch"))return;const c=e.target,r=c.closest(".color-card");a(),s(r),o(c.dataset.hex)}function o(e){document.body.style.backgroundColor=e}function a(){const e=document.querySelector(".color-card.is-active");e&&e.classList.remove("is-active")}function s(e){e.classList.add("is-active")}c.insertAdjacentHTML("beforeend",r),c.addEventListener("click",n);
},{}]},{},["GMzT"], null)
//# sourceMappingURL=/modul-08/10-colorpicker.fddc8519.js.map