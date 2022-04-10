const express = require('express')
const app = express()
const port = 3000

// configs
    // ejs
        app.set('view engine', 'ejs')
    // public
        app.use(express.static(__dirname +  '/public'))




app.get('/', (req, res) => {
    res.render('index')
})

app.get('/posts/ejs', (req, res) => {
    res.render('post_ejs')
})




app.listen(process.env.PORT || 3000)