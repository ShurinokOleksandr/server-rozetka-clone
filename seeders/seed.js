

const { faker } = require('@faker-js/faker');

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        return queryInterface.bulkInsert(
            'Comments',{
                text: 'hello',
                userId: 1,
                productId: 1,
            }
        );
    },

    async down (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Comments',null,{});
    }
};
