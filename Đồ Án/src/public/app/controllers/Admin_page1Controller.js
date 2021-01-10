//const Admin = require('../models/admin');

const Lease = require('../models/invoice')
const {multipleMongooseToObject} = require('../../app/util/mongoose');


class Admin_page1Controller {
    
    index(req, res, next) {
        
            Lease.find({})
            .then(invoices => res.render('admin_page1', {
                invoices :multipleMongooseToObject(invoices)
                }))
            .catch(next);
    }
        
    
    show(req, res, next) {
        
            Lease.find({})
            .then(invoices => res.render('admin_page1', {
                invoices :multipleMongooseToObject(invoices)
                }))
            .catch(next);
    }
    async admin_page(req, res, next) {
       
        Lease.find({})
        .then(invoices => res.render('admin_page1', {
            invoices :multipleMongooseToObject(invoices)
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
   
}


module.exports = new Admin_page1Controller