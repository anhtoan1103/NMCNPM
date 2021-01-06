const express = require('express');

// Load User model
const User = require('.public/app/models/user');
const { forwardAuthenticated } = require('../config/auth');
const router = require('./news');

// Login Page
router.get('/admin', forwardAuthenticated, (req, res) => res.render('admin'));


// Login
router.post('/admin', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/admin_page',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'Bạn đã đăng xuất');
  res.redirect('/users/login');
});

module.exports = router;
