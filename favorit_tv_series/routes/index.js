const route = require('express').Router()
const tv_controller = require('../controllers/tv_series_controller')

route.get('/tv/', tv_controller.findAll)
route.get('/tv/:id', tv_controller.findById)
route.post('/tv/', tv_controller.insert)
route.delete('/tv/:id', tv_controller.deleteById)

module.exports = route
