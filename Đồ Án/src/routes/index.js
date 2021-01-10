const NewsRouter = require('./news')
const HotelRouter = require('./hotel')
const SiteRouter = require('./site')
const LoginRouter = require('./login')
const RegisterRouter = require('./register')
const PasswordRouter = require('./password')
const AdminRouter = require('./admin')
const Admin_pageRouter = require('./admin_page')
const Admin_page1Router = require('./admin_page1')
const InvoiceP1Router = require('./invoiceP1')

function route(app) {
    

    app.use('/news', NewsRouter);
    app.use('/login', LoginRouter);
    app.use('/register', RegisterRouter);
    app.use('/hotel', HotelRouter);
    app.use('/password', PasswordRouter);
    app.use('/admin', AdminRouter);
    app.use('/admin_page', Admin_pageRouter);
    app.use('/admin_page1', Admin_page1Router);
    app.use('/invoiceP1', InvoiceP1Router);
    
    app.use('/', SiteRouter);
    
    
}


module.exports = route;