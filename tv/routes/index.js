var express = require('express');
var router = express.Router();
var tvControllers = require('../Controllers/tv-controllers.js')
/* GET home page. */
router.get('/tv',tvControllers.getTv)
router.get('/tv/:id',tvControllers.getOneTv)
router.post('/tv',tvControllers.createTv)
router.put('/tv/:id',tvControllers.updateTv)
router.delete('/tv/:id',tvControllers.deleteTv) 

module.exports = router;
