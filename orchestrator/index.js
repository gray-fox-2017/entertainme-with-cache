const app = require('express')();
const responseTime = require('response-time');
const redis = require('redis');
const orchestrator = require('./orchestrator');

// console.log('jalan')
const client = redis.createClient();
client.on('error', err=> { console.log(`Error : ${err}`) } );

app.set('port', 3000);
app.use(responseTime());

app.get('/entertainme', (req,res)=> {
  client.get('entertaintment', ( err,result) => {
    if (result) {
      result = JSON.parse(result);
      if (typeof result.tvs !== 'undefined') console.log(result.tvs[0]);
      res.send({
        data: result,
        source: 'redis cache'
      })
    } else {
      orchestrator.getData()
      .then(data => {
        client.setex('entertaintment',5, JSON.stringify(data))
        console.log(data);
        res.send({data: data, source:'server'})
      })
      .catch(err => {res.send({err:err})})
    }

  })
})

app.listen(app.get('port'), () => {
  console.log('magic happen at http://localhost:',app.get('port'))
})






//getData