const express = require('express')
const serverless = require("serverless-http")
const app = express()
const port = 3000
const router = express.Router()
// configs
    // ejs
        app.set('view engine', 'ejs')
    // public
        app.use(express.static(__dirname +  '/public'))




router.get('/', (req, res) => {
    res.render('index')
})

router.get('/posts/ejs', (req, res) => {
    res.render('post_ejs')
})

app.use('/.netlify/functions/api', router)


module.exports.handler = serverless(app)