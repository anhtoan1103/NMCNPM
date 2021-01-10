const User = require('../models/user')
const Hotel = require('../models/hotel')
const storage = require('node-sessionstorage')
const { multipleMongooseToObject } = require('../../app/util/mongoose')

class SiteController {

    index(req, res, next) {
        Promise.all([Hotel.find({}),Hotel.countDocuments()])
            .then(function([hotels,numDocs]) {
                storage.setItem('numDocs', numDocs);
                return res.render('home', {
                
                    numDocs,
                    hotels: multipleMongooseToObject(hotels)
                })
            }
            )
        storage.setItem('slug', req.params.slug);
          
    }
    search(req, res) {
        res.render('search');
    }

    async dashboard(req, res, next) {
        User.find({})
            .then(users => res.render('dashboard', {
                 users :multipleMongooseToObject(users)
                }))
            .catch(next);
            Host.find({})
            .then(hosts => res.render('dashboard', {
                 users :multipleMongooseToObject(hosts)
                }))
            .catch(next);
    }
}

module.exports = new SiteController