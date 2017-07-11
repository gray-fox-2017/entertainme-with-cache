const app = require('express')()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const tv = require('./controllers/tv')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.connect('mongodb://localhost/entertainme', {
  useMongoClient: true
})

app.get('/api/series', tv.get)
app.post('/api/series', tv.create)
app.get('/api/series/:id', tv.getOne)
app.put('/api/series/:id', tv.update)
app.delete('/api/series/:id', tv.remove)

app.listen(3002)