const users = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')

const { User } = db

users.post('/', async (req, res) => {
    let { password, newUsername, ...rest } = req.body;

    const previousUser = await User.findOne({
        where: { username: newUsername }
    })

    if (previousUser) {
        res.status(409).json({message: 'That username has already been taken :('})
    } else {
        const user = await User.create({
            ...rest,
            passwordDigest: await bcrypt.hash(password, 10)
        })
        res.status(200).json(user)
    }
})


users.get('/', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})

module.exports = users