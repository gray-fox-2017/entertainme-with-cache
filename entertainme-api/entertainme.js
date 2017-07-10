const axios = require('axios')

const getMovies = () => {
  const endpoint = `http://localhost:3001/api/movie/`
  return axios.get(endpoint)
}

const getTvSeries = () => {
  const endpoint = `http://localhost:3002/api/tv/`
  return axios.get(endpoint)
}

module.exports = {
  getMovies,
  getTvSeries
}
