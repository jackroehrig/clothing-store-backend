const hats = require('express').Router()
const { Hat } = require('../models')
const sequelize = require('sequelize')

hats.get('/', async (req, res) => {
    try {
        let data = await Hat.findAll({
            order: sequelize.fn('RANDOM')
        })
        res.status(200).json({
            items: [...data]
        })
    } catch(err){
        console.log(err)
        res.status(404).send({message: 'something went wrong querying the database'})
    }
})

module.exports = hats