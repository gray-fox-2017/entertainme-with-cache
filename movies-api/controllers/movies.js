const Movies = require('../models/movies')
const Tags = require('../models/tags')

var create = ((req, res) => {
  let newMovies = new Movies ({
    title: req.body.title,
    popularity: req.body.popularity,
    tags: req.body.tags,
    overview: req.body.overview,
    poster_path: req.body.poster_path
  })
  newMovies.save((err, createdMovies) => {
    res.send(err ? err : createdMovies)
  })
})

const getTagsIds = async (tags) => {
  tags = await tags.map((tag) => {
    let tagId = ''
    Tags.find({'text': tag}, async (err, tagRes) => {
      await console.log('FIIIND', tagRes)
      if (err) tagId = err
      if(tag.length > 0) {
        console.log('IIIIDDDDD', tagRes[0]._id)
        tagId = tagRes[0]._id
      }
      else {
        tagId = 'lalala'
      }
    })
    return tagId
  })
  console.log('func', tags)
  return tags
}

var createTags = ((req, res) => {
  let tags = req.body.tags
  console.log('atas', tags)
  getTagsIds(tags)
    .then (tags => {
      console.log('bawah', tags)
      res.send(tags)
    })
})

var showAll = ((req,res) => {
  Movies.find({},  (err, movies) => {
    res.send(err ? err : movies)
  })
})

var showOne = ((req,res) => {
  Movies.findById(req.params.id, (err, movie) => {
    res.send(err ? err : movie)
  })
})

var update = ((req,res) => {
  Movies.findById(req.params.id, (err, movie) => {
    if(err) res.send(err)
    else {
      movie.overview = req.body.overview || movie.overview
      movie.popularity = req.body.popularity || movie.popularity
      movie.tags = req.body.tags || movie.tags
      movie.poster_path = req.body.poster_path || movie.poster_path
      movie.save((errSaving, savedMovie) => {
        res.send(errSaving ? errSaving : savedMovie)
      })
    }
  })
})

var destroy = ((req, res) => {
  Movies.findByIdAndRemove(req.params.id, (err, movie) => {
    res.send(err ? err : movie)
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
