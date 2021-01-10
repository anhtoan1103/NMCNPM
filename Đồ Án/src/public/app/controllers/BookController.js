const User = require('../models/user');
const Hotel = require('../models/hotel');
const Invoice = require('../models/invoice');
const {multipleMongooseToObject} = require('../util/mongoose')

class BookController {
    create(req, res, next) {
        res.render('hotel/detail');
    }

    store(req, res, next) {
        const invoice = new Invoice(req.body);
        hotel.save()
            .then(() => res.redirect('/'))
            .catch(error => {})
    }

    // thay đổi số lượng phòng còn 
    // ghi thêm vào hóa đơn: số phòng, người thuê, người cho thuê

    
}

module.exports = new BookController