const express = require('express')
const { CLIENT_ORIGIN } = require('../../config')

const cors = require('cors')

const app = express()

app.use(cors({
    origin: CLIENT_ORIGIN
}))

app.use('/', require('../people/people.router'))
app.use('/', require('../pets/pets.router'))


module.exports = app
