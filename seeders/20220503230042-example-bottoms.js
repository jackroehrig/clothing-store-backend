'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bottoms', [{
      collection_id: 2,
      shorts: false,
      swimwear: false,
      main_color: 'Darkblue',
      secondary_color: 'none',
      name: 'Darkblue Jeans',
      price: 50,
      picture: '/assets/Dress-Up/darkblue-jeans.jpg'
    }, {
      collection_id: 2,
      shorts: true,
      swimwear: false,
      main_color: 'Lightblue',
      secondary_color: 'Copper',
      name: 'Jean Shorts',
      price: 30,
      picture: '/assets/Dress-Up/jean-shorts.jpg'
    }, {
      collection_id: 1,
      shorts: true,
      swimwear: false,
      main_color: 'Black',
      secondary_color: 'none',
      name: 'Black Athletic Shorts',
      price: 30,
      picture: '/assets/Plain/black-shorts.jpg'
    }, {
      collection_id: 1,
      shorts: false,
      swimwear: false,
      main_color: 'Black',
      secondary_color: 'White',
      name: 'Black Sweatpants',
      price: 25,
      picture: '/assets/Plain/black-sweatpants.jpg'
    }, {
      collection_id: 1,
      shorts: false,
      swimwear: false,
      main_color: 'Darkblue',
      secondary_color: 'none',
      name: 'Darkblue Yoga Pants',
      price: 20,
      picture: '/assets/Plain/darkblue-yoga-pants.jpg'
    }, {
      collection_id: 1,
      shorts: true,
      swimwear: false,
      main_color: 'Lightgrey',
      secondary_color: 'none',
      name: 'Lightgrey Shorts',
      price: 20,
      picture: '/assets/Plain/grey-shorts.jpg'
    }, {
      collection_id: 1,
      shorts: false,
      swimwear: false,
      main_color: 'Lightgrey',
      secondary_color: 'none',
      name: 'Lightgrey Sweatpants',
      price: 30,
      picture: '/assets/Plain/grey-sweatpants.jpg'
    }, {
      collection_id: 4,
      shorts: true,
      swimwear: true,
      main_color: 'Teal',
      secondary_color: 'Pink',
      name: 'Teal Swim Shorts',
      price: 22,
      picture: '/assets/Swim-Time/teal-swim-shorts.jpg'
    }, {
      collection_id: 4,
      shorts: true,
      swimwear: true,
      main_color: 'Blue',
      secondary_color: 'Green',
      name: 'Tropical Swim Shorts',
      price: 30,
      picture: '/assets/Swim-Time/tropical-swim-shorts.jpg'
    }, {
      collection_id: 5,
      shorts: true,
      swimwear: false,
      main_color: 'Blue',
      secondary_color: 'White',
      name: 'Blue White Vertical Striped Shorts',
      price: 18,
      picture: '/assets/Unique/blue-white-stripped-shorts.jpg'
    }, {
      collection_id: 5,
      shorts: false,
      swimwear: false,
      main_color: 'Grey',
      secondary_color: 'White',
      name: 'Grey White Camo Sweatpants',
      price: 40,
      picture: '/assets/Unique/camo-sweatpants.jpg'
    }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bottoms', null, {})
  }
};
