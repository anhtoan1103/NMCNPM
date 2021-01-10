const express = require('express');

const router = express.Router();
const MeController = require('../public/app/controllers/MeController')


// tuyến đường '/ phải luôn nằm ở dưới cùng '
router.get('/stored/hotels', MeController.storedCourses);

module.exports = router;