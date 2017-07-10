const app = require('express')()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const index = require('./routes/moviesRoute')

mongoose.connect('mongodb://localhost/microservices')

app.set('port', process.env.PORT || 3001)

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/', index)

app.listen(app.get('port'), () => {
    console.log('Listening http://localhost:3001/ ')
})