const Hotel = require('../models/hotel')
const { multipleMongooseToObject } = require('../../app/util/mongoose')

class MeController {
    //GET /me/stored/courses
    storedCourses(req, res, next) {
        Hotel.find({})
            .then(hotels =>res.render('me/stored-hotels',{
                hotels: multipleMongooseToObject(hotels)
                }))
            .catch(next);
    }
}

module.exports = new MeController