const express = require('express');
const router = express.Router();
const Admin_page1Controller = require('../public/app/controllers/Admin_page1Controller')


// tuyến đường '/ phải luôn nằm ở dưới cùng '

router.get('/', Admin_page1Controller.index);
router.get('/', Admin_page1Controller.admin_page);
router.get('/delete/:id', Admin_page1Controller.deleteOneUser);
router.get('/:id/edit', Admin_page1Controller.edit);
router.put('/:id', Admin_page1Controller.update);
router.get('/:slug', Admin_page1Controller.show);




module.exports = router;