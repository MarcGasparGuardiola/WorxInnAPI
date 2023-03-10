'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorxPhoto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WorxPhoto.init({
    photo_url: DataTypes.STRING(350),
    isMain: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'WorxPhoto',
  });
  return WorxPhoto;
};