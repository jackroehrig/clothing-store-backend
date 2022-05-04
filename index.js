// DEPENDENCIES
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

// MIDDLEWARE
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to the clothing store backend')
})

app.use('/items', require('./controllers/items'))



// LISTEN
app.listen(process.env.PORT)