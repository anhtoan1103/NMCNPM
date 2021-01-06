const Invoice = require('../models/invoice')
const {multipleMongooseToObject} = require('../../app/util/mongoose')

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
var hbs = require('handlebars');
hbs.registerHelper('ifEquals', function(arg1, options) {
  return (arg1 == "Sayer Archley") ? options.fn(this) : options.inverse(this);
});

module.exports = new invoiceP1Controller