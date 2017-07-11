const route = require('express').Router()
const entertainme = require('../controllers/entertainme_controllers')

route.get('/entertainme', entertainme.getData)

module.exports = route
