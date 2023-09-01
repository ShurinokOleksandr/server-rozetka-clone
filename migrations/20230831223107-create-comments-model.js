'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('CommentsModels', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            text: {
                type: Sequelize.STRING
            },
            parentId: {
                type: Sequelize.INTEGER
            },
            children: {
                type: Sequelize.INTEGER
            },
            productId: {
                type: Sequelize.STRING
            }
        });
    },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CommentsModels');
  }
};
