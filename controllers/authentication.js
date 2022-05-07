const authentication = require('express').Router()
const db = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('json-web-token')

const {User} = db

authentication.post('/', async (req, res) => {
    let user = await User.findOne({
        where: {username: req.body.username}
    })

    if(!user || !await bcrypt.compare(req.body.password, user.passwordDigest)){
        res.status(404).json({
            message: 'Could not find a user with the provided username and password'
        })
    } else {
        const result = await jwt.encode(process.env.JWT_SECRET, {id: user.userId})
        res.json({user: user, token: result.value})
    }
})

authentication.get('/profile', async (req, res) => {
    res.json(req.currentUser)
})

module.exports = authentication