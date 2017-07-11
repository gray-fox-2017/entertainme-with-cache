const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

let tv = require('./routes')

mongoose.connect('mongodb://localhost/favorit_tv_series')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', tv)

app.listen(3002, () => console.log( 'listening on port : 3002' ) )
