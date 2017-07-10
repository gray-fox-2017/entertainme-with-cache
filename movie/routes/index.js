var express = require('express');
var router = express.Router();
const movieCtrl = require('../controllers/movieCtrl');


/* GET movie page. */
router.get('/',movieCtrl.getMovies ); //
router.get('/:id',movieCtrl.getMovie); //
router.post('/',movieCtrl.addMovie ); //
router.put('/:id',movieCtrl.editMovie ); //
router.delete('/:id',movieCtrl.deleteMovie ); //

module.exports = router;