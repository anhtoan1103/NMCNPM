const express = require('express');
const router = express.Router();
const siteController = require('../public/app/controllers/SiteController')


// tuyến đường '/ phải luôn nằm ở dưới cùng '
router.get('/search', siteController.search);
router.get('/dashboard', siteController.dashboard);
router.get('/page/:slug', siteController.index);
router.get('/', siteController.index);


;
module.exports = router;