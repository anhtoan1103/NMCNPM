const express = require('express');
const router = express.Router();
const RegisterController = require('../public/app/controllers/RegisterController')


// tuyến đường '/ phải luôn nằm ở dưới cùng '
router.get('/:slug', RegisterController.show);
router.get('/', RegisterController.index);
router.post('/', RegisterController.register);



module.exports = router;