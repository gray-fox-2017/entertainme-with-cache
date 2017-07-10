const mongoose = require('mongoose')
const Schema = mongoose.Schema

let tvSeriesSchema = new Schema({
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

let TVSeries = mongoose.model('TVSeries', tvSeriesSchema)
module.exports = TVSeries