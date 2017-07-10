const express = require('express')
const route = express.Router()
const axios = require('axios')

route.get('/entertainme', (req, res) => {
    const axiosMovies = () => axios.get('http://localhost:3001/getAllMovies')
    const axiosTVSeries = () => axios.get('http://localhost:3002/getAllTVSeries')
    
    // NOTE: IMPLEMENT USING PROMISE
    // let obj = {}
    
    // axiosMovies()
    // .then(result => {
    //     obj.movies = {
    //         info: 'movies found successfully',
    //         data: result.data
    //     }
    //     return axiosTVSeries()
    // })
    // .then(tvSeries => {
    //     obj.tvSeries = {
    //         info: 'movies found successfully',
    //         data: tvSeries.data
    //     }
    //     console.log('Result:*** ', obj)
    //     res.send(obj)
    // })
    // .catch(err => {
    //     res.json({err})
    // })

    // NOTE: IMPLEMENT USING ASYNC AWAIT
    const getData = async () => {
        try {
            const movies = await axiosMovies()
            const tvSeries = await axiosTVSeries()
            console.log('&&&&&')
            res.json({
                movies: {
                    info: 'movies found successfully',
                    data: movies.data
                },
                tvSeries: {
                    info: 'tvSeries found successfully',
                    data: tvSeries.data
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
    getData()
})

module.exports = route