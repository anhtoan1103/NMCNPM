const express = require('express');
const router = express.Router();
const newsController = require('../public/app/controllers/NewsController')


// tuyến đường '/ phải luôn nằm ở dưới cùng '
router.get('/:slug', newsController.show);
router.get('/', newsController.index);

module.exports = router;