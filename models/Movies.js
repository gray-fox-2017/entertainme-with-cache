const mongoose = require('mongoose')
const Schema = mongoose.Schema

let moviesSchema = new Schema({
    title: String,
    overview: String,
    poster_path: String,
    popularity: String,
    tags: [{
        type: Schema.Types.ObjectId,
        ref: 'Tags',
        required: true
    }]
})

let Movies = mongoose.model('Movies', moviesSchema)
module.exports = Movies