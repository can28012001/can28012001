
class NewsController {

    index = function (req, res) {
        res.render('news')
    }

    show = function (req, res) {
        res.send('hello world')
    }
}

module.exports = new NewsController