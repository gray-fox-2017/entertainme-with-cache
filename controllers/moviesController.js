const Movies = require('../models/Movies')
const methods = {}

methods.getAllMovies = (req, res) => {
    Movies.find({})
    .populate('tags')
    .exec((error, response) => {
        if (error) res.json({msg: `Something error getAllMovies: ${error}`, success: false})
        else {
        res.send(response)
        }
    })
}

methods.getDetailMovie = (req, res) => {
    Movies.findById(req.params.id)
    .populate('tags')
    .exec((error, response) => {
        if (error) res.json({msg: `Something error getDetailMovie: ${error}`, success: false})
        else {
        res.send(response)
        }
    })
}

methods.createMovie = (req, res) => {
    let newMovies = new Movies({
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popularity: req.body.popularity,
        tags: req.body.tags
    })

    newMovies.save((error, response) => {
        if (error) res.json({msg: `Something error createMovie: ${error}`, success: false})
        else {
        Movies.findById(response._id)
        .populate('tags')
        .exec((error, response) => {
            if (error) res.json({msg: `Something error getDetailMovie: ${error}`, success: false})
            else {
            res.send(response)
            }
        })
        }
    })
}

methods.editMovie = (req, res) => {
    Movies.findById(req.params.id, (error, response) => {
        if (error) res.json({msg: `Something error editMovie: ${error}`, success: false})
        else {
            Movies.findByIdAndUpdate({'_id': response._id}, {
                $set: {
                    title: req.body.title || response.title,
                    overview: req.body.overview || response.overview,
                    poster_path: req.body.poster_path || response.poster_path,
                    popularity: req.body.popularity || response.popularity,
                    tags: req.body.tags || response.tags
                }
            }, {
                new: true
            })
            .exec((error, result) => {
                if (error) res.json({msg: `Something error getDetailMovie: ${error}`, success: false})
                else {
                    Movies.findById(result._id)
                    .populate('tags')
                    .exec((error, hasil) => {
                        if (error) res.json({msg: `Something error getDetailMovie: ${error}`, success: false})
                        else {
                            res.send(hasil)
                        }
                    })
                }
            })
        }
    })
}

methods.deleteMovie = (req, res) => {
    Movies.findById(req.params.id)
    .populate('tags')
    .exec((err, record) => {
        Movies.deleteOne({
            "_id": record._id
        }, (err, response) => {
            if (err) res.json({msg: `Something error deleteMovie: ${error}`, success: false})
            console.log('Delete movie success');
            console.log(record);
            res.json(record)
        })
    })
}

module.exports = methods