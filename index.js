const app = require('express')()
const axios = require('axios')
const responseTime = require('response-time')
const redis = require('redis')

const client = redis.createClient()

client.on('error', err => {
  console.log(err)
})

const getMovie = () => axios.get('http://localhost:3001/api/movies')
const getSeries = () => axios.get('http://localhost:3002/api/series')

const entertainMe = async () => {
  try {
    const movies = await getMovie()
    const series = await getSeries()

    let data = {
      movies: movies.data,
      series: series.data
    }

    return data
  } catch (err) {
    console.log(err)
  }
}

app.use(responseTime())

app.get('/entertainme', (req, res) => {
  client.get('entertainme', (error, result) => {
    if (result) {
      res.send({
        entertainment: JSON.parse(result),
        source: 'redis'
      })
    } else {
      entertainMe().then(data => {
        client.setex('entertainme', 600, JSON.stringify(data))
        res.send({
          entertainment: data,
          source: 'database'
        })
      })
    }
  })
})

app.listen(3000)