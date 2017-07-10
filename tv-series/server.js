const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const TVSeries = require('./routes/index');
const app = express();

app.set('port', process.env.PORT || 3002);
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/api/tv-series', TVSeries)

app.listen(app.get('port'), ()=>{
  console.log('Server TVSeries Connected to http://localhost:3002');
})
