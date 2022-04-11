const express = require('express')
const app = express()
const port = 3000

// configs
    // ejs
        app.set('view engine', 'ejs')
    // public
        app.use(express.static(__dirname +  '/public'))




app.get('/', (req, res) => {
    res.render('home')
})

app.get('/posts', (req, res) => {
    //res.render('post_ejs')
    res.send('Não há nenhum artigo disponivel...')
})




app.listen(process.env.PORT || 3000)