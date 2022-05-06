const tops = require('express').Router()
const { Top } = require('../models')
const sequelize = require('sequelize')

tops.get('/', async (req, res) => {
    try {
        let data = await Top.findAll({
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

module.exports = tops