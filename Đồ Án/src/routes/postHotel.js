const express = require('express');
const router = express.Router();
const PostController = require('../public/app/controllers/PostController')

router.get('/:slug', PostController.show);
router.get('/', PostController.index);
router.post('/', PostController.postHotel);

module.exports = router;