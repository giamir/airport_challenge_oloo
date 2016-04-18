var path = require('path');
var express = require('express');

var app = express();

app.set('port', (process.env.PORT || 8080));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.render('index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
