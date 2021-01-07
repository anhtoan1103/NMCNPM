const Invoice = require('../models/invoice')

const { multipleMongooseToObject } = require('../../app/util/mongoose')

class invoiceP1Controller {

    async index(req, res, next) {
=======
const {multipleMongooseToObject} = require('../../app/util/mongoose')
const storage = require('node-sessionstorage')

class invoiceP1Controller {
    
    index(req, res, next) {
        

        Invoice.find({})
            .then(invoices => res.render('invoiceP1', {
                invoices: multipleMongooseToObject(invoices)
            }))
            .catch(next);
    }
}


module.exports = new invoiceP1Controller