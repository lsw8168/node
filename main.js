var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'html')));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'html', 'main.html'));
});
app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, 'html', 'about.html'));
});
app.listen(8080, function () {
  console.log('Express App on port 8080!');
});
