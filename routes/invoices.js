// 9/5

var express = require('express');
router = express.Router();

// root of /api/invoices
router.get('/', function (req, res) {
    res.json({
        "name": "ksdlfjdlsfj"
    });
});

module.exports = router;
console.log('At the end of invoices.js');