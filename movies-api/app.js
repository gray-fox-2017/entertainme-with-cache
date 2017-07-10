const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/magic-movies')

const app = express()

app.set('port', process.env.PORT || 3001)

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const index = require('./routes/index')
const movies = require('./routes/movies')

app.use('/', index)
app.use('/api/magicmovies', movies)

app.listen(app.get('port'), () => {
  console.log('Magic movies are happening at http://localhost:3001')
})
