// 9/5

var express = require('express');
router = express.Router();

// root of /api/customers
router.get('/', function (req, res) {
    res.send('kljsdlfjk');
});


module.exports = router;
console.log('At the end of customers.js');

