'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('shoes', [{
      collection_id: 2,
      category: 'Dress Shoes',
      mainColor: 'Black',
      secondaryColor: 'none',
      name: 'Black Dress Shoes',
      price: 85,
      picture: '/assets/Dress-Up/black-dress-shoes.jpg'
    },{
      collection_id: 2,
      category: 'Sandals',
      mainColor: 'Lightbrown',
      secondaryColor: 'Pink',
      name: 'Lightbrown Sandals',
      price: 45,
      picture: '/assets/Dress-Up/brown-sandals.jpg'
    }, {
      collection_id: 2,
      category: 'Boots',
      mainColor: 'Tan',
      secondaryColor: 'Darkbrown',
      name: 'Tan Boots',
      price: 62,
      picture: '/assets/Dress-Up/tan-boots.jpg'
    }, {
      collection_id: 1,
      category: 'Athletic Shoes',
      mainColor: 'Offwhite',
      secondaryColor: 'White',
      name: 'Offwhite Tennis Shoes',
      price: 70,
      picture: '/assets/Plain/offwhite-sneakers.jpg'
    }, {
      collection_id: 4,
      category: 'Sandals',
      mainColor: 'White',
      secondaryColor: 'Green',
      name: 'White Beach Sandals With Brazil Logo',
      price: 35,
      picture: '/assets/Swim-Time/white-beach-sandals.jpg'
    }, {
      collection_id: 5,
      category: 'Sandals',
      mainColor: 'Darkbrown',
      secondaryColor: 'Lightbrown',
      name: 'Darkbrown Birkenstocks',
      price: 70,
      picture: '/assets/Unique/darkbrown-birkenstocks.jpg'
    }, {
      collection_id: 5,
      category: 'Boots',
      mainColor: 'Orange',
      secondaryColor: 'Black',
      name: 'Orange Rainboots',
      price: 80,
      picture: '/assets/Unique/orange-rain-boots.jpg'
    }, {
      collection_id: 5,
      category: 'Casual Shoes',
      mainColor: 'Red',
      secondaryColor: 'White',
      name: 'Red Lightup Casual Sneakers',
      price: 70,
      picture: '/assets/Unique/red-lightup-sneakers.jpg'
    }, {
      collection_id: 5,
      category: 'Boots',
      mainColor: 'Darkbrown',
      secondaryColor: 'Black',
      name: 'Darkbrown Steel-Toed Boots',
      price: 100,
      picture: '/assets/Unique/steel-toed-boots.jpg'
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('shoes', null, {})
  }
};
