'use strict';
const {
    Model
} = require('sequelize');
const { Column } = require("sequelize-typescript");
module.exports = (sequelize, DataTypes) => {
    class PcModels extends Model {
        /**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
        static associate(models) {
            // define association here
        }
    }
    PcModels.init({
        pc_manufactures: DataTypes.STRING,
        price: DataTypes.INTEGER,
        parts_manufactures: DataTypes.STRING,
        vendor_code: DataTypes.STRING,
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        images: DataTypes.STRING,
        in_stock: DataTypes.INTEGER,
        bestsellers: DataTypes.BOOLEAN,
        new: DataTypes.BOOLEAN,
        popularity: DataTypes.INTEGER,
        compatibity:DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'PcModels',
    });
    return PcModels;
};
