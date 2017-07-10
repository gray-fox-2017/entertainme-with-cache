const router = require('express').Router()
const Series = require('../controllers/series')

router.post('/', Series.create)
router.get('/', Series.showAll)
router.get('/:id', Series.showOne)
router.put('/:id', Series.update)
router.delete('/:id', Series.destroy)

module.exports = router
