const router = require('express').Router();
const controllerEntertainme = require('../controllers/entertainme');

router.get('/',controllerEntertainme.getDataEntertainme);

module.exports = router
