var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Please enter your adds title']
  },
  poster_path: {
    type: String,
  },
  overview: {
    type: String,
    required: [true, 'Please enter your movie overview']
  },
  tag: Array,
  popularity: {
    type: String,
    required: [true, 'Please enter your city']
  },
})

var Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
