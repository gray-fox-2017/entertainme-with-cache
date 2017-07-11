const Movie = require('../models/movie')

const get = (req, res) => {
  Movie.find({}, (err, movies) => {
    if (err) {
      res.send(err)
    } else {
      res.send({
        info: "movies found successfully",
        data: movies
      })
    }
  })
}

const create = (req, res) => {
  let newMovie = new Movie({
    poster_path: req.body.poster_path,
    overview: req.body.overview,
    title: req.body.title,
    popularity: req.body.popularity
  })
  newMovie.save((err, movie) => {
    res.send(err ? err : movie)
  })
}

const getOne = (req, res) => {
  Movie.findById(req.params.id, (err, movie) => {
    res.send(err ? err : movie)
  })
}

const update = (req, res) => {
  Movie.findById(req.params.id, (err, movie) => {
    movie.title = req.body.title || movie.title
    movie.poster_path = req.body.poster_path || movie.poster_path
    movie.overview = req.body.overview || movie.overview
    movie.popularity = req.body.popularity || movie.popularity
    movie.tag = req.body.tag || movie.tag

    movie.save((err, updMovie) => {
      res.send(err ? err : updMovie)
    })
  })
}

const remove = (req, res) => {
  Movie.findByIdAndRemove(req.params.id, (err, movie) => {
    res.send(err ? err : movie)
  })
}

module.exports = {
  get, create, getOne, update, remove
}