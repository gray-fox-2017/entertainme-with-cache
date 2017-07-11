const mongoose = require('mongoose')
const Schema = mongoose.Schema

var tagsSchema = new Schema ({
  text: {
    type: String,
    required: true,
  }
})

var Tags = mongoose.model('Tags', tagsSchema)

module.exports = Tags
