const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tvSchema = new Schema({
  title: String,
  overview: String,
  poster_path: String,
  popularity: Number,
  tag:[String],
  status:String
})

const Tv = mongoose.model('Tv',tvSchema)

module.exports = Tv