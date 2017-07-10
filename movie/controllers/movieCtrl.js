const mongoose = require('mongoose');
const Movie = require('../models/movie');

const getMovies = (req,res) => {
  Movie.find({}, (err,movies)=>{
    res.send(err? err : movies)
  })
}

const getMovie = (req,res) => {
  Movie.findById( req.params.id, (err,movie)=>{
    res.send(err? err : movie)
  })
}

const addMovie = (req,res) => {
  let movie = new Movie(req.body);
  movie.save((err,movie)=>{ res.send(err? err : movie) })
}

const editMovie = (req,res) => {
  Movie.findById( req.params.id, (err, movie) => {
    if(err) res.send({err:'Invalid MovieId'});
    else {
      for (let key in req.body) movie[key] = req.body[key];
      movie.save((err,movie)=>{ res.send(err? err : movie) })
    }
  })
}

const deleteMovie = (req,res) => {
  Movie.findById( req.params.id, (err, movie) => {
    if (err) res.send({err:'Invalid MovieId'});
    else movie.remove((err,movie)=> { res.send(err? err : movie) })
  })
}

module.exports = {
  getMovies,
  getMovie,
  addMovie,
  editMovie,
  deleteMovie
}