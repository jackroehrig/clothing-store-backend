'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bottoms', {
      bottom_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      collection_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      shorts: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      swimwear: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      mainColor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      secondaryColor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      picture: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('bottoms');
  }
};