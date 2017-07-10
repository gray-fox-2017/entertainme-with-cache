const express = require('express')
const route = express.Router()
const tagsController = require('../controllers/tagsController')
const moviesController = require('../controllers/moviesController')

// NOTE: TAGS
route.get('/getAllTags', tagsController.getAllTags)
route.get('/getDetailTags/:id', tagsController.getDetailTags)
route.post('/createTags', tagsController.createTags)
route.put('/editTags/:id', tagsController.editTags)
route.delete('/deleteTags/:id', tagsController.deleteTags)

// NOTE: Movies
route.get('/getAllMovies', moviesController.getAllMovies)
route.get('/getDetailMovie/:id', moviesController.getDetailMovie)
route.post('/createMovie', moviesController.createMovie)
route.put('/editMovie/:id', moviesController.editMovie)
route.delete('/deleteMovie/:id', moviesController.deleteMovie)

module.exports = route