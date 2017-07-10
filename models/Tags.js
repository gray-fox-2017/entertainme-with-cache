const mongoose = require('mongoose')
const Schema = mongoose.Schema

let tagsSchema = new Schema({
    text: String
})

let Tags = mongoose.model('Tags', tagsSchema)
module.exports = Tags