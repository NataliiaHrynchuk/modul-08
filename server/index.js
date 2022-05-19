const express = require('express');
const app = express();//create server instance
const port = 3000;

let users = [
    { name: 'Bobby', age: 15 },
    { name: 'Peter', age: 20 },
    { name: 'John', age: 25 },
    
  ];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('about tro-lo-lo');
  });
  app.get('/users', (req, res) => {
    res.send(users);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

//---в терміналі потрібно набрати node server/index.js, і нам сформується localhost:3000.
//--набираємо цю адресу в браузері, і відкриється сторінка з написом Hello World!
//--якщо через / написати about, то перейдемо на сторінку з написом about tro-lo-lo
//внесли зміни в код, знову потрібно запустити node server/index.js
//--якщо ж через / написати users, то перейдемо на сторінку з написом about tro-lo-lo