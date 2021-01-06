
class NewsController {
    index(req, res) {
        res.render('test');
    }

    show(req, res) {
        res.send('new detail');
    }
}

module.exports = new NewsController