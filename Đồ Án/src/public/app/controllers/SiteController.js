const User = require('../models/user')
const Test = require('../models/test')
const storage = require('node-sessionstorage')
const { multipleMongooseToObject } = require('../../app/util/mongoose')

class SiteController {

    index(req, res, next) {
        storage.setItem('slug', req.params.slug);
        Test.find({})
            .then(tests => res.render('home', {
                tests: multipleMongooseToObject(tests),
            }))
            .catch(next);
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
       // res.render('dashboard');
    }
}

module.exports = new SiteController