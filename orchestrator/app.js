const app = require('express')()
const responseTime = require('response-time')
const redis = require('redis')
const ent = require('./getEntertain')

const client = redis.createClient()

client.on('error', err => {
  console.log(`Error: ${err}`)
})

app.set('port', process.env.PORT || 3000)
app.use(responseTime())

app.get('/', (req, res) => {
  res.send(`Let's experience magical entertainment!`)
})

app.get('/api/entertainme', (req, res) => {
  client.get('ent', (error, result) => {
    if(result) {
      res.send({response: JSON.parse(result), source: 'redis'})
    }
    else {
      ent.getData()
        .then((response) => {
          client.setex('ent', 1, JSON.stringify(response))
          res.send({response, source: 'database'})
        })
    }
  })
})

app.listen(app.get('port'), () => {
  console.log('Magical entertainment is happening at http://localhost:3000')
})
