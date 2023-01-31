const newsRouter = require('./news')
const siteRouter = require('./site')

function route(app) {

    // begin home, search
    // app.get('/', (req, res) => {
    //     res.render('home')
    // })
    app.use('/',siteRouter)
    // end home, search
    
    // Begin News
    // app.get('/news', (req, res) => {
    //     res.render('news')
    // })
    app.use('/news', newsRouter)
    // End News

    
    
}

module.exports= route