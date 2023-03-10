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
      console.log(models)
      // define association here
      models.Space.belongsTo(models.HotelUser, {  foreignKey: "hotelUserID", as: 'hotelUser'})
      models.Space.hasOne(models.SpaceType, {as: 'SpaceType'})
      models.Space.hasMany(models.SpecialDeals, {as: 'SpecialDeals'})
      console.log("/*------------SPACE ASSOCIATE-------------*/")
    }
  }
  Space.init({
    name: {
      type: DataTypes.STRING,
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
    isVisible: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Space',
  });
  return Space;
};