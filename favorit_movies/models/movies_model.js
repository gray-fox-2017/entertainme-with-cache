const mongoose = require('mongoose')

let movieSchema = mongoose.Schema({
  poster_path: String,
  overview: String,
  title: String,
  popularity: Number,
  tag: Array
})

let movies = mongoose.model('movies', movieSchema)

module.exports = movies
