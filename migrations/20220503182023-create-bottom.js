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
      main_color: {
        type: Sequelize.STRING,
        allowNull: false
      },
      secondary_color: {
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
      },
      s: {
        type: Sequelize.SMALLINT,
        allowNull: false,
        defaultValue: 3
      },
      m: {
        type: Sequelize.SMALLINT,
        allowNull: false,
        defaultValue: 3
      },
      l: {
        type: Sequelize.SMALLINT,
        allowNull: false,
        defaultValue: 3
      },
      xl: {
        type: Sequelize.SMALLINT,
        allowNull: false,
        defaultValue: 3
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('bottoms');
  }
};