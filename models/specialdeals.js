'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SpecialDeals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SpecialDeals.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    spaceId: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    from: DataTypes.DATE,
    to: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'SpecialDeals',
  });
  return SpecialDeals;
};