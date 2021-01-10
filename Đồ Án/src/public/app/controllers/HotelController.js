const Hotel = require('../models/hotel')
const User = require('../models/user')
const Invoice = require('../models/invoice')
const { mongooseToObject } = require('../../app/util/mongoose')
const storage = require('node-sessionstorage') 

class HotelController {
    //GET /hotel/create
    create(req, res, next) {
        res.render('hotel/create');
    }
   
    //GET /hotel/:id/edit
    edit(req, res, next) {
        Hotel.findById(req.params.id)
            .then(hotel => res.render('hotel/edit',{
                hotel: mongooseToObject(hotel)
            }))
            .catch(next)
    }

    //[PUT] /hotel/:id
    update(req, res, next) {
        Hotel.updateOne({ _id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/hotels'))
            .catch(next);
    }

    //[DELETE] /hotel/:id
    delete(req, res, next) {
        Hotel.deleteOne({ _id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //GET /hotel/detail
    detail(req, res, next) {
        Hotel.findOne({slug: req.params.slug})
            .then( hotel => 
                res.render('hotel/detail',{
                    hotel: mongooseToObject(hotel)})
            )
            .catch(next);
    }

    //POST /hotel/store
    store(req, res, next) {
        const hotel = new Hotel(req.body);
        hotel.save()
            .then(() => res.redirect('/'))
            .catch(error => {})
    }

    storeInvoice(req, res, next) {
      
        const invoice = new Invoice({
            P1:req.body.username,
            Hotel: req.body.hotel_name,
            Period: req.body.roomNums,
            Date: Date.now(),
        });
        invoice.save()
            .then(() => res.redirect('/'))
            .catch(error => {})
    }
}

module.exports = new HotelController