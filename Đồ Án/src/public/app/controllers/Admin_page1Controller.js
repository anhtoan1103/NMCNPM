const Lease = require('../models/host')
const {multipleMongooseToObject , mongooseToObject} = require('../../app/util/mongoose');


class Admin_page1Controller {
    
    index(req, res, next) {
        
            Lease.find({})
            .then(hosts => res.render('admin_page1', {
                hosts :multipleMongooseToObject(hosts)
                }))
            .catch(next);
    }
        
    
    show(req, res, next) {
        
            Lease.find({})
            .then(hosts => res.render('admin_page1', {
                hosts :multipleMongooseToObject(hosts)
                }))
            .catch(next);
    }
    async admin_page(req, res, next) {
       
        Lease.find({})
        .then(hosts => res.render('admin_page1', {
            hosts :multipleMongooseToObject(hosts)
            }))
        .catch(next);
       // res.render('dashboard');
    }
    async deleteOneUser(req, res) {
        try {
            
            const lease = await Lease.findByIdAndDelete(req.params.id, req.body);
            
            if (!lease) 
                   res.status(404).send("No item found");
            else {
                res.redirect('/admin_page1');
            }
        } catch(error) {
            res.status(500).send(error);
        }
    }

    update(req, res, next) {
        Lease.updateOne({_id:req.params.id}, req.body)
            .then(() => res.redirect('/admin_page1'))
            .catch(next)
    }

    edit(req, res, next) {
        Lease.findById(req.params.id)
            .then(host =>res.render("admin_page1_edit",{
                host:mongooseToObject(host)
            }))
            
            .catch(next);
        }
}


module.exports = new Admin_page1Controller