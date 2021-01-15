const Admin = require('../models/admin');
//const Test = require('../models/test');
const User = require('../models/ngthue');
const {multipleMongooseToObject} = require('../../app/util/mongoose')
const validator = require('validator');

class AdminController {
    index(req, res) {
        res.render('admin', {message: ''});
    }

    show(req, res) {
        res.send('admin detail');
    }

    async admin(req, res) {
        if(!req.body.email || !validator.isEmail(req.body.email))
            return res.render('admin', {message: 'Please enter a valid email address.'});
        if(!req.body.password || !req.body.password.length === 0)
            return res.render('admin', {message: 'Please enter a valid password.'});

        let admin = await Admin.find({
            email: req.body.email,
            password: req.body.password
        });
        let ngthues = await User.find({});
        if(admin.length === 1)
        return res.render('admin_page', {
            admin: admin,
            ngthues: multipleMongooseToObject(ngthues)
        });
        else {
            return res.render('admin', {message: 'Không thể tìm thấy user nào dưới thông tin này.'});
        }
    }
}

module.exports = new AdminController