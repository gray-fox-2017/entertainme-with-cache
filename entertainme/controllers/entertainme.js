const axios = require('axios');
const redis = require('redis');
const cache = redis.createClient();

cache.on("error",(err)=>{
  console.log("Error " + err);
})

const getMovies = () => axios.get('http://localhost:3001/api/movies');
const getTVSeries = () => axios.get('http://localhost:3002/api/tv-series');


const getDataEntertainme = (req, res) => {
  cache.get("entertainme", (err, reply)=>{
    if(reply){
      console.log("From Redis");
      res.send(JSON.parse(reply));
    }else{
      entertainMe()
      .then(response=>{
        console.log("From Axios");
        cache.setex("entertainme", 60, JSON.stringify(response))
        res.send(response)
      })
    }
  })
}

const entertainMe = async () =>{
  try {
    const movies = await getMovies();
    const tv_series = await getTVSeries();
    const data = {
      movies: movies.data,
      series: tv_series.data
    }
    return data
  } catch (err){
    console.error(err);
  }
}
module.exports = {
  getDataEntertainme
};
