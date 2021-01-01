const express = require('express');
const router = express.Router();
const PasswordController = require('../public/app/controllers/PasswordController')

router.get('/fp', PasswordController.get);
router.post('/fp', PasswordController.sendEmail);
router.get('/rp', PasswordController.getResetPassword);
router.post('/rp', PasswordController.resetPassword);


module.exports = router;