const Invoice = require('../models/invoice')
const {multipleMongooseToObject} = require('../../app/util/mongoose')
const storage = require('node-sessionstorage')

class invoiceP1Controller {
    
    index(req, res, next) {
        
        Invoice.find({})
            .then(invoices => res.render('invoiceP1', {
                 invoices :multipleMongooseToObject(invoices)
                }))
            .catch(next);   
        }
    xem(req, res) {
            res.render('xem');
        }
}


module.exports = new invoiceP1Controller