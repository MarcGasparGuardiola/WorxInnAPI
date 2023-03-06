'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Space extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Space.belongsTo(models.HotelUser, { foreignKey: 'createdById', as: 'hotelUser'})
      Space.hasOne(models.SpaceType, {as: 'SpaceType'})
      Space.hasMany(model.SpecialDeals, {as: 'SpecialDeals'})
    }
  }
  Space.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    details: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: DataTypes.STRING,
    main_photo: DataTypes.STRING,
    city: DataTypes.STRING,
    tagline: DataTypes.STRING,
    website: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Space',
  });
  return Space;
};