const router = require('express').Router()
const Series = require('../controllers/series')

router.post('/', Series.createTags)
router.get('/', Series.showAll)
router.get('/:id', Series.showOne)
router.put('/:id', Series.update)
router.delete('/:id', Series.destroy)

module.exports = router
