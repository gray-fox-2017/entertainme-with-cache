const mongoose = require('mongoose')
const Schema = mongoose.Schema

var seriesSchema = new Schema ({
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
})

var Series = mongoose.model('Series', seriesSchema)

module.exports = Series
