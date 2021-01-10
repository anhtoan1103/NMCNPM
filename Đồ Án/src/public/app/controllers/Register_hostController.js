const Hotel = require('../models/hotel');
const Host = require('../models/host');
const {multipleMongooseToObject} = require('../../app/util/mongoose');
const validator = require('validator');

class Register_hostController {
    index(req, res) {
        res.render('register_host', {message: ''});
    }

    show(req, res) {
        res.send('register_host detail');
    }

    async register(req, res) {

        if(!req.body.email || !validator.isEmail(req.body.email))
            return res.render('register_host', {message: 'Vui lòng nhập chính xác email.'});
        if(!req.body.password || !req.body.password.length === 0)
            return res.render('register_host', {message: 'Vui lòng nhập password.'});
        if(!req.body.name || !req.body.name.length === 0)
            return res.render('register_host', {message: 'Vui lòng nhập tên.'});
        if(req.body.password.length < 6)
            return res.render('register_host', {message: 'Mật khẩu ít hơn 6 kí tự, xin vui lòng đặt mật khẩu dài hơn.'});
        if(req.body.password !== req.body.password2)
            return res.render('register_host', {message: 'Mật khẩu nhập lại không trùng khớp với mật khẩu của bạn.'});

        let alreadyRegistered = await User.findOne({email: req.body.email});
        if(alreadyRegistered)
            return res.render('register_host', {message: 'Đã có người sử dụng email này.'});

        let host = await new Host({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }).save();

        let hotels = await Hotel.find({});
        if(host)
            res.render('home', {
                user: host,
                hotels: multipleMongooseToObject(hotels)
            });
        else {
            res.render('register_host', {message: 'Không thể đăng kí, vui lòng thử lại sau.'});
        }
    }
}

module.exports = new Register_hostController