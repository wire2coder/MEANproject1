// 9/5
// customers (route)

var express = require('express');
var router = express.Router();

// no var in front because Customer was exported from customerschema.js
Customer = require('../models/customerschema.js');
Invoice = require('../models/invoiceschema.js');

// localhost:3000/api/customers
// Get all customers, GET
router.get('/', function (req, res) {
    Customer.getCustomers(function (err, customers) {
        if (err) {
            res.send(err);
        }
        res.json(customers);
    });
});

// Get a single customer, GET
router.get('/:id', function (req, res) {
    var reqid = req.params.id;

    Customer.getCustomer(reqid, function (err, customer) {
        if (err) {
            res.send(err);
        }
        res.json(customer);
    });
});

// Add a customer, POST
router.post('/', function (req, res) {
    var customer = req.body;

    // run addCustomer in customerschema.js
    Customer.addCustomer(customer, function (err, customer) {
        if (err) {
            res.send(err);
        }
        res.json(customer);
    });
});

// Update a customer, PUT
router.put('/:id', function (req, res) {
    var reqid = req.params.id;

    Customer.updateCustomer(reqid, req.body, {}, function (err, customer) {
        if (err) {
            res.send(err);
        }

        res.json(customer);
    });
});

// Delete a customer, DELETE
router.delete('/:id', function (req, res) {
    var reqid = req.params.id;

    Customer.removeCustomer(reqid, function (err, customer) {
        if (err) {
            res.send(err);
        }
        res.json(customer);
    });
});

module.exports = router;
console.log('At the end of customers.js');

