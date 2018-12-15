const bodyParser = require('body-parser')
const path = require('path')
const express = require('express')
const server = express()
const routes = require('./routes')

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../dist/angular-tour-of-heroes')))
server.use('/api', routes)


module.exports = server