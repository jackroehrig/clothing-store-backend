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
    }, {
      collection_id: 1,
      shorts: true,
      swimwear: false,
      mainColor: 'Black',
      secondaryColor: 'none',
      name: 'Black Athletic Shorts',
      price: 30,
      picture: '/assets/Plain/black-shorts.jpg'
    }, {
      collection_id: 1,
      shorts: false,
      swimwear: false,
      mainColor: 'Black',
      secondaryColor: 'White',
      name: 'Black Sweatpants',
      price: 25,
      picture: '/assets/Plain/black-sweatpants.jpg'
    }, {
      collection_id: 1,
      shorts: false,
      swimwear: false,
      mainColor: 'Darkblue',
      secondaryColor: 'none',
      name: 'Darkblue Yoga Pants',
      price: 20,
      picture: '/assets/Plain/darkblue-yoga-pants.jpg'
    }, {
      collection_id: 1,
      shorts: true,
      swimwear: false,
      mainColor: 'Lightgrey',
      secondaryColor: 'none',
      name: 'Lightgrey Shorts',
      price: 20,
      picture: '/assets/Plain/grey-shorts.jpg'
    }, {
      collection_id: 1,
      shorts: false,
      swimwear: false,
      mainColor: 'Lightgrey',
      secondaryColor: 'none',
      name: 'Lightgrey Sweatpants',
      price: 30,
      picture: '/assets/Plain/grey-sweatpants.jpg'
    }, {
      collection_id: 4,
      shorts: true,
      swimwear: true,
      mainColor: 'Teal',
      secondaryColor: 'Pink',
      name: 'Teal Swim Shorts',
      price: 22,
      picture: '/assets/Swim-Time/teal-swim-shorts.jpg'
    }, {
      collection_id: 4,
      shorts: true,
      swimwear: true,
      mainColor: 'Blue',
      secondaryColor: 'Green',
      name: 'Tropical Swim Shorts',
      price: 30,
      picture: '/assets/Swim-Time/tropical-swim-shorts.jpg'
    }, {
      collection_id: 5,
      shorts: true,
      swimwear: false,
      mainColor: 'Blue',
      secondaryColor: 'White',
      name: 'Blue White Vertical Striped Shorts',
      price: 18,
      picture: '/assets/Unique/blue-white-stripped-shorts.jpg'
    }, {
      collection_id: 5,
      shorts: false,
      swimwear: false,
      mainColor: 'Grey',
      secondaryColor: 'White',
      name: 'Grey White Camo Sweatpants',
      price: 40,
      picture: '/assets/Unique/camo-sweatpants.jpg'
    }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bottoms', null, {})
  }
};
