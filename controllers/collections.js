const collections = require('express').Router()
const { Collection } = require('../models')
const sequelize = require('sequelize')

collections.get('/', async (req, res) => {
    try {
        let data = await Collection.findAll({
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

collections.get('/:id', async (req, res) => {
    try{
        let collection = await Collection.findOne({
            where: {collection_id: Number(req.params.id)},
            include: {
                all: true
            }
        })
        res.status(200).json({col: collection})
    }catch(err){
        console.log(err)
    }
})

module.exports = collections