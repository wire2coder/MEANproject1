// 9/5

//var invoicemodel = require('../models/invoicemodel');

var express = require('express');
router = express.Router();

Customer = require('../models/customerschema.js');
Invoice = require('../models/invoiceschema.js');

// localhost:3000/api/invoices
// Get Invoices
router.get('/', function (req, res) {
    Invoice.getInvoices(function (err, invoices) {
        if (err) {
            res.send(err);
        }

        console.log(invoices);
        res.json(invoices);
    });
});

// localhost:3000/api/invoices/id
// Get a single invoice
router.get('/:id', function (req, res) {
    Invoice.getInvoiceById(req.params.id, function(err, invoice) {
        if(err) {
            res.send(err)
        }

        res.json(invoice);
    })
});

// localhost:3000/api/invoices
// Add an invoice
router.post('/', function (req, res) {
    var invoice = req.body;
    Invoice.addInvoice(invoice, function (err, invoice) {
        if (err) {
            res.send(err);
        }
        res.json(invoice);
    });
});

module.exports = router;
console.log('At the end of invoices.js');