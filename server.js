const app = require('express')()
const bodyParser = require('body-parser')
const responseTime = require('response-time')
const redis = require('redis')
const client = redis.createClient()
const axios = require('axios')

client.on('error', err => {
    console.log('Error: ', err)
})

app.set('port', process.env.PORT || 3000)
app.use(responseTime())

app.get('/:entertainme', (req, res) => {
    const axiosMovies = () => axios.get('http://localhost:3001/getAllMovies')
    const axiosTVSeries = () => axios.get('http://localhost:3002/getAllTVSeries')

    const entertainme = req.params.entertainme
    client.get('entertainme', (err, result) => {
        if (result) {
            res.send(JSON.parse(result))
        } else {
            const getData = async () => {
                try {
                    const movies = await axiosMovies()
                    const tvSeries = await axiosTVSeries()
                    const data = {
                        movies: {
                            info: 'movies found successfully',
                            data: movies.data
                        },
                        tvSeries: {
                            info: 'tvSeries found successfully',
                            data: tvSeries.data
                        }
                    }
                    client.setex(entertainme, 10, JSON.stringify(data))
                    res.send(data)
                } catch (error) {
                    console.log(error)
                }
            }
            getData()
        }
    })
})

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.listen(app.get('port'), () => {
    console.log('Listening http://localhost:3000/ ')
})