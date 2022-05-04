'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('collections', [{
      name: 'Plain',
      release_date: '2022-05-01'
    },{
      name: 'Dress-Up',
      release_date: '2022-02-24'
    },{
      name: 'Sporting',
      release_date: '2021-08-02'
    },{
      name: 'Swim-Time',
      release_date: '2021-04-12'
    },{
      name: 'Unique',
      release_date: '2020-08-22'
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('collections', null, {})
  }
};
