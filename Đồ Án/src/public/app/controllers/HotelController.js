const Hotel = require('../models/test')
const { multipleMongooseToObject } = require('../../app/util/mongoose')

class HotelController {
    //GET /hotel/:slug
    show(req, res, next) {
        Hotel.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show');
            })
            .catch(next);
    }
}

module.exports = new HotelController