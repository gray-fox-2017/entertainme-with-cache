const mongoose = require('mongoose')

const tvSchema = mongoose.Schema({
  poster_path: String,
  overview: String,
  name: String,
  popularity: Number,
  tag: Array
})

const Television = mongoose.model('Television', tvSchema)

module.exports = Television