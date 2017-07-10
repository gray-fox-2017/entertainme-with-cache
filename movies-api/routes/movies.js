const router = require('express').Router()
const Movies = require('../controllers/movies')

router.post('/', Movies.create)
router.get('/', Movies.showAll)
router.get('/:id', Movies.showOne)
router.put('/:id', Movies.update)
router.delete('/:id', Movies.destroy)

module.exports = router
