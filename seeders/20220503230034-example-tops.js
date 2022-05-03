'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Top', [{
      collection_id: 2,
      shortSleeve: true,
      collared: true,
      buttonDown: true,
      mainColor: 'Dark Grey',
      secondaryColor: 'Gold',
      name: 'Black Short Sleeve Buttondown',
      price: 55,
      picture: '/assets/Dress-Up/black-ss-buttondown-dress-shirt.jpg'
    },{
      collection_id: 2,
      shortSleeve: false,
      collared: true,
      buttonDown: true,
      mainColor: 'Blue',
      secondaryColor: 'White',
      name: 'Blue and White Square Patterned Buttondown',
      price: 65,
      picture: '/assets/Dress-Up/bluewhite-squares-dress-shirt.jpg'
    },{
      collection_id: 2,
      shortSleeve: false,
      collared: true,
      buttonDown: true,
      mainColor: 'Darkblue',
      secondaryColor: 'White',
      name: 'Darkblue Anchor Patterned Buttondown',
      price: 50,
      picture: '/assets/Dress-Up/darkblue-anchor-dress-shirt.jpg'
    },{
      collection_id: 2,
      shortSleeve: false,
      collared: true,
      buttonDown: true,
      mainColor: 'White',
      secondaryColor: 'Blue',
      name: 'White Blue/Green Speckled Buttondown',
      price: 60,
      picture: '/assets/Dress-Up/dotted-ls-dress-shirt.jpg'
    }, {
      collection_id: 2,
      shortSleeve: true,
      collared: true,
      buttonDown: true,
      mainColor: 'White',
      secondaryColor: 'none',
      name: 'White Shortsleeve Buttondown',
      price: 40,
      picture: '/assets/Dress-Up/light-dress-shirt.jpg'
    },{
      collection_id: 2,
      shortSleeve: false,
      collared: true,
      buttonDown: true,
      mainColor: 'Lightblue',
      secondaryColor: 'none',
      name: 'Lightblue Buttondown',
      price: 55,
      picture: '/assets/Dress-Up/lightblue-dress-shirt.jpg'
    },{
      collection_id: 1,
      shortSleeve: true,
      collared: false,
      buttonDown: false,
      mainColor: 'Beige',
      secondaryColor: 'none',
      name: 'Beige Tshirt',
      price: 30,
      picture: '/assets/Plain/beige-t-shirt.jpg'
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tops', null, {})
  }
};
