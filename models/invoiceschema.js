/**
 * Created by user0021 on 9/6/16.
 */

var mongoose = require('mongoose');

// Invoice Schema
var invoiceSchema = mongoose.Schema({

    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' }
    , service: { type:String, required:true }
    , price: { type:String }
    , due:{ type:String }
    , status:{ type: String }
    , createdAt: { type:Date, default:Date.now() }

});

var Invoice = module.exports = mongoose.model('Invoice', invoiceSchema);

// Get Invoices
module.exports.getInvoices = function (callback, limit) {

    // mongoose method call
    Invoice.find(callback).limit(limit).sort(['createdAt', 'ascending']);
};

// Get single invoice
module.exports.getInvoice = function (callback, limit) {
    // mongoose method call
    Invoice.findOne(query, callback);
};

// Add an invoice
modle.exports.addInvoice = function (invoice, callback) {
    var add = {
        customer: invoice.customer_id,
        service: invoice.service,
        price: invoice.price,
        due: invoice.due,
        status: invoice.status
    };

    // mongoose method call
    Invoice.create(add, callback);
};