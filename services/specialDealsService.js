const { SpecialDeal } = require('../sequelize')

module.exports.selectById = async (userId) => {
  const response = { status: false };
  try {
    const resFromRepo = await SpecialDeal.findAll({
      where: {
        id: userId
      }
    });
    if (resFromRepo) {
      response.result = resFromRepo;
      response.status = true;
    } else {
      response.result = {msg: 'No user found'};
      response.status = true;
    }
  } catch (err) {
    console.log('ERROR-userService-selectById: ', err);
  }
  return response;
}

module.exports.selectAll = async (queryParams) => {
  const response = { status: false };
  try {
    const users = await SpecialDeal.findAll({where: queryParams});
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
    const userCreated = await SpecialDeal.create(userFromController);
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
    const resFromRepo = await SpecialDeal.update(data , {
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
    const resFromRepo = await SpecialDeal.destroy({
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