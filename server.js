const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(__dirname + '/dist/asiloweb-app/'))

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'https://asiloweb-api.herokuapp.com')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)

    next()
})

app.get('*', (req, res, next) => {
    if (req.headers['x-forwarded-proto'] != 'https') {
        res.redirect('https://' + req.headers.host + req.url)
    } else {
        res.sendFile(path.join(__dirname + '/dist/asiloweb-app/index.html'))
    }
})

app.listen(process.env.PORT || 8080)