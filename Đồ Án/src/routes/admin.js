const express = require('express');
const router = express.Router();
const AdminController = require('../public/app/controllers/AdminController')


// tuyến đường '/ phải luôn nằm ở dưới cùng '
router.get('/:slug', AdminController.show);
router.get('/', AdminController.index);
router.post('/', AdminController.admin);


module.exports = router;