const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/entertainme', {
 useMongoClient: true,
});

var app = express();
var movie = require('./routes/movie');
// var tv = require('./routes/tv');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/api/movie', movie);
// app.use('/api/tv', tv);

app.listen(3000, () => {
  console.log('Listening on http://localhost:3000');
})
