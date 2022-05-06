const bottoms = require('express').Router()
const { Bottom } = require('../models')
const sequelize = require('sequelize')

bottoms.get('/', async (req, res) => {
    try {
        let data = await Bottom.findAll({
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

module.exports = bottoms