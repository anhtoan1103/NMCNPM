const Hotel = require('../models/hotel');
const User = require('../models/user.js');
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
            return res.render('register', {message: 'Vui lòng nhập chính xác email.'});
        if(!req.body.password || !req.body.password.length === 0)
            return res.render('register', {message: 'Vui lòng nhập password.'});
        if(!req.body.name || !req.body.name.length === 0)
            return res.render('register', {message: 'Vui lòng nhập tên.'});
        if(req.body.password.length < 6)
            return res.render('register', {message: 'Mật khẩu ít hơn 6 kí tự, xin vui lòng đặt mật khẩu dài hơn.'});
        if(req.body.password !== req.body.password2)
            return res.render('register', {message: 'Mật khẩu nhập lại không trùng khớp với mật khẩu của bạn.'});

        let alreadyRegistered = await User.findOne({email: req.body.email});
        if(alreadyRegistered)
            return res.render('register', {message: 'Đã có người sử dụng email này.'});

        let user = await new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }).save();

        let hotels = await Hotel.find({});
        if(user)
            res.render('home', {
                user: user,
                hotels: multipleMongooseToObject(hotels)
            });
        else {
            res.render('register', {message: 'Không thể đăng kí, vui lòng thử lại sau.'});
        }
    }
}

module.exports = new RegisterController