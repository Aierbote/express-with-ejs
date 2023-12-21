// imports
const express = require('express');
const app = express();
const port = 3000

app.set('view engine', 'ejs');
const user = { firstName: 'Steve', lastName: 'Jobs', };

app.get('/', (req, res) => {
  res.render('index', { user: user })
});

app.listen(port, () => {
  console.log(`App listening at port ${port}`)
});