const mongoose = require('mongoose');
const Tv = require('../models/tv');

const getTvs = (req,res) => {
  console.log('get all')
  Tv.find({}, (err,tvs)=>{
    res.send(err? err : tvs)
  })
}

const getTv = (req,res) => {
  Tv.findById( req.params.id, (err,tv)=>{
    res.send(err? err : tv)
  })
}

const addTv = (req,res) => {
  let tv = new Tv(req.body);
  tv.save((err,tv)=>{ res.send(err? err : tv) })
}

const editTv = (req,res) => {
  Tv.findById( req.params.id, (err, tv) => {
    if(err) res.send({err:'Invalid TvId'});
    else {
      for (let key in req.body) tv[key] = req.body[key];
      tv.save((err,tv)=>{ res.send(err? err : tv) })
    }
  })
}

const deleteTv = (req,res) => {
  Tv.findById( req.params.id, (err, tv) => {
    if(err) res.send({err:'Invalid TvId'});
     else
      tv.remove((err,tv)=> { res.send(err? err : tv) })

  })
}

module.exports = {
  getTvs,
  getTv,
  addTv,
  editTv,
  deleteTv
}