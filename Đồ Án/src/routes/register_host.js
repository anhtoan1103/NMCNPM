const express = require('express');
const router = express.Router();
const Register_hostController = require('../public/app/controllers/Register_hostController')


// tuyến đường '/ phải luôn nằm ở dưới cùng '
router.get('/:slug', Register_hostController.show);
router.get('/', Register_hostController.index);
router.post('/', Register_hostController.register);



module.exports = router;