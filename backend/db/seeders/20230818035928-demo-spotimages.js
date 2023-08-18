'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'SpotImages';

    return queryInterface.bulkInsert(options, [
      {
        url: 'https://example.com/image1.jpg',
        spotId: 1,
      },
      {
        url: 'https://example.com/image2.jpg',
        spotId: 1,
      },
      {
        url: 'https://example.com/image3.jpg',
        spotId: 2,
      },
    ], {});

},

  async down (queryInterface, Sequelize) {
    options.tableName = 'Bookings';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1, 2] }
    }, {});
  }
};
