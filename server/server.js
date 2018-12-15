const bodyParser = require('body-parser')
const path = require('path')
const express = require('express')
const server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../dist/angular-tour-of-heroes')))

module.exports = server