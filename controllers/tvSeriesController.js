const TVSeries = require('../models/TVSeries')
const methods = {}

methods.getAllTVSeries = (req, res) => {
    TVSeries.find({})
    .populate('tags')
    .exec((error, response) => {
        if (error) res.json({msg: `Something error getAllTVSeries: ${error}`, success: false})
        else {
        res.send(response)
        }
    })
}

methods.getDetailTVSeries = (req, res) => {
    TVSeries.findById(req.params.id)
    .populate('tags')
    .exec((error, response) => {
        if (error) res.json({msg: `Something error getDetailTVSeries: ${error}`, success: false})
        else {
        res.send(response)
        }
    })
}

methods.createTVSeries = (req, res) => {
    let newTVSeries = new TVSeries({
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popularity: req.body.popularity,
        tags: req.body.tags
    })

    newTVSeries.save((error, response) => {
        if (error) res.json({msg: `Something error createTVSeries: ${error}`, success: false})
        else {
        TVSeries.findById(response._id)
        .populate('tags')
        .exec((error, response) => {
            if (error) res.json({msg: `Something error getDetailTVSeries: ${error}`, success: false})
            else {
            res.send(response)
            }
        })
        }
    })
}

methods.editTVSeries = (req, res) => {
    TVSeries.findById(req.params.id, (error, response) => {
        if (error) res.json({msg: `Something error editTVSeries: ${error}`, success: false})
        else {
            TVSeries.findByIdAndUpdate( {'_id': response._id}, {
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
                if (error) res.json({msg: `Something error getDetailTVSeries: ${error}`, success: false})
                else {
                    TVSeries.findById(result._id)
                    .populate('tags')
                    .exec((error, hasil) => {
                        if (error) res.json({msg: `Something error getDetailTVSeries: ${error}`, success: false})
                        else {
                            res.send(hasil)
                        }
                    })
                }
            })
        }
    })
}

methods.deleteTVSeries = (req, res) => {
    TVSeries.findById(req.params.id)
    .populate('tags')
    .exec((err, record) => {
        TVSeries.deleteOne({
            "_id": record._id
        }, (err, response) => {
            if (err) res.json({msg: `Something error deleteTVSeries: ${error}`, success: false})
            console.log('Delete TVSeries success');
            console.log(record);
            res.json(record)
        })
    })
}

module.exports = methods