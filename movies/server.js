const express = require('express');
const bodyParser = require('body-parser');

const Movie = require('./routes/index');
const app = express();

app.set('port', process.env.PORT || 3001);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/api/movies', Movie)
app.listen(app.get('port'), ()=>{
  console.log('Server Movie Connected to http://localhost:3001');
})
