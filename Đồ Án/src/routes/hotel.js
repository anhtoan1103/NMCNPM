const express = require('express');
const router = express.Router();
const hotelController = require('../public/app/controllers/HotelController')


// tuyến đường '/ phải luôn nằm ở dưới cùng '
router.get('/:slug', hotelController.show);


module.exports = router;