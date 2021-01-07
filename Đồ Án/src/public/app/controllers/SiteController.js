const Test = require('../models/test')
const User = require('../models/user')
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

    async dashboard(req, res, next) {
        User.find({})
            .then(users => res.render('user_info', {
                 users :multipleMongooseToObject(users)
                }))
            .catch(next);
       // res.render('dashboard');
    }
}

module.exports = new SiteController