const test = require('../models/test')


class SiteController {
    index(req, res) {
        test.find({}, function (err, tests) {
            if(!err) res.json(tests);
            else
            res.status(400).json({error: 'message'});
        });
        }
        //res.render('home');
    

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController