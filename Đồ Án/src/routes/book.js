const express = require('express');
const router = express.Router();
const BookController = require('../public/app/controllers/BookController')


// tuyến đường '/ phải luôn nằm ở dưới cùng '
router.get('/', BookController.create);


module.exports = router;