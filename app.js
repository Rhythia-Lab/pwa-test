const express = require('express');
const app = express();

app.use(express.static('public'));

// ルートURLで表示されるように変更してください
app.get('/', (req, res) => {
  res.render('top.ejs');
});

app.get('/index', (req, res) => {
  res.render('index.ejs');
});

app.listen(3000);
