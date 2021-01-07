const Invoice = require('../models/invoice')
const { multipleMongooseToObject } = require('../../app/util/mongoose')

class invoiceP2Controller {

    async index(req, res, next) {
        Invoice.find({})
            .then(invoices => res.render('invoiceP2', {
                invoices: multipleMongooseToObject(invoices)
            }))
            .catch(next);
    }
}

module.exports = new invoiceP2Controller