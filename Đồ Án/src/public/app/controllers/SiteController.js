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

    dashboard(req, res) {
        res.render('dashboard');
    }
}

module.exports = new SiteController