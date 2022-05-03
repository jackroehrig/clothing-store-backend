'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Hat extends Model {
        static associate({ Collection }) {
            Hat.belongsTo(Collection, { as: 'collection', foreignKey: 'collection_id' })
        }
    }
    Hat.init({
        hatId: {
            type: DataTypes.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        collectionId: {
            type: DataTypes.SMALLINT,
            allowNull: false
        },
        mainColor: {
            type: DataTypes.STRING,
            allowNull: false
        },
        secondaryColor: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.SMALLINT,
            allowNull: false
        },
        picture: {
          type: DataTypes.STRING,
          allowNull: false
        }
    }, {
        sequelize,
        underscored: true,
        modelName: 'Hat',
        tableName: 'hats',
        timestamps: false
    });
    return Hat;
};