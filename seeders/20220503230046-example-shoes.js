'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('shoes', [{
      collection_id: 2,
      category: 'Dress Shoe',
      mainColor: 'Black',
      secondaryColor: 'none',
      name: 'Black Dress Shoes',
      price: 85,
      picture: '/assets/Dress-Up/black-dress-shoes.jpg'
    },{
      collection_id: 2,
      category: 'Sandal',
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
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('shoes', null, {})
  }
};
