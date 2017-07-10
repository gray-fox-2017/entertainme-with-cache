const Tags = require('../models/Tags')
const methods = {}

methods.getAllTags = (req, res) => {
    Tags.find({}, (error, response) => {
        if (error) res.json({msg: `Something error getAllTags: ${error}`, success: false})
        else {
        res.send(response)
        }
    })
}

methods.getDetailTags = (req, res) => {
    Tags.findById(req.params.id, (error, response) => {
        if (error) res.json({msg: `Something error getDetailTagss: ${error}`, success: false})
        else {
        res.send(response)
        }
    })
}

methods.createTags = (req, res) => {
    let newTags = new Tags({
        text: req.body.text
    })

    newTags.save((error, response) => {
        if (error) res.json({msg: `Something error newTags: ${error}`, success: false})
        else {
            Tags.findById(response._id, (error, response) => {
                if (error) res.json({msg: `Something error getDetailTagss: ${error}`, success: false})
                else {
                res.send(response)
                }
            })
        }
    })
}

methods.editTags = (req, res) => {
    Tags.findById(req.params.id, (error, response) => {
        if (error) res.json({msg: `Something error editTags: ${error}`, success: false})
        else {
            Tags.findByIdAndUpdate( {'_id': response._id}, {
                $set: {
                    text: req.body.text || response.text
                }
            }, {
                new: true
            })
            .exec((error, result) => {
                if (error) res.json({msg: `Something error getDetailTagss: ${error}`, success: false})
                else {
                    Tags.findById(result._id, (error, hasil) => {
                        if (error) res.json({msg: `Something error getDetailTagss: ${error}`, success: false})
                        else {
                        res.send(hasil)
                        }
                    })
                }
            })
        }
    })
}

methods.deleteTags = (req, res) => {
    Tags.findById(req.params.id, (err, record) => {
        Tags.deleteOne({
            "_id": record._id
        }, (err, response) => {
            if (err) res.json({msg: `Something error deleteTags: ${error}`, success: false})
            console.log('Delete tags success');
            console.log(record);
            res.json(record)
        })
    })
}

module.exports = methods