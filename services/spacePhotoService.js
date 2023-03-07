const { HotelPhoto } = require('../sequelize')

module.exports.selectById = async (spaceId) => {
  const response = { status: false };
  try {
    const resFromRepo = await HotelPhoto.findOne({
      where: {
        id: spaceId
      }
    });
    console.log(resFromRepo)
    if (resFromRepo) {
      response.result = resFromRepo;
      response.status = true;
    } else {
      response.result = {msg: 'No review found'};
      response.status = true;
    }
  } catch (err) {
    console.log('ERROR-ReviewService-selectById: ', err);
  }
  return response;
}

module.exports.selectAll = async (queryParams, pagination) => {
  const response = { status: false };
  try {
    const Spaces = await HotelPhoto.findAll();
    if (Spaces.length > 0) {
      response.result = Spaces;
      response.status = true;
    } else {
      response.result = {
        msg: 'No Reviews found'
      };
      response.status = true;
    }
  } catch (err) {
    console.log('ERROR-WorxTypeService-selectAll: ', err);
  }
  return response;
}

module.exports.create = async (SpaceFromController) => {
  const response = { status: false };
  try {
    //TODO: Hash passwordA
    const SpaceCreated = await HotelPhoto.create(SpaceFromController);
    console.log(SpaceCreated)
    if (SpaceCreated.id) {
      response.result = SpaceCreated;
      response.status = true;
    }
  } catch (err) {
    console.log('ERROR-WorxTypeService-create: ', err);
  }
  return response;
}

module.exports.update = async (id, data) => {
  const response = { status: false };
  try {
    console.log(id)
    console.log(data)
    const resFromRepo = await HotelPhoto.update(data , {
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
    console.log('ERROR-WorxTypeService-update: ', err);
  }
  return response;
}
module.exports.delete = async (SpaceId) => {
  const response = { status: false };
  try {
    const resFromRepo = await HotelPhoto.destroy({
      where: {
        id: SpaceId
      }
    });
    console.log(resFromRepo)

    response.result = resFromRepo;
    response.status = true;

  } catch (err) {
    console.log('ERROR-WorxTypeService-delete: ', err);
  }
  return response;
}