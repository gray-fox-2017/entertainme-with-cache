const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
  poster_path: String,
  overview: String,
  title: String,
  popularity: Number,
  tag: Array
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie