parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Ju0m":[function(require,module,exports) {
console.log("Module 8.2");let e=[];const t=({id:e,isDone:t,text:o})=>`\n<li data-id="${e}">\n<label>\n  <input type="checkbox" ${t?"checked":""} />\n  <span>${o}</span>\n</label>\n<button>x</button>\n</li>`,o={ul:document.querySelector("ul"),form:document.querySelector("form")},n=()=>{try{e=JSON.parse(localStorage.getItem("todos"))}catch(t){e=[],console.log(t.message)}},s=()=>{localStorage.setItem("todos",JSON.stringify(e))},l=t=>{const o=t.target.closest("li"),{id:n}=o.dataset;e=e.map(e=>e.id===n?{...e,isDone:!e.isDone}:e),console.log(n),u()},a=t=>{const o=t.target.closest("li"),{id:n}=o.dataset;e=e.filter(e=>e.id!==n),u()},i=t=>{t.preventDefault();const n=t.target.elements.todoText.value,l={id:Date.now().toString(),text:n,isDone:!1};e.push(l),s(),u(),o.form.reset()},r=t=>{e=e.map(e=>e.id===t?{...e,isDone:!e.isDone}:e)},c=t=>{console.log("delete"),e=e.filter(e=>e.id!==t)},d=e=>{if(e.target===e.currentTarget)return;const t=e.target.closest("li"),{id:o}=t.dataset;switch(e.target.nodeName){case"INPUT":r(o);break;case"BUTTON":c(o)}s(),u()},u=()=>{const n=e.map(t).join("");o.ul.innerHTML="",o.ul.insertAdjacentHTML("beforeend",n)};o.form.addEventListener("submit",i),o.ul.addEventListener("click",d),n(),u();
},{}]},{},["Ju0m"], null)
//# sourceMappingURL=/modul-08/todo-list-part4.9bdf9d85.js.map