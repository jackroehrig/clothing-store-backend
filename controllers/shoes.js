const shoes = require('express').Router()
const { Shoe } = require('../models')
const sequelize = require('sequelize')

shoes.get('/', async (req, res) => {
    try {
        let data = await Shoe.findAll({
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

module.exports = shoes