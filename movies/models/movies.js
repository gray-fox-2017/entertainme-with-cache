const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('../config/dbMovies')

const movieSchema = new Schema({
  title: {type: String, required: true},
  overview: {type: String, required: true},
  poster_path: {type: String},
  popularity: {type: Number},
  tag: {type: Array},
  status: {type: String}
},{timestamps: true})

module.exports = mongoose.model('Movie', movieSchema)
