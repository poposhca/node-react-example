/*

// Version larga de Node, la forma clasica del servidor pero que ya da flojera

import http from 'http'

const server = http.createServer()

server.listen(8080)

server.on('request',(req,res) => {
    res.write('hello http')
})

*/

import express from 'express'
import router from './api'
import config from './config'
import fs from 'fs'
import data from './src/testData'

const app = express()

app.set('view engine', 'ejs')

//Para mandar objetos estaticos
app.use('/api', router)
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', {
        content : '<em>Hello from node</em>'
    })
})

app.get('/preload', function (req, res){
    res.render('index', {
        content : '<em>Hello from node</em>'
    })
})

app.get('/about', (req, res) => {
    fs.readFile('./public/about.html', (err, data) => {
        res.send(data.toString())
    })
})

app.listen(config.port, () => {
    console.info('server up & listening')
})