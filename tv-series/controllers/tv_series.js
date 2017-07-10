const TVSeries = require('../models/tv_serieses');

const readTVSeries = (req, res) => {
  TVSeries.find({}, (err, result)=>{
    if (err) {
      res.status(500);
      res.send(err);
    }else{
      res.status(200);
      res.send(result);
    }
  })
}

const readByIdTVSeries = (req, res) => {
  TVSeries.findById(req.params.id, (err, result)=>{
    if (err) {
      res.status(500);
      res.send(err);
    }else{
      res.status(200);
      res.send(result)
    }
  })
}

const createTVSeries = (req, res) => {
  const insertTVSeries = new TVSeries(req.body)

  insertTVSeries.save((err, result)=>{
    if (err) {
      res.status(500);
      res.send(err);
    }else{
      res.status(200);
      res.send(result);
    }
  })
}

const updateTVSeries = (req, res) => {
  TVSeries.update({
    _id: req.params.id
  },{
    $set: req.body
  },(err, result)=>{
    if (err) {
      res.status(500);
      res.send(err);
    }else{
      res.status(200);
      res.send(result);
    }
  })
}

const deleteTVSeries = (req, res) =>{
  TVSeries.remove({_id:req.params.id}, (err, result)=>{
    if (err) {
      res.status(500);
      res.send(err);
    }else{
      res.status(200);
      res.send(result);
    }
  })
}

module.exports = {
  readTVSeries,
  readByIdTVSeries,
  createTVSeries,
  updateTVSeries,
  deleteTVSeries
}
