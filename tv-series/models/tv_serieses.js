const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('../config/dbTVSeries')

const tvSeriesSchema = new Schema({
  title: {type: String, required: true},
  overview: {type: String, required: true},
  poster_path: {type: String},
  popularity: {type: Number},
  tag: {type: [{}]},
  status: {type: String}
},{timestamps: true})

module.exports = mongoose.model('TVSeries', tvSeriesSchema)
