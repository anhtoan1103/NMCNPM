const User = require('../models/user');
const {uuid} = require('uuidv4');
const nodemailer = require("nodemailer");
const validator = require('validator');

class PasswordController {
    get(req, res) {
        res.render('fp', {message: ''});
    }

    getResetPassword(req, res) {
        res.render('rp');
    }

    async resetPassword(req, res) {

        if(!req.body.token || req.body.token.length !== 36)
            return res.render('rp', {message: 'Token được nhận không chính xác.'});
        if(!req.body.password || !req.body.password.length === 0)
            return res.render('rp', {message: 'Vui lòng nhập mật khẩu.'});
        if(req.body.password.length < 6)
            return res.render('rp', {message: 'Mật khẩu không được ít hơn 6 kí tự.'});
        if(req.body.password !== req.body.password2)
            return res.render('rp', {message: 'Mật khẩu nhập lại không trùng với mật khẩu của bạn.'});

        await User.findOneAndUpdate({tempPassword: req.body.token}, {
            password: req.body.password
        }, {
            new: true
        });

        res.render('login', {message: 'Reset password thành công! Hãy đăng nhập bằng password mới của bạn.'});
    }

    async sendEmail(req, res) {
        if(!req.body.email || !validator.isEmail(req.body.email))
        return res.render('fp', {message: 'Vui lòng nhập email có tồn tại trong hệ thống.'});
        let tempPassword = uuid();
        await User.findOneAndUpdate({email: req.body.email}, {
            tempPassword: tempPassword
        }, {
            new: true
        });

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'XXXXXXXXXXXXXX@gmail.com',
                pass: 'XXXXXXXXXXXXXX'
            }
        });

        const mailOptions = {
            from: 'XXXXXXXXXXXXXX@gmail.com',
            to: req.body.email,
            subject: `Reset password của bạn`,
            html: `<p>Click vào link để reset password của bạn. <a href="http://localhost:3000/password/rp?token=${tempPassword}">Click here.</a></p>`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                // console.log('Email sent: ' + info.response);
                res.render('fp', {message: 'Gửi email thành công. Xin hãy check mail để lấy link reset password.'});
            }
        });
    }
}

module.exports = new PasswordController