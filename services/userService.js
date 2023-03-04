const { User } = require('../sequelize')

module.exports.selectById = async (userId) => {
  const response = { status: false };
  console.log(User)
  try {
    const resFromRepo = await User.findAll({
      where: {
        id: userId
      }
    });
    if (resFromRepo.length === 1) {
      response.result = resFromRepo;
      response.status = true;
    }
  } catch (err) {
    console.log('ERROR-userService-selectById: ', err);
  }
  return response;
}

module.exports.selectAll = async (queryParams, pagination) => {
  const response = { status: false };
  try {
    const data = {
      findQuery: queryParams,
      model: User,
      projection: {

      }
    };
    if (pagination.skip && pagination.limit) {
      data.skip = pagination.skip;
      data.limit = pagination.limit;
    }
    const users = await User.findAll();
    if (users.length > 0) {
      response.result = users;
      response.status = true;
    } else {
      response.result = {
        msg: 'No users found'
      };
      response.status = true;
    }
  } catch (err) {
    console.log('ERROR-userService-selectAll: ', err);
  }
  return response;
}

module.exports.create = async (userFromController) => {
  const response = { status: false };
  try {
    //TODO: Hash passwordA
    const userCreated = await User.create(userFromController);
    console.log(userCreated)
    if (userCreated.id) {
      response.result = userCreated;
      response.status = true;
    }
  } catch (err) {
    console.log('ERROR-userService-create: ', err);
  }
  return response;
}

module.exports.update = async (id, data) => {
  const response = { status: false };
  try {
    console.log(id)
    console.log(data)
    const resFromRepo = await User.update(data , {
      where: {
        id: id
      }
    });
    console.log(resFromRepo)
    if (resFromRepo) {
      response.result = resFromRepo;
      response.status = true;
    }
  } catch (err) {
    console.log('ERROR-userService-update: ', err);
  }
  return response;
}
module.exports.delete = async (userId) => {
  const response = { status: false };
  try {
    const resFromRepo = await User.destroy({
      where: {
        id: userId
      }
    });
    console.log(resFromRepo)

    response.result = resFromRepo;
    response.status = true;

  } catch (err) {
    console.log('ERROR-userService-delete: ', err);
  }
  return response;
}