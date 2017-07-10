const mongoose = require('mongoose')
const Schema = mongoose.Schema

var moviesSchema = new Schema ({
  title: {
    type: String,
    required: true,
  },
  popularity: {
    type: Number,
  },
  tags: {
    type: [String],
  },
  overview: {
    type: String,
    required: true,
  },
  poster_path: {
    type: String
  }
})

var Movies = mongoose.model('Movies', moviesSchema)

module.exports = Movies
