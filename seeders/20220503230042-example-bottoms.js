'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bottoms', [{
      collection_id: 2,
      shorts: false,
      swimwear: false,
      mainColor: 'Darkblue',
      secondaryColor: 'none',
      name: 'Darkblue Jeans',
      price: 50,
      picture: '/assets/Dress-Up/darkblue-jeans.jpg'
    }, {
      collection_id: 2,
      shorts: true,
      swimwear: false,
      mainColor: 'Lightblue',
      secondaryColor: 'Copper',
      name: 'Jean Shorts',
      price: 30,
      picture: '/assets/Dress-Up/jean-shorts.jpg'
    }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bottoms', null, {})
  }
};
