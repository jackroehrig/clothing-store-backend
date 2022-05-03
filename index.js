// DEPENDENCIES
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

// MIDDLEWARE
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to the clothing store backend')
})



// LISTEN
app.listen(process.env.PORT)