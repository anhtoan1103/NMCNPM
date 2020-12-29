const Test = require('../models/test');
const User = require('../models/user');
const {multipleMongooseToObject} = require('../../app/util/mongoose');
const validator = require('validator');

class RegisterController {
    index(req, res) {
        res.render('register', {message: ''});
    }

    show(req, res) {
        res.send('register detail');
    }

    async register(req, res) {

        if(!req.body.email || !validator.isEmail(req.body.email))
            return res.render('register', {message: 'Please enter a valid email address.'});
        if(!req.body.password || !req.body.password.length === 0)
            return res.render('register', {message: 'Please enter a valid password.'});
        if(!req.body.name || !req.body.name.length === 0)
            return res.render('register', {message: 'Please enter a valid name.'});
        if(req.body.password !== req.body.password2)
            return res.render('register', {message: 'Password and Confirm Password must match.'});

        let alreadyRegistered = await User.findOne({email: req.body.email});
        if(alreadyRegistered)
            return res.render('register', {message: 'User already registered with this email.'});

        let user = await new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }).save();

        let tests = await Test.find({});
        if(user)
            res.render('home', {
                user: user,
                tests: multipleMongooseToObject(tests)
            });
        else {
            res.render('register', {message: 'Không thể đăng kí, vui lòng thử lại sau.'});
        }
    }
}

module.exports = new RegisterController