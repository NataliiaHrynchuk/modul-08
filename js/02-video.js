// =====Репета Модуль 8 Бібліотеки====
//--Перетворення об'єкту в рядок-----
const user = {
    name: 'Mango',
    age: 2
}

console.log(JSON.stringify(user));//{"name":"Mango","age":2}

// -----Перетворення рядка в джаваскрипт-об'єкт---
const saveUserData = '{"name":"Mango", "age":2}';
console.log(JSON.parse(saveUserData));//{name: 'Mango', age: 2}

//--------LocalStorage--------------
console.log(localStorage);
