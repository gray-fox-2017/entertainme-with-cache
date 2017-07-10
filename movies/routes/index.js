var express = require('express');
var router = express.Router();
var moviesController = require('../Controllers/movies-controllers.js')
/* GET home page. */
router.get('/movies',moviesController.getMovies)
router.get('/movies/:id',moviesController.getOneMovie)
router.post('/movies',moviesController.createMovie)
router.delete('/movies/:id',moviesController.deleteMovie)
router.put('/movies/:id',moviesController.updateMovie)

module.exports = router;
