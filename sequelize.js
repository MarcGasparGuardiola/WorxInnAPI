const Sequelize = require('sequelize')
const process = require('process');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/config/config')[env];


const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const db = {};

const UserModel = require('./models/user')
const HotelUserModel = require('./models/hoteluser')
const SpaceModel = require('./models/space')
const SpaceTypeModel = require('./models/spacetype')
const WorxTypeModel = require('./models/worxtype')
const WorxModel = require('./models/worx')
const BookingModel = require('./models/booking')
const SpecialDealModel = require('./models/specialdeals')
const ReviewModel = require('./models/review')
const AmenitieModel = require('./models/amenitie')
const HotelPhotoModel = require('./models/hotelphoto')
const WorxPhotoModel = require('./models/worxphoto')
const BookingStateModel = require('./models/bookingstate')

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(`${__dirname}/models`)
  .filter(file => {
    //console.log(file)
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, '/models/', file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  console.log(modelName)
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

const User = UserModel(sequelize, Sequelize)
const HotelUser = HotelUserModel(sequelize, Sequelize)
const Space = SpaceModel(sequelize, Sequelize)
const SpaceType = SpaceTypeModel(sequelize, Sequelize)
const WorxType = WorxTypeModel(sequelize, Sequelize)
const Worx = WorxModel(sequelize, Sequelize)
const Booking = BookingModel(sequelize, Sequelize)
const SpecialDeal = SpecialDealModel(sequelize, Sequelize)
const Review = ReviewModel(sequelize, Sequelize)
const Amenitie = AmenitieModel(sequelize, Sequelize)
const HotelPhoto = HotelPhotoModel(sequelize, Sequelize)
const WorxPhoto = WorxPhotoModel(sequelize, Sequelize)
const BookingState = BookingStateModel(sequelize, Sequelize)

//Associations
//TODO: Put associations in a separate file or in model
Space.belongsTo(HotelUser, { foreignKey: "hotelUserID", as: 'hotelUser' })
Space.belongsTo(SpaceType, { as: 'SpaceType' })
Space.belongsToMany(Amenitie, { through: 'Space_Amenities' })
Space.belongsToMany(HotelPhoto, { through: 'Space_photo' })

SpecialDeal.belongsTo(Space, { as: 'Space' })

Booking.belongsTo(Space, { as: 'Space' })
Booking.belongsTo(Worx, { as: 'Worx' })
Booking.belongsTo(User, { as: 'User' })
Booking.belongsToMany(SpecialDeal, { through: 'Booking_SpecialDeals' })
Booking.belongsTo(BookingState, {as: 'BookingState'})

Worx.belongsTo(Space, { as: 'Space' })
Worx.belongsTo(WorxType, { as: 'WorxType' })
Worx.belongsToMany(WorxPhoto, { through: 'Worx_Photo' })

Review.belongsTo(Space, { as: 'Space' })
Review.belongsTo(Worx, { as: 'Worx' })
Review.belongsTo(User, { as: 'User' })



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
  Booking,
  SpecialDeal,
  Amenitie,
  Review,
  HotelPhoto,
  WorxPhoto,
  BookingState
}