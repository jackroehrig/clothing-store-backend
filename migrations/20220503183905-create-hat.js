'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('hats', {
      hat_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      collection_id: {
        type: Sequelize.SMALLINT,
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
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      picture: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('hats');
  }
};