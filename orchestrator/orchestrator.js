const axios = require('axios');

const getTvs = () => axios.get('http://localhost:3002/api/tvs/')
const getMovies = () => axios.get('http://localhost:3001/api/movies/')

const getData = async() => {
  try {
    const tvs = await getTvs();
    const movies = await getMovies();

    // console.log(tvs);
    // console.log('----------------------------------------1')
    // console.log({
    return {
      tvs: tvs.data,
      movies: movies.data
    }
      
    // })
  }
  catch(err) { console.log(err) }
  finally { console.log('yehee')}
}


module.exports = {
  getData
}