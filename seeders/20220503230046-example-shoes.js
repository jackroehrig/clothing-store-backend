'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('shoes', [{
      collection_id: 2,
      category: 'Dress Shoes',
      main_color: 'Black',
      secondary_color: 'none',
      name: 'Black Dress Shoes',
      price: 85,
      picture: '/assets/Dress-Up/black-dress-shoes.jpg'
    },{
      collection_id: 2,
      category: 'Sandals',
      main_color: 'Lightbrown',
      secondary_color: 'Pink',
      name: 'Lightbrown Sandals',
      price: 45,
      picture: '/assets/Dress-Up/brown-sandals.jpg'
    }, {
      collection_id: 2,
      category: 'Boots',
      main_color: 'Tan',
      secondary_color: 'Darkbrown',
      name: 'Tan Boots',
      price: 62,
      picture: '/assets/Dress-Up/tan-boots.jpg'
    }, {
      collection_id: 1,
      category: 'Athletic Shoes',
      main_color: 'Offwhite',
      secondary_color: 'White',
      name: 'Offwhite Tennis Shoes',
      price: 70,
      picture: '/assets/Plain/offwhite-sneakers.jpg'
    }, {
      collection_id: 4,
      category: 'Sandals',
      main_color: 'White',
      secondary_color: 'Green',
      name: 'White Beach Sandals With Brazil Logo',
      price: 35,
      picture: '/assets/Swim-Time/white-beach-sandals.jpg'
    }, {
      collection_id: 5,
      category: 'Sandals',
      main_color: 'Darkbrown',
      secondary_color: 'Lightbrown',
      name: 'Darkbrown Birkenstocks',
      price: 70,
      picture: '/assets/Unique/darkbrown-birkenstocks.jpg'
    }, {
      collection_id: 5,
      category: 'Boots',
      main_color: 'Orange',
      secondary_color: 'Black',
      name: 'Orange Rainboots',
      price: 80,
      picture: '/assets/Unique/orange-rain-boots.jpg'
    }, {
      collection_id: 5,
      category: 'Casual Shoes',
      main_color: 'Red',
      secondary_color: 'White',
      name: 'Red Lightup Casual Sneakers',
      price: 70,
      picture: '/assets/Unique/red-lightup-sneakers.jpg'
    }, {
      collection_id: 5,
      category: 'Boots',
      main_color: 'Darkbrown',
      secondary_color: 'Black',
      name: 'Darkbrown Steel-Toed Boots',
      price: 100,
      picture: '/assets/Unique/steel-toed-boots.jpg'
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('shoes', null, {})
  }
};
