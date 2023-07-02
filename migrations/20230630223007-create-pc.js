'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('PcModels', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            pc_manufactures: {
                type: Sequelize.STRING,
            },
            price: {
                type: Sequelize.INTEGER,
            },
            parts_manufactures: {
                type: Sequelize.STRING,
            },
            vendor_code: {
                type: Sequelize.STRING,
            },
            name: {
                type: Sequelize.STRING,
            },
            description: {
                type: Sequelize.STRING(2080),
            },
            images: {
                type: Sequelize.STRING(2080),
            },
            in_stock: {
                type: Sequelize.INTEGER,
            },
            bestsellers: {
                type: Sequelize.BOOLEAN,
            },
            new: {
                type: Sequelize.BOOLEAN,
            },
            popularity: {
                type: Sequelize.INTEGER,
            },
            compatibity: {
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('PcModels');
    }
};
