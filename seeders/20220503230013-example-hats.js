'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Hat', [{
      collection_id: 2,
      mainColor: 'Black',
      secondaryColor: 'none',
      name: 'Black Conductor Hat',
      price: 30,
      picture: '/assets/Dress-Up/black-conductor-hat.jpg'
    }, {
      collection_id: 2,
      mainColor: 'Grey',
      secondaryColor: 'none',
      name: 'Grey Kangol Hat',
      price: 25,
      picture: '/assets/Dress-Up/grey-kangol-hat.jpg'
    }, {
      collection_id: 2,
      mainColor: 'Tan',
      secondaryColor: 'Black',
      name: 'Straw Hat With Black Band',
      price: 38,
      picture: '/assets/Dress-Up/straw-hat.jpg'
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Hats', null, {})
  }
};
