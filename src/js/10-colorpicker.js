import colorCardTpl from '../templates/color-card.hbs';
import colorCardsTpl from '../templates/color-cards.hbs'
import colors from './colors.json';

console.log(colorCardsTpl(colors));


const palettContainer = document.querySelector('.js-palette');
const cardsMarkup = createColorCardsMarkup(colors);
palettContainer.insertAdjacentHTML('beforeend', cardsMarkup);

palettContainer.addEventListener('click', onPalettecontainerClick);

function createColorCardsMarkup (colors) {
  // -- map-аєм кожен об'єкт масиву:
//  return colors.map(color => colorCardTpl(color)).join('');//join, щоб сформувати не масив, а строку
// return colors.map(colorCardTpl).join('');//коротший і правильніший варіант, ніж вище

//---або використаємо одразу колекцію карток з color-cards.hbs
return colorCardsTpl(colors);
}

function onPalettecontainerClick(evt) {
// console.log(evt.target);//щоб відслідкувати, де клікнули
const isColorSwatchEl = evt.target.classList.contains('color-swatch');//Елемент з класом color-swatch 

if(!isColorSwatchEl) {
  return;
}
// const swatchEl = evt.target;//клікнутий елемент
// console.log(swatchEl);//якщо клікнули не по елементу з класом color-swatch, то виходимо, а якщо навпаки, виводим поточний елемент в консоль
// console.log(swatchEl.dataset.hex);//Виводить значення дата-атрибуту hex клікнутого елемента

// swatchEl.classList.add('is-active');//клікнутому елементу додаємо клас is-active, а якщо нам потрібно на батьківський елемент, то шукаємо через parentNode 
// const parentColorCard = swatchEl.parentNode;
// console.log(parentColorCard);//Виводить батьківський елемент клікнутої картки

const swatchEl = evt.target;
const parentColorCard = swatchEl.closest('.color-card');//якщо багато рівнів вкладеності, а нам потрібно знайти якогось предка через скількись рівнів вкладеності, шукаємо його за класом 
// console.log(parentColorCard);//Виводим в консоль предка з класом color-card
removeActiveCardClas();
addActiveCardClass(parentColorCard);// Викликаємо ф-цію, яка додасть клас is-active на предка клікнутої картки з класом color-card
// document.body.style.backgroundColor = swatchEl.dataset.hex;//має зафарбовувати лише body в поточний колір, але в мене чомусь зафарбовує все

setBodyBgColor(swatchEl.dataset.hex);//Викликаю ф-цію setBodyBgColor зі значення дата-атрибуту hex на клікнутому елементі
}
function setBodyBgColor(color) {
  document.body.style.backgroundColor = color;
 }// ф-ція, яка передає бекграунд колор на боді, але в мене надає на всіх

function removeActiveCardClas () {
  const currentActivCard = document.querySelector('.color-card.is-active');//Шукаємо елемент з класом color-card, в якого є ще клас is-active 
  if(currentActivCard) {
    currentActivCard.classList.remove('is-active');
  }//якщо є карточка з класом color-card, в якого є ще клас is-active, то зняти клас is-active
}

function addActiveCardClass (card) {
  card.classList.add('is-active');// на вказану картку додати клас is-active
}

//==========Шаблонізатор==========
//---придумуєш шаблон
// `<div>{{ name }}</div>`

//---або такий
// `<div><% name %></div>`

//---або такий
//  `<div>
//  <p>{{ email }}</p>
//  <p>{{ name }}</p>
//  </div>`
// і кидаєш його в шаблонізатор:

// const template = SuperTEmplatingEngine.compile(`<div><p>{{ email }}</p><p>{{ name }}</p></div>`);
// template({name: 'Mango', email: 'mango@dev'}) //'<div><p>mango@dev</p><p>Mango</p></div>'

// function template(data) {
//   return `<div><p>${data.email}</p><p>${data.name}</p></div>`
// }


//---------Є багато бібліотек шаблонізаторів.---------
//--------Розглянемо Handlebars-----------
//------підключається у html-файл----

// <!-- Include Handlebars from a CDN -->
// <script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"></script>
// <script>
//   // compile the template
//   var template = Handlebars.compile("Handlebars <b>{{doesWhat}}</b>");
//   // execute the compiled template and print the output to the console
//   console.log(template({ doesWhat: "rocks!" }));
// </script> 

//---але ми завантажили за допомогою node:
//   npm install --save-dev parcel-plugin-handlebars-precompile
//  в папці src створили файл color-card.hbs, в який вставили 
// шаблон і сюди на початку файлу імпортували його. Створилась ф-ція colorCardTpl
// ---в папці js створили файл colors.js, в який винесли масив кольорів, 
//  а сюди їх імпортували
//--тепер змінили ф-цію createColorCardsMarkup
