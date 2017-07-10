const express = require('express')
const route = express.Router()
const tagsController = require('../controllers/tagsController')
const tvSeriesController = require('../controllers/tvSeriesController')

// NOTE: TAGS
route.get('/getAllTags', tagsController.getAllTags)
route.get('/getDetailTags/:id', tagsController.getDetailTags)
route.post('/createTags', tagsController.createTags)
route.put('/editTags/:id', tagsController.editTags)
route.delete('/deleteTags/:id', tagsController.deleteTags)

// NOTE: TVSeries
route.get('/getAllTVSeries', tvSeriesController.getAllTVSeries)
route.get('/getDetailTVSeries/:id', tvSeriesController.getDetailTVSeries)
route.post('/createTVSeries', tvSeriesController.createTVSeries)
route.put('/editTVSeries/:id', tvSeriesController.editTVSeries)
route.delete('/deleteTVSeries/:id', tvSeriesController.deleteTVSeries)

module.exports = route