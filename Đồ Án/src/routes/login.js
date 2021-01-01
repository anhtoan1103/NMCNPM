const express = require('express');
const router = express.Router();
const LoginController = require('../public/app/controllers/LoginController')


// tuyến đường '/ phải luôn nằm ở dưới cùng '
router.get('/:slug', LoginController.show);
router.get('/', LoginController.index);
router.post('/', LoginController.login);


module.exports = router;