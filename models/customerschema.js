/**
 * Created by user0021 on 9/6/16.
 */

var mongoose = require('mongoose');
var customerSchema = mongoose.Schema({
    "first_name": {type: String, required: true}
    , "last_name": {type: String, required: true}
    , "company": {type: String}
    , "logo_url": {type: String}
    , "email": {type: String, required: true}
    , "phone": {type: String}
    , "address": {street: String, city: String, state: String, zip: String}
    , "createdAt": {type: Date, default: Date.now()}
});

var Customer = module.exports = mongoose.model('customer', customerSchema);

// Make server CRUD API below

// Get customers
module.exports.getCustomers = function(callback, limit) {
    Customer.find(callback).limit(limit);
};

// Get customer
module.exports.getCustomer = function (id, callback) {
    Customer.findById(id, callback);
};

// Add customer
module.exports.addCustomer = function (customer, callback) {

    // create data object
    var add = {
        first_name: customer.first_name,
        last_name: customer.last_name,
        company: customer.company,
        logo_url: customer.logo_url,
        email: customer.email,
        phone: customer.phone,
        address: {
            street: customer.address.street,
            city: customer.address.city,
            state: customer.address.state,
            zip: customer.address.zip
        }
    };

    // run mongoose create command
    Customer.create(add, callback);
};