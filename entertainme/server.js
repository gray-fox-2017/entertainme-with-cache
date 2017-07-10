const app = require('express')();
const bodyParser = require('body-parser');
const responseTime = require('response-time');

const entertainme = require('./routes/index');

app.set('port', process.env.PORT || 3000);
app.use(responseTime())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/entertainme', entertainme);

app.listen(app.get('port'), ()=>{
  console.log("Application entertainme connected to http://localhost:"+app.get('port'));
})
