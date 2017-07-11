const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

let movie = require('./routes')

mongoose.connect('mongodb://localhost/favorit_movies')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', movie)

app.listen(3001, () => console.log( 'listening on port : 3001' ) )
