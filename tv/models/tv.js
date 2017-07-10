const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let tvSchema = new Schema({
  poster_path: { type: String, required: [true,'{PATH} must be filled']} ,
  overview : { type: String, required: [true,'{PATH} must be filled']} ,
  title : { type: String, required: [true,'{PATH} must be filled']} ,
  popularity : { type: Number, required: [true,'{PATH} must be filled']},
  tag :[{type: String}]
})


let Tv = mongoose.model('Tv', tvSchema);

module.exports = Tv;