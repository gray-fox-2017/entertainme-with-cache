const Series = require('../models/series')

var create = ((req, res) => {
  let newSeries = new Series ({
    title: req.body.title,
    popularity: req.body.popularity,
    tags: req.body.tags,
    overview: req.body.overview,
    poster_path: req.body.poster_path
  })
  newSeries.save((err, createdSeries) => {
    res.send(err ? err : createdSeries)
  })
})

var showAll = ((req,res) => {
  Series.find({},  (err, series) => {
    res.send(err ? err : series)
  })
})

var showOne = ((req,res) => {
  Series.findById(req.params.id, (err, serie) => {
    res.send(err ? err : serie)
  })
})

var update = ((req,res) => {
  Series.findById(req.params.id, (err, serie) => {
    if(err) res.send(err)
    else {
      serie.overview = req.body.overview || serie.overview
      serie.popularity = req.body.popularity || serie.popularity
      serie.tags = req.body.tags || serie.tags
      serie.poster_path = req.body.poster_path || serie.poster_path
      serie.save((errSaving, savedSerie) => {
        res.send(errSaving ? errSaving : savedSerie)
      })
    }
  })
})

var destroy = ((req, res) => {
  Series.findByIdAndRemove(req.params.id, (err, serie) => {
    res.send(err ? err : serie)
  })
})

module.exports = {
  create,
  showAll,
  showOne,
  update,
  destroy,
}
