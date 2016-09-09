var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var customers = require('./routes/customers.js');
var invoices = require('./routes/invoices.js');

// Mongoose Connect
mongoose.connect('mongodb://localhost/invoicer');
var db = mongoose.connection;

// using index.html in client folder
app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());

app.use('/api/customers', customers); // customers.js
app.use('/api/invoices', invoices); // invoices.js

app.get('/', function (req, res) {
    res.send('Please use /api/client or /api/invoices');
});



app.listen(3000);
console.log('Server started on port 3000');