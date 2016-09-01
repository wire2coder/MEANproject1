var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Mongoose Connect
mongoose.connect('mongodb://localhostinvoicer');
var db = mongoose.connection;

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Please use /api/client');
});

app.listen(3000);
console.log('Server started on port 3000');