//const Admin = require('../models/admin');
const User = require('../models/user')
const {multipleMongooseToObject} = require('../../app/util/mongoose')

class Admin_pageController {
    
    index(req, res) {
        res.render('admin', {message: ''});
    }
        
    
    show(req, res, next) {
        User.find({})
            .then(users => res.render('admin_page', {
                 users :multipleMongooseToObject(users)
                }))
            .catch(next);
    }
    async admin_page(req, res, next) {
        User.find({})
            .then(users => res.render('admin_page', {
                users :multipleMongooseToObject(users)
                }))
            .catch(next);
       // res.render('dashboard');
    }
    async deleteOneUser(req, res) {
        
        User.find({id: req.params.id}, (error, deletedRecord) => {
            if(!error) {
                console.log(deletedRecord);
            }
        });
        res.render('admin_page');
        
        
    }
}

module.exports = new Admin_pageController