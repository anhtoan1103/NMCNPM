const Hotel = require('../models/hotel');
const {multipleMongooseToObject} = require('../../app/util/mongoose')
const validator = require('validator');

class PostController {
    index(req, res) {
        res.render('postHotel', {message: ''});
    }
    show(req, res) {

        res.send('post detail');
    }
    postHotel(req, res) {
        let Hotel = new Hotel(req.body);
        Hotel.save()
        
        if(Hotel)
        {Hotel.find({})
        .then(Hotels => res.render('home', {
            hotels: multipleMongooseToObject(hotels),
        }))}
        else {
             res.render('postHotel');
        }
    }
}


module.exports = new PostController