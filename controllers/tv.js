const Television = require('../models/tv')

const get = (req, res) => {
  Television.find({}, (err, series) => {
    if (err) {
      res.send(err)
    } else {
      res.send({
        info: "tv found successfully",
        data: series
      })
    }
  })
}

const create = (req, res) => {
  let newTV = new Television({
    poster_path: req.body.poster_path,
    overview: req.body.overview,
    name: req.body.name,
    popularity: req.body.popularity
  })
  newTV.save((err, series) => {
    res.send(err ? err : series)
  })
}

const getOne = (req, res) => {
  Television.findById(req.params.id, (err, series) => {
    res.send(err ? err: series)
  })
}

const update = (req, res) => {
  Television.findById(req.params.id, (err, series) => {
    series.name = req.body.name || series.name
    series.poster_path = req.body.poster_path || series.poster_path
    series.overview = req.body.overview || series.overview
    series.popularity = req.body.popularity || series.popularity
    series.tag = req.body.tag || series.tag

    movie.save((err, updSeries) => {
      res.send(err ? err : updSeries)
    })
  })
}

const remove = (req, res) => {
  Television.findByIdAndRemove(req.params.id, (err, series) =>{
    res.send(err ? err : series)
  })
}

module.exports = {
  get, create, getOne, update, remove
}