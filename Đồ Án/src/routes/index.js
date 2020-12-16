const NewsRouter = require('./news')
const HotelRouter = require('./hotel')
const SiteRouter = require('./site')

function route(app) {
    

    app.use('/news', NewsRouter);

    app.use('/hotel', HotelRouter);
    

    app.use('/', SiteRouter);

}

module.exports = route;