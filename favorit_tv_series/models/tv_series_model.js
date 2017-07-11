const mongoose = require('mongoose')

let tv_seriesSchema = mongoose.Schema({
  poster_path: String,
  overview: String,
  name: String,
  popularity: Number,
  tag: Array
})

let tv_series = mongoose.model('tv_series', tv_seriesSchema)

module.exports = tv_series
