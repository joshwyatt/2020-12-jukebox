var path = require('path');
var express = require('express');
var app = express();

app.use(express.static(path.join(__dirname, 'client')));
app.listen(3000);
console.log('listening on 3000');
