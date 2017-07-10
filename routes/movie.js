var express = require('express');
var router = express.Router();
var movie = require('../controllers/movieController')

router.get('/', movie.getAll);

router.post('/', movie.create);

router.get('/:id', movie.getByID);

router.delete('/:id', movie.delete);

router.put('/:id', movie.update)

module.exports = router;
