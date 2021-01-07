const Test = require('../models/test')
const User = require('../models/user')
const {multipleMongooseToObject} = require('../../app/util/mongoose')
const storage = require('node-sessionstorage')

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

    async user_info(req, res, next) {
        User.find({})
            .then(users => res.render('user_info', {
                 users :multipleMongooseToObject(users)
                }))
            .catch(next);
       // res.render('dashboard');
    }
    dashboard(req, res) {
        res.render('dashboard');
    }
}

module.exports = new SiteController