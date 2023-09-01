'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Comment.init({
    id: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    text: DataTypes.STRING,
    parentId: DataTypes.STRING,
    children: DataTypes.STRING,
    productId: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};