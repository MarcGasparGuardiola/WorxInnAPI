const Sequelize = require('sequelize')
const process = require('process');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/config/config')[env];

const UserModel = require('./models/user')
const HotelUserModel = require('./models/hoteluser')
const SpaceModel = require('./models/space')
const SpaceTypeModel = require('./models/spacetype')
const WorxTypeModel = require('./models/worxtype')
const WorxModel = require('./models/worx')
const BookingModel = require('./models/booking') 


let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const User = UserModel(sequelize, Sequelize)
const HotelUser = HotelUserModel(sequelize, Sequelize)
const Space = SpaceModel(sequelize, Sequelize)
const SpaceType = SpaceTypeModel(sequelize, Sequelize)
const WorxType = WorxTypeModel(sequelize, Sequelize)
const Worx = WorxModel(sequelize, Sequelize)
const Booking = BookingModel(sequelize, Sequelize)


/*sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  })*/

module.exports = {
  User,
  HotelUser,
  Space,
  SpaceType,
  WorxType,
  Worx,
  Booking
}