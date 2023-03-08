const { BookingState } = require('../sequelize')

module.exports.selectById = async (spaceId) => {
  const response = { status: false };
  try {
    const resFromRepo = await BookingState.findOne({
      where: {
        id: spaceId
      }
    });
    console.log(resFromRepo)
    if (resFromRepo) {
      response.result = resFromRepo;
      response.status = true;
    } else {
      response.result = {msg: 'No user found'};
      response.status = true;
    }
  } catch (err) {
    console.log('ERROR-BookingStateTypeService-selectById: ', err);
  }
  return response;
}

module.exports.selectAll = async (queryParams, pagination) => {
  const response = { status: false };
  try {
    const Spaces = await BookingState.findAll();
    if (Spaces.length > 0) {
      response.result = Spaces;
      response.status = true;
    } else {
      response.result = {
        msg: 'No Spaces found'
      };
      response.status = true;
    }
  } catch (err) {
    console.log('ERROR-BookingStateTypeService-selectAll: ', err);
  }
  return response;
}

module.exports.create = async (SpaceFromController) => {
  const response = { status: false };
  try {
    //TODO: Hash passwordA
    const SpaceCreated = await BookingState.create(SpaceFromController);
    console.log(SpaceCreated)
    if (SpaceCreated.id) {
      response.result = SpaceCreated;
      response.status = true;
    }
  } catch (err) {
    console.log('ERROR-BookingStateTypeService-create: ', err);
  }
  return response;
}

module.exports.update = async (id, data) => {
  const response = { status: false };
  try {
    console.log(id)
    console.log(data)
    const resFromRepo = await BookingState.update(data , {
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
    console.log('ERROR-BookingStateTypeService-update: ', err);
  }
  return response;
}
module.exports.delete = async (SpaceId) => {
  const response = { status: false };
  try {
    const resFromRepo = await BookingState.destroy({
      where: {
        id: SpaceId
      }
    });
    console.log(resFromRepo)

    response.result = resFromRepo;
    response.status = true;

  } catch (err) {
    console.log('ERROR-BookingStateTypeService-delete: ', err);
  }
  return response;
}