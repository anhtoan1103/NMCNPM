const express = require('express');
const router = express.Router();
const Admin_pageController = require('../public/app/controllers/Admin_pageController')


// tuyến đường '/ phải luôn nằm ở dưới cùng '

router.get('/:slug', Admin_pageController.show);
router.get('/', Admin_pageController.index);
router.get('/', Admin_pageController.admin_page);
router.get('/delete/:id', Admin_pageController.deleteOneUser);




module.exports = router;