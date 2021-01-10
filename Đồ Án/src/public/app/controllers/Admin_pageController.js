const User = require('../models/user')
const {multipleMongooseToObject, mongooseToObject} = require('../../app/util/mongoose')

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

    update(req, res, next) {
        User.updateOne({_id:req.params.id}, req.body)
            .then(() => res.redirect('/admin_page'))
            .catch(next)
    }

    edit(req, res, next) {
        User.findById(req.params.id)
            .then(user =>res.render("admin_page_edit",{
                user:mongooseToObject(user)
            }))
            
            .catch(next);
        }
        
   
}


module.exports = new Admin_pageController