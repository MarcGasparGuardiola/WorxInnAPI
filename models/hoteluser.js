'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HotelUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HotelUser.hasMany(models.Space, { foreignKey: 'spaceId', as: 'spaces'})
    }
  }
  HotelUser.init({
    firstName:{
      type: DataTypes.STRING,
      allowNull: false
    } ,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: 'unique_email'
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      /*set(value) {
        // Storing passwords in plaintext in the database is terrible.
        // Hashing the value with an appropriate cryptographic hash function is better.
        this.setDataValue('password', hash(value));
      }*/
    },
    profile_photo: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngitem.com%2Fpimgs%2Fm%2F146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png&f=1&nofb=1&ipt=eb56eef89e78935c41e3d68f5570ebf8d7f6ca0dd1f7a6e1e6ea7b39a81979db&ipo=images'
    },
    confirmed_email: DataTypes.BOOLEAN
    
  }, {
    sequelize,
    modelName: 'HotelUser',
  });
  return HotelUser;
};