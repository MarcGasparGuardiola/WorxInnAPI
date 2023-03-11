'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Worx extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Worx.belongsTo(models.Space, { as: 'Space' })
      Worx.hasOne(models.WorxType, { as: 'WorxType' })
    }
  }
  Worx.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    type: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    isVisible: DataTypes.BOOLEAN,
    main_photo: DataTypes.STRING(300)
  }, {
    sequelize,
    modelName: 'Worx',
  });
  return Worx;
};