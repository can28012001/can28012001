
class SiteController {

    home = function (req, res) {
        res.render('home')
    }

    search = function (req, res) {
        res.render('search')
    }
}

module.exports = new SiteController