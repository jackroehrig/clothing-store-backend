'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bottom extends Model {
    static associate({Collection}) {
      Bottom.belongsTo(Collection, {as: 'collection', foreignKey: 'collection_id'})
    }
  }
  Bottom.init({
    bottomId: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true
    },
    collectionId: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    shorts: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    swimwear: {
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
      type: DataTypes.INTEGER,
      allowNull: false
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    underscored: true,
    modelName: 'Bottom',
    tableName: 'bottoms',
    timestamps: false
  });
  return Bottom;
};