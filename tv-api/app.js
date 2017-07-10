const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/entertainme', {
 useMongoClient: true,
});

var app = express();
var tv = require('./routes/tv');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/api/tv', tv);

app.listen(3002, () => {
  console.log('Listening on http://localhost:3002');
})
