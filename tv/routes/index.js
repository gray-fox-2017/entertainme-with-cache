'use strict'
const express = require('express');
let router = express.Router();
const tvCtrl = require('../controllers/tvCtrl');


/* GET tv page. */
router.get('/',tvCtrl.getTvs ); //
router.get('/:id',tvCtrl.getTv); //
router.post('/',tvCtrl.addTv ); //
router.put('/:id',tvCtrl.editTv ); //
router.delete('/:id',tvCtrl.deleteTv ); //

module.exports = router;