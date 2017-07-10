var express = require('express');
var router = express.Router();
const entertaimentControllers = require('../Controllers/entertaiment-controllers.js')
/* GET home page. */
router.get('/',entertaimentControllers.getEntertaiment)

module.exports = router;
