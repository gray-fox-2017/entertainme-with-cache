const axios = require('axios')

const getMovies = () => axios.get('http://localhost:3001/api/magicmovies/')
const getSeries = () => axios.get('http://localhost:3002/api/magicseries/')

const getData = async() => {
  const movies = await getMovies()
  const series = await getSeries()

  return data = {
    movies: movies.data,
    series: series.data
  }
}

module.exports = {
  getData
}
