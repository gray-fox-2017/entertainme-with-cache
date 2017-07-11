const Series = require('../models/series')

var create = ((req, res) => {
  let newSeries = new Series ({
    title: req.body.title,
    popularity: req.body.popularity,
    tags: req.body.tags,
    overview: req.body.overview,
    poster_path: req.body.poster_path
  })
  newSeries.save((err, createdSeries) => {
    res.send(err ? err : createdSeries)
  })
})

var createTags = ((req, res) => {
  let tags = req.body.tags
  tags = tags.map((tag) => {
    return tag.toLowerCase()
  })
  let tagsIds = []
  let tagsToBeCreated = []
  Tags.find({ 'text': { $in: tags }})
    .exec((err, result) => {
      tagsToBeCreated = tags.filter((tag) => {
        let findResult = result.find((oneResult) => {
          return oneResult.text === tag
        })
        if (findResult) {
          tagsIds.push(findResult._id)
        }
        return findResult === undefined
      })
    })
    .then((aOT) => {
      tagsToBeCreated = tagsToBeCreated.map((tag) => {
        return {'text': tag}
      })
      Tags.insertMany(tagsToBeCreated, (err, createdTags) => {
        createdTags.map((tag) => {
          tagsIds.push(tag._id)
        })
      })
        .then(() => {
          let newMovies = new Movies ({
            title: req.body.title,
            popularity: req.body.popularity,
            tags: tagsIds,
            overview: req.body.overview,
            poster_path: req.body.poster_path
          })
          newMovies.save((err, createdMovies) => {
            res.send(err ? err : createdMovies)
          })
        })
    })
})


var showAll = ((req,res) => {
  Series.find({},  (err, series) => {
    res.send(err ? err : series)
  })
})

var showOne = ((req,res) => {
  Series.findById(req.params.id, (err, serie) => {
    res.send(err ? err : serie)
  })
})

var update = ((req,res) => {
  Series.findById(req.params.id, (err, serie) => {
    if(err) res.send(err)
    else {
      serie.overview = req.body.overview || serie.overview
      serie.popularity = req.body.popularity || serie.popularity
      serie.tags = req.body.tags || serie.tags
      serie.poster_path = req.body.poster_path || serie.poster_path
      serie.save((errSaving, savedSerie) => {
        res.send(errSaving ? errSaving : savedSerie)
      })
    }
  })
})

var destroy = ((req, res) => {
  Series.findByIdAndRemove(req.params.id, (err, serie) => {
    res.send(err ? err : serie)
  })
})

module.exports = {
  create,
  createTags,
  showAll,
  showOne,
  update,
  destroy,
}
