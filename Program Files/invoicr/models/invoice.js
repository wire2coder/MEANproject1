var mongoose = require('mongoose');

// Invoice Schema
var invoiceSchema = mongoose.Schema({
	customer:{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Customer'
	},
	service:{
		type: String,
		required: true
	},
	price:{
		type: String
	},
	due:{
		type: String
	},
	status:{
		type: String
	},
	createdAt:{
		type: Date,
		default: Date.now
	},
});

var Invoice = module.exports = mongoose.model('Invoice', invoiceSchema);

// Get Invoices
module.exports.getInvoices= function(callback, limit){
	Invoice.find(callback).limit(limit).sort([['createdAt', 'descending']]);
}

// Get Invoice
module.exports.getInvoiceById = function(id, callback){
	Invoice.findById(id, callback);
}

// Add Invoice
module.exports.addInvoice = function(invoice, callback){
	var add = {
		customer: invoice.customer_id,
		service: invoice.service,
		price: invoice.price,
		due: invoice.due,
		status: invoice.status
	}
	Invoice.create(add, callback);
}

// Update Invoice
module.exports.updateInvoice = function(id, invoice, options, callback){
	var query = {_id: id};
	var update = {
		service: invoice.service,
		price: invoice.price,
		due: invoice.due,
		status: invoice.status
	}
	Invoice.findOneAndUpdate(query, update, options, callback);
}

// Remove Invoice
module.exports.removeInvoice = function(id, callback){
	var query = {_id: id};
	Invoice.remove(query, callback);
}