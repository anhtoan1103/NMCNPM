const express = require('express');
const router = express.Router();
const invoiceP2Controller = require('../public/app/controllers/invoiceP2Controller');



// tuyến đường '/ phải luôn nằm ở dưới cùng '
router.get('/', invoiceP2Controller.index);

module.exports = router;