const Movies = require('../models/movies')

var create = ((req, res) => {
  let newMovies = new Movies ({
    title: req.body.title,
    popularity: req.body.popularity,
    tags: req.body.tags,
    overview: req.body.overview,
    poster_path: req.body.poster_path
  })
  newMovies.save((err, createdMovies) => {
    res.send(err ? err : createdMovies)
  })
})

var showAll = ((req,res) => {
  Movies.find({},  (err, movies) => {
    res.send(err ? err : movies)
  })
})

var showOne = ((req,res) => {
  Movies.findById(req.params.id, (err, movie) => {
    res.send(err ? err : movie)
  })
})

var update = ((req,res) => {
  Movies.findById(req.params.id, (err, movie) => {
    if(err) res.send(err)
    else {
      movie.overview = req.body.overview || movie.overview
      movie.popularity = req.body.popularity || movie.popularity
      movie.tags = req.body.tags || movie.tags
      movie.poster_path = req.body.poster_path || movie.poster_path
      movie.save((errSaving, savedMovie) => {
        res.send(errSaving ? errSaving : savedMovie)
      })
    }
  })
})

var destroy = ((req, res) => {
  Movies.findByIdAndRemove(req.params.id, (err, movie) => {
    res.send(err ? err : movie)
  })
})

module.exports = {
  create,
  showAll,
  showOne,
  update,
  destroy,
}
