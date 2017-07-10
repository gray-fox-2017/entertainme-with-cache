const app = require('express')()
const responseTime = require('response-time')
const redis = require('redis')
const apiSource = require('./entertainme')

const client = redis.createClient()

client.on('error', err => {
  console.log(`Error: ${err}`);
})

app.set('port', process.env.PORT || 3000)
app.use(responseTime())

app.get('/', (req, res) => {
  res.send('Welcome!')
})
app.get('/entertainme', (req, res) => {
  client.get('entertainment', (error, result) => {
    if(result) {
      res.send({
        entertainment: result,
        source: 'redis cache',
      })
    } else {
      let obj = {
        source: 'database',
      }

      apiSource
      .getMovies()
      .then(movies => {
        obj.movies = movies.data
        return apiSource.getTvSeries()
      })
      .then(tvSeries => {
        obj.series = tvSeries.data
        client.setex('entertainment', 60, obj)
        res.send(obj)
      })
      .catch(err => {
        console.log(err);
      })
    }
  })
})

app.listen(app.get('port'), () => {
  console.log('Listening on http://localhost:', app.get('port'))
})
