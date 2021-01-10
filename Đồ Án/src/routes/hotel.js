const express = require('express');
const router = express.Router();

const hotelController = require('../public/app/controllers/HotelController')


// tuyến đường '/ phải luôn nằm ở dưới cùng '
router.get('/create', hotelController.create);
router.get('/:slug', hotelController.detail);
router.get('/:id/edit', hotelController.edit);
router.put('/:id', hotelController.update);
router.delete('/:id', hotelController.delete);
router.post('/store', hotelController.store);
router.post('/storeInvoice', hotelController.storeInvoice);

module.exports = router;