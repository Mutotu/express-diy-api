"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.books.belongsTo(models.authors);
    }
  }
  books.init(
    {
      title: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      genre: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      year: {
        type: DataTypes.INTEGER,
        validate: {
          isNumeric: true,
          min: 0,
          max: 150,
        },
      },
      plotSummary: {
        type: DataTypes.STRING,
        validate: {
          len: 250,
        },
      },
      authorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "books",
    }
  );
  return books;
};
