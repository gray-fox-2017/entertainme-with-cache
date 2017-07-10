const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/entertainme', {
 useMongoClient: true,
});

var app = express();
var movie = require('./routes/movie');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/api/movie', movie);

app.listen(3001, () => {
  console.log('Listening on http://localhost:3001');
})
