const users = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')

const { User } = db

users.post('/', async (req, res) => {
    let{password, ...rest} = req.body;
    const user = await User.create({
        ...rest,
        passwordDigest: await bcrypt.hash(password, 10)
    })
    res.json(user)
})


users.get('/', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})

module.exports = users