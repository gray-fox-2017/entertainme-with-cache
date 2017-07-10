var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tvSchema = new Schema({
  name: {
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

var Tv = mongoose.model('Tv', tvSchema);

module.exports = Tv;
