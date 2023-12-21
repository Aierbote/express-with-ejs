// imports
const express = require('express');
const app = express();
const port = 3000

app.set('view engine', 'ejs');
const user = { firstName: 'Steve', lastName: 'Jobs', };

const users = [
  {
    "id": 1,
    "first_name": "Jeanette", "last_name": "Penddreth", "email": "jpenddreth0@census.gov", "phone_number": "265-81932"
  },
  {
    "id": 2,
    "first_name": "Giavani", "last_name": "Frediani",
    "email": "gfrediani1@senate.gov", "phone_number": "229-794212"
  },
  {
    "id": 3,
    "first_name": "Noell", "last_name": "Bea",
    "email": "nbea2@imageshack.us", "phone_number": "186-162255"
  },
  {
    "id": 4,
    "first_name": "Willard", "last_name": "Valek",
    "email": "wvalek3@vk.com", "phone_number": "677-618826"
  },
  {
    "id": 5,
    first_name: 'Steve', last_name: 'Jobs',
    "email": "stevejobs@apple.com", "phone_number": "675-619806"
  },
  {
    "id": 6,
    first_name: 'Gabriele', last_name: 'Di Grazia',
    "email": "gabdigrace@gmail.com", "phone_number": "0039-618826444"
  },
  {
    "id": 7,
    first_name: 'Pinco', last_name: 'Panco',
    "email": "pincopanco@wonderland.com", "phone_number": "123-123456"
  },
];


app.get('/', (req, res) => {
  res.render('index', { user: user })
});

app.get('/rubrica', (req, res) => {
  res.render('rubrica', { users: users })
});

app.listen(port, () => {
  console.log(`App listening at port ${port}`)
});