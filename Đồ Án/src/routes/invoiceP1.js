const express = require('express');
const router = express.Router();
const invoiceP1Controller = require('../public/app/controllers/invoiceP1Controller');



// tuyến đường '/ phải luôn nằm ở dưới cùng '
router.get('/xem', invoiceP1Controller.xem);
router.get('/', invoiceP1Controller.index);

module.exports = router;