const Movie = require('../models/movies_model')

module.exports = {
  insert : function (req, res) {
    Movie.create(req.body, function(err, record) {
      err ? res.json({ err }) : res.json(record)
    })
  },
  findAll : function (req, res) {
    Movie.find({}, function(err, records) {
      err ? res.json({ err }) : res.json(records)
    })
  },
  findById : function (req, res) {
    Movie.findById( req.params.id , function(err, record) {
      err ? res.json({ err }) : res.json(record)
    })
  },
  deleteById : function (req, res) {
    Movie.findByIdAndRemove( req.params.id )
      .exec(function(err, record) {
        err ? res.json({ err }) : res.json(record)
      })
  }

}
