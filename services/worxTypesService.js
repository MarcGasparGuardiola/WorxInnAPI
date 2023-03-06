const { WorxType } = require('../sequelize')

module.exports.selectById = async (spaceId) => {
  const response = { status: false };
  try {
    const resFromRepo = await WorxType.findOne({
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
    console.log('ERROR-WorxTypeService-selectById: ', err);
  }
  return response;
}

module.exports.selectAll = async (queryParams, pagination) => {
  const response = { status: false };
  try {
    const Spaces = await WorxType.findAll();
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
    console.log('ERROR-WorxTypeService-selectAll: ', err);
  }
  return response;
}

module.exports.create = async (SpaceFromController) => {
  const response = { status: false };
  try {
    //TODO: Hash passwordA
    const SpaceCreated = await WorxType.create(SpaceFromController);
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
    const resFromRepo = await WorxType.update(data , {
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
    const resFromRepo = await WorxType.destroy({
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