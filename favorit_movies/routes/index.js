const route = require('express').Router()
const movie_controller = require('../controllers/movies_controller')

route.get('/movie/', movie_controller.findAll)
route.get('/movie/:id', movie_controller.findById)
route.post('/movie/', movie_controller.insert)
route.delete('/movie/:id', movie_controller.deleteById)

module.exports = route
