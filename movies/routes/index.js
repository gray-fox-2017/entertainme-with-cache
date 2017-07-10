const express = require('express');
const router = express.Router();
const controllerMovie = require('../controllers/movie')

router.get('/', controllerMovie.readMovie);
router.get('/:id', controllerMovie.readByIdMovie);
router.post('/', controllerMovie.createMovie);
router.put('/:id', controllerMovie.updateMovie);
router.delete('/:id', controllerMovie.deleteMovie)

module.exports = router
