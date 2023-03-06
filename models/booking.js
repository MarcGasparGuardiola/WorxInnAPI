'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking.hasOne(models.Space, { as: 'Space' })
      Booking.hasOne(models.Worx, { as: 'Worx' })
      Booking.hasOne(models.User, { as: 'User' })
      Booking.belongsToMany(models.SpecialDeals, { through: 'Booking_SpecialDeals' })
    }
  }
  Booking.init({
    from: DataTypes.DATE,
    to: DataTypes.DATE,
    notes: DataTypes.STRING,
    totalPrice: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};