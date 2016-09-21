/**
 * Created by user0021 on 9/6/16.
 */

var mongoose = require('mongoose');

// Invoice Schema
var invoiceSchema = mongoose.Schema({

    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer' }
    , service: {
        type:String
        }
    , price: {
        type:String }
    , due:{
        type:String }
    , status:{
        type: String }
    , createdAt: {
        type:Date,
        default:Date.now() }

});

var Invoice = module.exports = mongoose.model('Invoice', invoiceSchema);

// Get Invoices
module.exports.getInvoices = function (callback, limit) {

    // mongoose method call
    Invoice.find(callback).limit(limit);
};

// Get single invoice
module.exports.getInvoiceById = function (id, callback) {

    var query = {_id: id};

    // mongoose method call
    Invoice.findOne(query, callback);
};

// Add an invoice
module.exports.addInvoice = function (invoice, callback) {
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

// Update Invoice
module.exports.updateInvoice = function (id, invoice, options, callback) {

    var query = {_id: id};
    var update = {
        service: invoice.service,
        price: invoice.price,
        due: invoice.due,
        status: invoice.status
    };

    // Mongoose command
    Invoice.findOneAndUpdate(query, update, options, callback);
};

// Remove Invoice
module.exports.removeInvoice = function (id, callback) {
    var query = {_id: id};

    // Mongoose command
    Invoice.remove(query, callback);
};

// Get customer invoices
module.exports.getCustomerInvoices = function (customer_id, callback, limit) {
    var query = {customer: customer_id};

    Invoice.find(query, callback);
};