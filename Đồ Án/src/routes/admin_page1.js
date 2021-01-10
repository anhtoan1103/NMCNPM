const express = require('express');
const router = express.Router();
const Admin_page1Controller = require('../public/app/controllers/Admin_page1Controller')


// tuyến đường '/ phải luôn nằm ở dưới cùng '

router.get('/:slug', Admin_page1Controller.show);
router.get('/', Admin_page1Controller.index);
router.get('/', Admin_page1Controller.admin_page);
router.get('/delete/:id', Admin_page1Controller.deleteOneUser);




module.exports = router;