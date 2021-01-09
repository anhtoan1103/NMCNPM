//const Admin = require('../models/admin');
const User = require('../models/user')
const {multipleMongooseToObject} = require('../../app/util/mongoose')

class Admin_pageController {
    
    index(req, res, next) {
        User.find({})
            .then(users => res.render('admin_page', {
                 users :multipleMongooseToObject(users)
                }))
            .catch(next);
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
        try {
            const user = await User.findByIdAndDelete(req.params.id, req.body);
            if (!user) res.status(404).send("No item found");
            else {
                res.redirect('/admin_page');
            }
        } catch(error) {
            res.status(500).send(error);
        }
    }
   
}


module.exports = new Admin_pageController