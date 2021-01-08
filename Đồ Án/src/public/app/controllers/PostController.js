const Test = require('../models/test.js');
const {multipleMongooseToObject} = require('../../app/util/mongoose')
const validator = require('validator');

class PostController {
    index(req, res) {
        res.render('postH', {message: ''});
    }
    show(req, res) {
        res.send('post detail');
    }
    postH(req, res) {
        //  if(!req.body.name || validator.contains(req.body.name,'@'))
        //      return res.render('postH', {message: 'Vui lòng nhập chính xác tên khách sạn.'});
        //   if(req.body.name.length < 1)
        //      return res.render('postH', {message: 'Tên khách sạn không thể trống'});
        //  if(!req.body.description || validator.contains(req.body.description,'@'))
        //      return res.render('postH', {message: 'Vui lòng nhập mô tả hợp lệ.'});
        //  if(!req.body.image || !validator.isURL(req.body.image))
        //      return res.render('postH', {message: 'Vui lòng nhập đường dẫn hợp lệ.'});
        //  let alreadyPosted = await Test.findOne({name: req.body.name});
        //  if(alreadyPosted)
        //      return res.render('postH', {message: 'Đã có người đăng ký tên khách sạn này.'});
        let test = new Test(req.body);
        test.save()
        
        if(test)
        {Test.find({})
        .then(tests => res.render('home', {
            tests: multipleMongooseToObject(tests),
        }))}
        else {
             res.render('postH');
        }
    }
}


module.exports = new PostController