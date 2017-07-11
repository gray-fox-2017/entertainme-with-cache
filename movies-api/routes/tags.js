const router = require('express').Router()
const Tags = require('../controllers/tags')

router.post('/', Tags.create)
router.get('/', Tags.showAll)
router.get('/:id', Tags.showOne)
router.put('/:id', Tags.update)
router.delete('/:id', Tags.destroy)

module.exports = router
