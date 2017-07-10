const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/magic-series')

const app = express()

app.set('port', process.env.PORT || 3002)

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const index = require('./routes/index')
const series = require('./routes/series')

app.use('/', index)
app.use('/api/magicseries', series)

app.listen(app.get('port'), () => {
  console.log('Magic series are happening at http://localhost:3002')
})
