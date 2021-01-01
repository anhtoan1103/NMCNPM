const User = require('../models/user');
const Test = require('../models/test');
const {multipleMongooseToObject} = require('../../app/util/mongoose')
const validator = require('validator');

class LoginController {
    index(req, res) {
        res.render('login', {message: ''});
    }

    show(req, res) {
        res.send('login detail');
    }

    async login(req, res) {
        if(!req.body.email || !validator.isEmail(req.body.email))
            return res.render('login', {message: 'Please enter a valid email address.'});
        if(!req.body.password || !req.body.password.length === 0)
            return res.render('login', {message: 'Please enter a valid password.'});

        let user = await User.find({
            email: req.body.email,
            password: req.body.password
        });

        let tests = await Test.find({});
        if(user.length === 1)
            return res.render('home', {
                user: user,
                tests: multipleMongooseToObject(tests)
            });
        else {
            return res.render('login', {message: 'Không thể tìm thấy user nào dưới thông tin này.'});
        }
    }
}

module.exports = new LoginController