const Test = require('../models/test')
const {multipleMongooseToObject} = require('../../app/util/mongoose')

class SiteController {
    
    index(req, res, next) {
        Test.find({})
            .then(tests => res.render('home', {
                 tests :multipleMongooseToObject(tests)
                }))
            .catch(next);   
        //res.render('home');
        }
        
    

    search(req, res) {
        res.render('search');
    }

    dashboard(req, res) {
        res.render('dashboard');
    }
}

module.exports = new SiteController