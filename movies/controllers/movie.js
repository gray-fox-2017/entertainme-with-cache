const Movie = require('../models/movies');

const readMovie = (req, res) => {
  Movie.find({}, (err, result)=>{
    if (err) {
      res.status(500);
      res.send(err);
    }else{
      res.status(200);
      res.send(result);
    }
  })
}

const readByIdMovie = (req, res) => {
  Movie.findById(req.params.id, (err, result)=>{
    if (err) {
      res.status(500);
      res.send(err);
    }else{
      res.status(200);
      res.send(result)
    }
  })
}

const createMovie = (req, res) => {
  const insertMovie = new Movie(req.body)

  insertMovie.save((err, result)=>{
    if (err) {
      res.status(500);
      res.send(err);
    }else{
      res.status(200);
      res.send(result);
    }
  })
}

const updateMovie = (req, res) => {
  Movie.update({
    _id: req.params.id
  },{
    $set: req.body
  },(err, result)=>{
    if (err) {
      res.status(500);
      res.send(err);
    }else{
      res.status(200);
      res.send(result);
    }
  })
}

const deleteMovie = (req, res) =>{
  Movie.remove({_id:req.params.id}, (err, result)=>{
    if (err) {
      res.status(500);
      res.send(err);
    }else{
      res.status(200);
      res.send(result);
    }
  })
}

module.exports = {
  readMovie,
  readByIdMovie,
  createMovie,
  updateMovie,
  deleteMovie
}
