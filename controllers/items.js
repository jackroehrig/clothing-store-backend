const items = require('express').Router()
const sequelize = require('sequelize')
const db = require('../models')

const { Hat, Top, Bottom, Shoe } = db

items.get('/:category/:id', async (req, res) => {
    try {
        console.log(req.params.category, req.params.id)
        switch (req.params.category) {
            case 'hats':
                const hat = await Hat.findOne({
                    where: { hatId: Number(req.params.id) },
                    include: {all: true}
                })
                res.status(200).json({ info: hat })
                break;
            case 'tops':
                const top = await Top.findOne({
                    where: { topId: Number(req.params.id) },
                    include: {all: true}
                })
                res.status(200).json({ info: top })
                break;
            case 'bottoms':
                const bottom = await Bottom.findOne({
                    where: { bottomId: Number(req.params.id) },
                    include: {all: true}
                })
                res.status(200).json({ info: bottom })
                break;
            case 'shoes':
                const shoe = await Shoe.findOne({
                    where: { shoeId: Number(req.params.id) },
                    include: {all: true}
                })
                res.status(200).json({ info: shoe })
                break;
        }
    } catch (err) {

    }
})

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