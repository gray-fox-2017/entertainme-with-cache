const Tags = require('../models/tags')

var create = ((req, res) => {
  let newTags = new Tags ({
    text: req.body.text,
  })
  newTags.save((err, createdTags) => {
    res.send(err ? err : createdTags)
  })
})

var showAll = ((req,res) => {
  Tags.find({},  (err, tags) => {
    res.send(err ? err : tags)
  })
})

var showOne = ((req,res) => {
  Tags.findById(req.params.id, (err, tag) => {
    res.send(err ? err : tag)
  })
})

var update = ((req,res) => {
  Tags.findById(req.params.id, (err, tag) => {
    if(err) res.send(err)
    else {
      tag.text = req.body.text || tag.text
      tag.save((errSaving, savedtag) => {
        res.send(errSaving ? errSaving : savedtag)
      })
    }
  })
})

var destroy = ((req, res) => {
  Tags.findByIdAndRemove(req.params.id, (err, tag) => {
    res.send(err ? err : tag)
  })
})

module.exports = {
  create,
  showAll,
  showOne,
  update,
  destroy,
}
