const Movies - require('../models/movies')

var create = ((req, res) => {
  let newMovies = new Moves ({
    title: req.body.title,
    popularity: req.body.popularity,
    tags: req.body.tags,
    overview: req.body.overview,
    poster_path: req.body.poster_path
  })
  newMovies.save((err, createdMovies) => {
    res.send(err ? err : createdMovies)
  })
}

module.exports = {
  create,
}
