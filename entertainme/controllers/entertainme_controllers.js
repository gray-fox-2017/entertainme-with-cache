const axios = require('axios')

const getMovie = () => axios.get('http://localhost:3001/movie')
const getTv = () => axios.get('http://localhost:3002/tv')

module.exports = {
  getData : (req, res) => {
    let obj = {}

    getMovie()
      .then(movie => {
        obj.movie = movie.data
        return getTv()
      })
      .then(tv => {
        obj.tv = tv.data
        console.log(obj);
        res.send(obj)
      })
      .catch(err => {
        console.log(err);
      })
  }
}
