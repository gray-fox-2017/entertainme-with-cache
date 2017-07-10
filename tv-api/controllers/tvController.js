var Tv = require('../models/tv')
var methods = {}

methods.getAll = (req, res) => {
  Tv.find({})
  .then((tvSeries)=>{
    res.send({data: tvSeries})
  })
  .catch((err)=>{res.send(err)})
}

methods.getByID = (req, res) => {
  Tv.findById(req.params.id)
  .then((tvSeries)=>{
    res.send({data: tvSeries})
  })
  .catch((err)=>{
    res.send(err.message)
  })
}

methods.create = (req, res) => {
  let newHouse = new Tv(req.body)

  newHouse.save()
  .then(tvSeries => {
    res.send({data: tvSeries})
  })
  .catch((err)=>{
    res.send(err)}
  )
}

methods.update = (req, res) => {
  let id = req.params.id
  Tv.update({_id: id}, req.body)
  .then(() => {
    Tv.findById(id)
  })
  .then((tvSeries)=>{
    res.send({data: tvSeries})
  })
  .catch((err)=>{res.send(err)})
}

methods.delete = (req, res) => {
  let id = req.params.id
  Tv.deleteOne({_id: id})
  .then(()=>{
    res.send('Tv removed')
  })
  .catch((err)=>{res.send(err)})
}

module.exports = methods
