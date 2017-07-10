const app = require('express')()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const movie = require('./controllers/movie')

mongoose.connect('mongodb://localhost/entertainme', {
  useMongoClient: true
})

app.get('/', (req, res) => {
  res.send('Movie db')
})

app.get('/api/movies', movie.get)
app.post('/api/movies', movie.create)
app.get('/api/movies/:id', movie.getOne)
app.put('/api/movies/:id', movie.update)
app.delete('api/movies/:id', movie.remove)

app.listen(3001)