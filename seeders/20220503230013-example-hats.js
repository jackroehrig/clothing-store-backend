'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('hats', [{
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
    }, {
      collection_id: 1,
      mainColor: 'Black',
      secondaryColor: 'none',
      name: 'Black Beanie',
      price: 20,
      picture: '/assets/Plain/black-beanie.jpg'
    }, {
      collection_id: 1,
      mainColor: 'Grey',
      secondaryColor: 'none',
      name: 'Grey Beanie',
      price: 20,
      picture: '/assets/Plain/grey-beanie.jpg'
    }, {
      collection_id: 1,
      mainColor: 'Tan',
      secondaryColor: 'Lightbrown',
      name: 'Tan Snapback With Lightbrown Logo',
      price: 30,
      picture: '/assets/Plain/tan-hat.jpg'
    }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('hats', null, {})
  }
};
