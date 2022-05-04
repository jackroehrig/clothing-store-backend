'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('collections', [{
      name: 'Plain',
      releaseDate: '2022-05-01'
    },{
      name: 'Dress-Up',
      releaseDate: '2022-02-24'
    },{
      name: 'Sporting',
      releaseDate: '2021-08-02'
    },{
      name: 'Swim-Time',
      releaseDate: '2021-04-12'
    },{
      name: 'Unique',
      releaseDate: '2020-08-22'
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('collections', null, {})
  }
};
