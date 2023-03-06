'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SpaceType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SpaceType.belongsTo(models.Space, { as: 'Space_SpaceType' })
    }
  }
  SpaceType.init({
    name: DataTypes.STRING,
    details: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SpaceType',
  });
  return SpaceType;
};