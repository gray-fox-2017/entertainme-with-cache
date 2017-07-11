const express = require('express')
const bodyParser = require('body-parser')

let entertainme = require('./routes')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', entertainme)

app.listen(3000, () => console.log( 'listening on port : 3000' ) )
