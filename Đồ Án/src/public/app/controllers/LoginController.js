const User = require('../models/user');
const Host = require('../models/host');
const Hotel = require('../models/hotel');
const {multipleMongooseToObject} = require('../../app/util/mongoose')
const validator = require('validator');
const storage = require('node-sessionstorage')

class LoginController {
    index(req, res) {
        res.render('login', {message: ''});
    }

    show(req, res) {
        res.send('login detail');
    }

    async login(req, res) {
        if(!req.body.email || !validator.isEmail(req.body.email))
            return res.render('login', {message: 'Vui lòng nhập chính xác email.'});
        if(!req.body.password || !req.body.password.length === 0)
            return res.render('login', {message: 'Vui lòng nhập chính xác password.'});

        let user = await User.find({
            email: req.body.email,
            password: req.body.password
        });

        let host = await Host.find({
            email: req.body.email,
            password: req.body.password
        });

        let hotels = await Hotel.find({});
        if(user.length === 1)
            return res.render('home', {
                user: user,
                hotels: multipleMongooseToObject(hotels)
            });
        else if (host.length === 1)
        return res.render('home', {
            user: host,
            hotels: multipleMongooseToObject(hotels)
        });
        else {
            return res.render('login', {message: 'Không thể tìm thấy user nào dưới thông tin này.'});
        }
    }
}

module.exports = new LoginController