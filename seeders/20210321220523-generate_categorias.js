'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('categoria', [{
      Nombre: 'Categoría 1'
    }], {});

    await queryInterface.bulkInsert('categoria', [{
      Nombre: 'Categoría 2'
    }], {});

    await queryInterface.bulkInsert('categoria', [{
      Nombre: 'Categoría 3'
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('categoria', null, {});
  }
};
