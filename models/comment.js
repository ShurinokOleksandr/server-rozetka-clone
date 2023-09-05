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
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    comment: DataTypes.STRING,
    text: DataTypes.STRING,
    id: DataTypes.STRING,
    parentId: DataTypes.STRING,
    parent: DataTypes.STRING,
    children: DataTypes.STRING,
    postId: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};