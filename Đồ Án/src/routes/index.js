const HotelRouter = require('./hotel')
const MeRouter = require('./me')
const SiteRouter = require('./site')
const LoginRouter = require('./login')
const RegisterRouter = require('./register')
const PasswordRouter = require('./password')
const AdminRouter = require('./admin')
const Admin_pageRouter = require('./admin_page')
const InvoiceP1Router = require('./invoiceP1')
const InvoiceP2Router = require('./invoiceP2')
const PostRouter = require('./postHotel')

function route(app) {
    app.use('/login', LoginRouter);
    app.use('/me', MeRouter);
    app.use('/register', RegisterRouter);
    app.use('/hotel', HotelRouter);
    app.use('/password', PasswordRouter);
    app.use('/admin', AdminRouter);
    app.use('/admin_page', Admin_pageRouter);
    app.use('/invoiceP1', InvoiceP1Router);
    app.use('/invoiceP2', InvoiceP2Router);
    app.use('/postHotel', PostRouter);

    app.use('/', SiteRouter);   
}


module.exports = route;