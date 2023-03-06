const { Booking } = require('../sequelize')

module.exports.selectById = async (spaceId) => {
  const response = { status: false };
  try {
    const resFromRepo = await Booking.findOne({
      where: {
        id: spaceId
      }
    });
    console.log(resFromRepo)
    if (resFromRepo) {
      response.result = resFromRepo;
      response.status = true;
    } else {
      response.result = {msg: 'No booking found'};
      response.status = true;
    }
  } catch (err) {
    console.log('ERROR-BookingService-selectById: ', err);
  }
  return response;
}

module.exports.selectAll = async (queryParams, pagination) => {
  const response = { status: false };
  try {
    const Spaces = await Booking.findAll();
    if (Spaces.length > 0) {
      response.result = Spaces;
      response.status = true;
    } else {
      response.result = {
        msg: 'No Booking found'
      };
      response.status = true;
    }
  } catch (err) {
    console.log('ERROR-BookingService-selectAll: ', err);
  }
  return response;
}

module.exports.create = async (SpaceFromController) => {
  const response = { status: false };
  try {
    const SpaceCreated = await Booking.create(SpaceFromController);
    console.log(SpaceCreated)
    if (SpaceCreated.id) {
      response.result = SpaceCreated;
      response.status = true;
    }
  } catch (err) {
    console.log('ERROR-BookingService-create: ', err);
  }
  return response;
}

module.exports.update = async (id, data) => {
  const response = { status: false };
  try {
    console.log(id)
    console.log(data)
    const resFromRepo = await Booking.update(data , {
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
    console.log('ERROR-BookingService-update: ', err);
  }
  return response;
}
module.exports.delete = async (SpaceId) => {
  const response = { status: false };
  try {
    const resFromRepo = await Booking.destroy({
      where: {
        id: SpaceId
      }
    });
    console.log(resFromRepo)

    response.result = resFromRepo;
    response.status = true;

  } catch (err) {
    console.log('ERROR-BookingService-delete: ', err);
  }
  return response;
}