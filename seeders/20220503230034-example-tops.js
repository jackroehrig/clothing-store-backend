'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tops', [{
      collection_id: 2,
      shortSleeve: true,
      collared: true,
      buttonDown: true,
      mainColor: 'Dark Grey',
      secondaryColor: 'Gold',
      name: 'Black Short Sleeve Buttondown',
      price: 55,
      picture: '/assets/Dress-Up/black-ss-buttondown-dress-shirt.jpg'
    }, {
      collection_id: 2,
      shortSleeve: false,
      collared: true,
      buttonDown: true,
      mainColor: 'Blue',
      secondaryColor: 'White',
      name: 'Blue and White Square Patterned Buttondown',
      price: 65,
      picture: '/assets/Dress-Up/bluewhite-squares-dress-shirt.jpg'
    }, {
      collection_id: 2,
      shortSleeve: false,
      collared: true,
      buttonDown: true,
      mainColor: 'Darkblue',
      secondaryColor: 'White',
      name: 'Darkblue Anchor Patterned Buttondown',
      price: 50,
      picture: '/assets/Dress-Up/darkblue-anchor-dress-shirt.jpg'
    }, {
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
    }, {
      collection_id: 2,
      shortSleeve: false,
      collared: true,
      buttonDown: true,
      mainColor: 'Lightblue',
      secondaryColor: 'none',
      name: 'Lightblue Buttondown',
      price: 55,
      picture: '/assets/Dress-Up/lightblue-dress-shirt.jpg'
    }, {
      collection_id: 1,
      shortSleeve: true,
      collared: false,
      buttonDown: false,
      mainColor: 'Beige',
      secondaryColor: 'none',
      name: 'Beige Tshirt',
      price: 30,
      picture: '/assets/Plain/beige-t-shirt.jpg'
    }, {
      collection_id: 1,
      shortSleeve: false,
      collared: false,
      buttonDown: false,
      mainColor: 'Black',
      secondaryColor: 'none',
      name: 'Black Longsleeve Turtleneck',
      price: 35,
      picture: '/assets/Plain/black-ls-t-shirt.jpg'
    }, {
      collection_id: 1,
      shortSleeve: true,
      collared: false,
      buttonDown: false,
      mainColor: 'Black',
      secondaryColor: 'none',
      name: 'Black Tshirt',
      price: 30,
      picture: '/assets/Plain/black-t-shirt.jpg'
    }, {
      collection_id: 1,
      shortSleeve: true,
      collared: false,
      buttonDown: false,
      mainColor: 'Blue',
      secondaryColor: 'none',
      name: 'Blue Tshirt',
      price: 30,
      picture: '/assets/Plain/blue-t-shirt.jpg'
    }, {
      collection_id: 1,
      shortSleeve: true,
      collared: false,
      buttonDown: false,
      mainColor: 'Green',
      secondaryColor: 'none',
      name: 'Green Tshirt',
      price: 30,
      picture: '/assets/Plain/green-t-shirt.jpg'
    }, {
      collection_id: 1,
      shortSleeve: true,
      collared: false,
      buttonDown: false,
      mainColor: 'Grey',
      secondaryColor: 'none',
      name: 'Grey Tshirt',
      price: 30,
      picture: '/assets/Plain/grey-t-shirt.jpg'
    }, {
      collection_id: 1,
      shortSleeve: true,
      collared: false,
      buttonDown: false,
      mainColor: 'Purple',
      secondaryColor: 'none',
      name: 'Purple Tshirt',
      price: 30,
      picture: '/assets/Plain/purple-t-shirt.jpg'
    }, {
      collection_id: 1,
      shortSleeve: true,
      collared: false,
      buttonDown: false,
      mainColor: 'Red',
      secondaryColor: 'none',
      name: 'Red Tshirt',
      price: 30,
      picture: '/assets/Plain/red-t-shirt.jpg'
    }, {
      collection_id: 1,
      shortSleeve: true,
      collared: false,
      buttonDown: false,
      mainColor: 'White',
      secondaryColor: 'none',
      name: 'White Tshirt',
      price: 30,
      picture: '/assets/Plain/white-t-shirt.jpg'
    }, {
      collection_id: 3,
      shortSleeve: false,
      collared: false,
      buttonDown: true,
      mainColor: 'Black',
      secondaryColor: 'none',
      name: 'Black Sportcoat',
      price: 80,
      picture: '/assets/Sporting/black-sportcoat.jpg'
    }, {
      collection_id: 3,
      shortSleeve: false,
      collared: false,
      buttonDown: true,
      mainColor: 'Blue',
      secondaryColor: 'none',
      name: 'Blue Sportcoat',
      price: 80,
      picture: '/assets/Sporting/blue-sportcoat.jpg'
    }, {
      collection_id: 3,
      shortSleeve: false,
      collared: false,
      buttonDown: true,
      mainColor: 'Darkgrey',
      secondaryColor: 'Lightgrey',
      name: 'Grey Square Patterned Sportcoat',
      price: 80,
      picture: '/assets/Sporting/gray-squares-sportcoat.jpg'
    }, {
      collection_id: 3,
      shortSleeve: false,
      collared: false,
      buttonDown: true,
      mainColor: 'Red',
      secondaryColor: 'Black',
      name: 'Red Sportcoat With Black Lining',
      price: 80,
      picture: '/assets/Sporting/red-sportcoat.jpg'
    }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tops', null, {})
  }
};
