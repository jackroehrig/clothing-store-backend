'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Collection extends Model {
    static associate({Hat, Shoe, Top, Bottom}) {
        Collection.hasMany(Hat, {foreignKey: 'collection_id', as: 'hats'})
        Collection.hasMany(Shoe, {foreignKey: 'collection_id', as: 'shoes'})
        Collection.hasMany(Top, {foreignKey: 'collection_id', as: 'tops'})
        Collection.hasMany(Bottom, {foreignKey: 'collection_id', as: 'bottoms'})
    }
  }
  Collection.init({
    collectionId: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    releaseDate: {
        type: DataTypes.DATE,
        allowNull: false
    }
  }, {
    sequelize,
    underscored: true,
    modelName: 'Collection',
    tableName: 'collections',
    timestamps: false
  });
  return Collection;
};