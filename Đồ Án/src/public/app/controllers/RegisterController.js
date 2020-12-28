const Test = require('../models/test');
const User = require('../models/user');
const {multipleMongooseToObject} = require('../../app/util/mongoose');

class RegisterController {
    index(req, res) {
        res.render('register', {message: ''});
    }

    show(req, res) {
        res.send('register detail');
    }

    async register(req, res) {
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