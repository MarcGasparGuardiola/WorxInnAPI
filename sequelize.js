const Sequelize = require('sequelize')
const process = require('process');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/config/config')[env];

const UserModel = require('./models/user')


let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const User = UserModel(sequelize, Sequelize)

/*sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  })*/

module.exports = {
  User,
}