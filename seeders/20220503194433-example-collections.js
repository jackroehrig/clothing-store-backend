'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Collections', [{
      name: 'Plain',
      releaseDate: new Date('May 1st, 2022')
    },{
      name: 'Dress-Up',
      releaseDate: new Date('Febuary 24th, 2022')
    },{
      name: 'Sporting',
      releaseDate: new Date('August 2nd, 2021')
    },{
      name: 'Swim-Time',
      releaseDate: new Date('April 12th, 2021')
    },{
      name: 'Unique',
      releaseDate: new Date('August 22nd, 2020')
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Collections', null, {})
  }
};
