const axios = require('axios')
const redis = require('redis')

const moviesUrl = `http://localhost:3001/movies`
const tvUrl = `http://localhost:3002/tv`

const client = redis.createClient()

const getMovies = () =>{
  return axios.get(moviesUrl)
}

const getTv = () =>{
  return axios.get(tvUrl)
}

const getEntertaiment = async (req,res) =>{
  const movies = await getMovies()
  const tv = await getTv()
  var data = {}
  client.get(data,(err,result)=>{
    if(result){
      res.send({
        result: JSON.parse(result),
        source: 'redis'
      })
    } else{
      const entertaiments = {
        movies: movies.data,
        tv: tv.data
      }
      client.setex(data,10,JSON.stringify(entertaiments))
      res.send({
        result: entertaiments,
        source: 'local'
      })
    }
  })
}

module.exports ={
  getEntertaiment
}