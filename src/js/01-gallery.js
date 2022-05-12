
console.log('module 9.1');

setTimeout(function timeout () {
    console.log('module 9.2');
}, 2000)


const x = 2;
const y = 3;

function sum(a, b) {
    console.log(a + b);

}
console.log('module 9.3');
setTimeout(sum, 1000, x, y,);
console.log('module 9.4');

for (var i = 0; i < 3; i++) {
    setTimeout(
        function (y) {
            console.log(y);
        }, 1000, i);
    
}

const date = new Date();

console.dir(date);
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"
console.log(date.getMonth());
console.log(date.getDate());

console.dir(date.toString());
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

console.log(moment);
//====================== Приклад з Кахуту ==============
for (let i = 3; i > 0; i--) {
    const delite = i * 1000;
    setTimeout(console.log(i), delite);
}