'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CommentsModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CommentsModel.init({
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    text: DataTypes.STRING,
    id: DataTypes.NUMBER,
    parentId: DataTypes.NUMBER,
    parent: DataTypes.STRING,
    children: DataTypes.STRING,
    productId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CommentsModel',
  });
  return CommentsModel;
};