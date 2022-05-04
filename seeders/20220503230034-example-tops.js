'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tops', [{
      collection_id: 2,
      short_sleeve: true,
      collared: true,
      button_down: true,
      main_color: 'Dark Grey',
      secondary_color: 'Gold',
      name: 'Black Short Sleeve Buttondown',
      price: 55,
      picture: '/assets/Dress-Up/black-ss-buttondown-dress-shirt.jpg'
    }, {
      collection_id: 2,
      short_sleeve: false,
      collared: true,
      button_down: true,
      main_color: 'Blue',
      secondary_color: 'White',
      name: 'Blue and White Square Patterned Buttondown',
      price: 65,
      picture: '/assets/Dress-Up/bluewhite-squares-dress-shirt.jpg'
    }, {
      collection_id: 2,
      short_sleeve: false,
      collared: true,
      button_down: true,
      main_color: 'Darkblue',
      secondary_color: 'White',
      name: 'Darkblue Anchor Patterned Buttondown',
      price: 50,
      picture: '/assets/Dress-Up/darkblue-anchor-dress-shirt.jpg'
    }, {
      collection_id: 2,
      short_sleeve: false,
      collared: true,
      button_down: true,
      main_color: 'White',
      secondary_color: 'Blue',
      name: 'White Blue/Green Speckled Buttondown',
      price: 60,
      picture: '/assets/Dress-Up/dotted-ls-dress-shirt.jpg'
    }, {
      collection_id: 2,
      short_sleeve: true,
      collared: true,
      button_down: true,
      main_color: 'White',
      secondary_color: 'none',
      name: 'White Shortsleeve Buttondown',
      price: 40,
      picture: '/assets/Dress-Up/light-dress-shirt.jpg'
    }, {
      collection_id: 2,
      short_sleeve: false,
      collared: true,
      button_down: true,
      main_color: 'Lightblue',
      secondary_color: 'none',
      name: 'Lightblue Buttondown',
      price: 55,
      picture: '/assets/Dress-Up/lightblue-dress-shirt.jpg'
    }, {
      collection_id: 1,
      short_sleeve: true,
      collared: false,
      button_down: false,
      main_color: 'Beige',
      secondary_color: 'none',
      name: 'Beige Tshirt',
      price: 30,
      picture: '/assets/Plain/beige-t-shirt.jpg'
    }, {
      collection_id: 1,
      short_sleeve: false,
      collared: false,
      button_down: false,
      main_color: 'Black',
      secondary_color: 'none',
      name: 'Black Longsleeve Turtleneck',
      price: 35,
      picture: '/assets/Plain/black-ls-t-shirt.jpg'
    }, {
      collection_id: 1,
      short_sleeve: true,
      collared: false,
      button_down: false,
      main_color: 'Black',
      secondary_color: 'none',
      name: 'Black Tshirt',
      price: 30,
      picture: '/assets/Plain/black-t-shirt.jpg'
    }, {
      collection_id: 1,
      short_sleeve: true,
      collared: false,
      button_down: false,
      main_color: 'Blue',
      secondary_color: 'none',
      name: 'Blue Tshirt',
      price: 30,
      picture: '/assets/Plain/blue-t-shirt.jpg'
    }, {
      collection_id: 1,
      short_sleeve: true,
      collared: false,
      button_down: false,
      main_color: 'Green',
      secondary_color: 'none',
      name: 'Green Tshirt',
      price: 30,
      picture: '/assets/Plain/green-t-shirt.jpg'
    }, {
      collection_id: 1,
      short_sleeve: true,
      collared: false,
      button_down: false,
      main_color: 'Grey',
      secondary_color: 'none',
      name: 'Grey Tshirt',
      price: 30,
      picture: '/assets/Plain/grey-t-shirt.jpg'
    }, {
      collection_id: 1,
      short_sleeve: true,
      collared: false,
      button_down: false,
      main_color: 'Purple',
      secondary_color: 'none',
      name: 'Purple Tshirt',
      price: 30,
      picture: '/assets/Plain/purple-t-shirt.jpg'
    }, {
      collection_id: 1,
      short_sleeve: true,
      collared: false,
      button_down: false,
      main_color: 'Red',
      secondary_color: 'none',
      name: 'Red Tshirt',
      price: 30,
      picture: '/assets/Plain/red-t-shirt.jpg'
    }, {
      collection_id: 1,
      short_sleeve: true,
      collared: false,
      button_down: false,
      main_color: 'White',
      secondary_color: 'none',
      name: 'White Tshirt',
      price: 30,
      picture: '/assets/Plain/white-t-shirt.jpg'
    }, {
      collection_id: 3,
      short_sleeve: false,
      collared: false,
      button_down: true,
      main_color: 'Black',
      secondary_color: 'none',
      name: 'Black Sportcoat',
      price: 80,
      picture: '/assets/Sporting/black-sportcoat.jpg'
    }, {
      collection_id: 3,
      short_sleeve: false,
      collared: false,
      button_down: true,
      main_color: 'Blue',
      secondary_color: 'none',
      name: 'Blue Sportcoat',
      price: 80,
      picture: '/assets/Sporting/blue-sportcoat.jpg'
    }, {
      collection_id: 3,
      short_sleeve: false,
      collared: false,
      button_down: true,
      main_color: 'Darkgrey',
      secondary_color: 'Lightgrey',
      name: 'Grey Square Patterned Sportcoat',
      price: 80,
      picture: '/assets/Sporting/gray-squares-sportcoat.jpg'
    }, {
      collection_id: 3,
      short_sleeve: false,
      collared: false,
      button_down: true,
      main_color: 'Red',
      secondary_color: 'Black',
      name: 'Red Sportcoat With Black Lining',
      price: 80,
      picture: '/assets/Sporting/red-sportcoat.jpg'
    }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tops', null, {})
  }
};
