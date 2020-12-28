const NewsRouter = require('./news')
const HotelRouter = require('./hotel')
const SiteRouter = require('./site')
const LoginRouter = require('./login')
const RegisterRouter = require('./register')
const PasswordRouter = require('./password')

function route(app) {
    

    app.use('/news', NewsRouter);
    app.use('/login', LoginRouter);
    app.use('/register', RegisterRouter);
    app.use('/hotel', HotelRouter);
    app.use('/password', PasswordRouter);

    app.use('/', SiteRouter);

}

module.exports = route;