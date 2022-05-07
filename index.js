// DEPENDENCIES
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const defineCurrentUser = require('./middleware/defineCurrenctUser')
require('dotenv').config()

// MIDDLEWARE
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(defineCurrentUser)

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to the clothing store backend')
})

app.use('/items', require('./controllers/items'))
app.use('/hats', require('./controllers/hats'))
app.use('/tops', require('./controllers/tops'))
app.use('/bottoms', require('./controllers/bottoms'))
app.use('/shoes', require('./controllers/shoes'))
app.use('/collections', require('./controllers/collections'))
app.use('/users', require('./controllers/users'))
app.use('/authentication', require('./controllers/authentication'))


// LISTEN
app.listen(process.env.PORT)