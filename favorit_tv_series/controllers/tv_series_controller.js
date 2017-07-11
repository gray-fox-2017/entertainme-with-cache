const Tv_series = require('../models/tv_series_model')

module.exports = {
  insert : function (req, res) {
    Tv_series.create(req.body, function(err, record) {
      err ? res.json({ err }) : res.json(record)
    })
  },
  findAll : function (req, res) {
    Tv_series.find({}, function(err, records) {
      err ? res.json({ err }) : res.json(records)
    })
  },
  findById : function (req, res) {
    Tv_series.findById( req.params.id , function(err, record) {
      err ? res.json({ err }) : res.json(record)
    })
  },
  deleteById : function (req, res) {
    Tv_series.findByIdAndRemove( req.params.id )
      .exec(function(err, record) {
        err ? res.json({ err }) : res.json(record)
      })
  }

}
