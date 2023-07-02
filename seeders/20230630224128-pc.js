const { faker } = require('@faker-js/faker');

'use strict';

const pcManufactures = [
    'Artline',
    'QUBE',
    'COBRA',
    'Lenovo',
    'HP',
    'Acer',
    'Apple',
    'Dell',
    'DTOP',
]
const partsManufactures = [
    'Nvidia',
    'Intel',
    'Apple',
    'Radian',
    'Gasoline',
    'Politra',
    'Gola',
    'LER',
    'Berol',
]
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        return queryInterface.bulkInsert(
            'PcModels',
            [...Array(100)].map(() => ({
                pc_manufactures:
                    pcManufactures[
                        Math.floor(Math.random() * pcManufactures.length)
                    ],
                parts_manufactures:
                    partsManufactures[
                        Math.floor(Math.random() * partsManufactures.length)
                    ],
                price: faker.random.numeric(4),
                name: faker.lorem.sentence(2),
                description: faker.lorem.sentence(10),
                images: JSON.stringify(
                    [...Array(7)].map(
                        () =>
                            `${faker.image.technics()}?random=${faker.random.numeric(30)}`,
                    ),
                ),
                vendor_code: faker.internet.password(),
                in_stock: faker.random.numeric(1),
                bestsellers: faker.datatype.boolean(),
                new: faker.datatype.boolean(),
                popularity: faker.random.numeric(3),
                compatibity: faker.lorem.sentence(7),
                createdAt: new Date(),
                updatedAt: new Date(),
            })),
        );
    },

    async down (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('PcModels',null,{});
    }
};
