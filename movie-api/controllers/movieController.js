var Movie = require('../models/movie')
var methods = {}

methods.getAll = (req, res) => {
  Movie.find({})
  .then((movies)=>{
    res.send({movies: movies})
  })
  .catch((err)=>{res.send(err)})
}

methods.getByID = (req, res) => {
  Movie.findById(req.params.id)
  .then((movie)=>{
    res.send({movie: movie})
  })
  .catch((err)=>{
    res.send(err.message)
  })
}

methods.create = (req, res) => {
  let newHouse = new Movie(req.body)

  newHouse.save()
  .then(movies => {
    res.send({movies: movies})
  })
  .catch((err)=>{
    res.send(err)}
  )
}

methods.update = (req, res) => {
  let id = req.params.id
  Movie.update({_id: id}, req.body)
  .then(() => {
    Movie.findById(id)
  })
  .then((movie)=>{
    res.send({movie: movie})
  })
  .catch((err)=>{res.send(err)})
}

methods.delete = (req, res) => {
  let id = req.params.id
  Movie.deleteOne({_id: id})
  .then(()=>{
    res.send('Movie removed')
  })
  .catch((err)=>{res.send(err)})
}

module.exports = methods
