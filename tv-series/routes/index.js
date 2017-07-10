const express = require('express');
const router = express.Router();
const controllerTVSeries = require('../controllers/tv_series')

router.get('/', controllerTVSeries.readTVSeries);
router.get('/:id', controllerTVSeries.readByIdTVSeries);
router.post('/', controllerTVSeries.createTVSeries);
router.put('/:id', controllerTVSeries.updateTVSeries);
router.delete('/:id', controllerTVSeries.deleteTVSeries)

module.exports = router
