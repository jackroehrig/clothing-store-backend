'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shoe extends Model {
    static associate({Collection}) {
      Shoe.belongsTo(Collection, {as: 'collection', foreignKey: 'collection_id'})
    }
  }
  Shoe.init({
    shoeId: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true
    },
    collectionId: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
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
    modelName: 'Shoe',
    tableName: 'shoes',
    timestamps: false
  });
  return Shoe;
};