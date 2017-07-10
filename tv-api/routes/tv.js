var express = require('express');
var router = express.Router();
var tv = require('../controllers/tvController')

router.get('/', tv.getAll);

router.post('/', tv.create);

router.get('/:id', tv.getByID);

router.delete('/:id', tv.delete);

router.put('/:id', tv.update)

module.exports = router;
