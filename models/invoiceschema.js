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

