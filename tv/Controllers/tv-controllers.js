const Tv = require('../Models/tv.js')

const getTv = (req,res) =>{
  Tv.find({},(err,result)=>{
    res.send(result)
  })
}

const createTv = (req,res) =>{
  Tv.create({
    title: req.body.title,
    overview: req.body.overview,
    poster_path: req.body.poster_path,
    popularity: req.body.popularity,
    tag:req.body.tag,
    status:req.body.status
  },(err,result)=>{
    res.send(`${req.body.title} Created!`)
  })
}

const updateTv = (req,res) =>{
  Tv.find({
    _id: req.params.id
  },(err,result)=>{
    Tv.updateOne({
      _id: req.params.id
    },{
      title: req.body.title || result.title,
      overview: req.body.overview || result.overview,
      poster_path: req.body.poster_path || result.poster_path,
      popularity: req.body.popularity || result.popularity,
      tag: req.body.tag || result.tag,
      status: req.body.status || result.status
    },(err,result)=>{
      res.send(`${req.body.title} Created`)
    })
  })
}

const deleteTv = (req,res) =>{
  Tv.remove({
    _id: req.params.id
  },(err,result)=>{
    res.send(`Delete Success!`)
  })
}

const getOneTv = (req,res) =>{
  Tv.findOne({
    _id: req.params.id
  },(err,result)=>{
    res.send(result)
  })
}

module.exports = {
  getTv,getOneTv,deleteTv,updateTv,createTv,getTv
}