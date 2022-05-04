'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Top extends Model {
        static associate({ Collection }) {
            Top.belongsTo(Collection, { as: 'collection', foreignKey: 'collection_id' })
        }
    }
    Top.init({
        topId: {
            type: DataTypes.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        collectionId: {
            type: DataTypes.SMALLINT,
            allowNull: false
        },
        shortSleeve: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        collared: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        buttonDown: {
            type: DataTypes.BOOLEAN,
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
        },
        s: {
          type: DataTypes.SMALLINT,
          allowNull: false,
          defaultValue: 3
        },
        m: {
          type: DataTypes.SMALLINT,
          allowNull: false,
          defaultValue: 3
        },
        l: {
          type: DataTypes.SMALLINT,
          allowNull: false,
          defaultValue: 3
        },
        xl: {
          type: DataTypes.SMALLINT,
          allowNull: false,
          defaultValue: 3
        }
    }, {
        sequelize,
        underscored: true,
        modelName: 'Top',
        tableName: 'tops',
        timestamps: false
    });
    return Top;
};