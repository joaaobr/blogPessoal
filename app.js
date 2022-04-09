const express = require('express')
const app = express()
const port = process.env.port || 3000

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


app.listen(port)