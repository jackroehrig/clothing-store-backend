const items = require('express').Router()
const sequelize = require('sequelize')
const db = require('../models')

const { Hat, Top, Bottom, Shoe } = db

items.get('/random_three', async (req, res) => {
    try {
        const hats = await Hat.findAll({
            order: sequelize.fn('RANDOM'),
            limit: 3
        })

        const tops = await Top.findAll({
            order: sequelize.fn('RANDOM'),
            limit: 3
        })

        const bottoms = await Bottom.findAll({
            order: sequelize.fn('RANDOM'),
            limit: 3
        })

        const shoes = await Shoe.findAll({
            order: sequelize.fn('RANDOM'),
            limit: 3
        })

        let randomItems = [...hats, ...tops, ...bottoms, ...shoes].sort(() => .5 - Math.random())

        res.status(200).json({
            items: [randomItems[0], randomItems[1], randomItems[2]]
        })
    } catch (err) {
        res.status(404)
        console.log(err)
    }
})

module.exports = items