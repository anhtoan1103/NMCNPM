const express = require('express');
const router = express.Router();
const Admin_pageController = require('../public/app/controllers/Admin_pageController')


// tuyến đường '/ phải luôn nằm ở dưới cùng '
router.get('/:slug', Admin_pageController.show);
router.get('/', Admin_pageController.index);
router.post('/admin_page', Admin_pageController.admin_page);
router.get('/admin_page', Admin_pageController.deleteOneUser);



module.exports = router;