const mongoose = require('mongoose');
const Film = require('../models/db/filmModel');
const filmRepository = require('../database/repository');
const c = require('../config/constants')

module.exports.selectById = async (filmId) => {
  const response = { status: false };
  try {
    const data = {
      _id: mongoose.Types.ObjectId(filmId),
      model: Film,
      projection: {

      }
    };
    const resFromRepo = await filmRepository.selectById(data);
    if (resFromRepo.status) {
      response.result = resFromRepo.result;
      response.status = true;
    }
  } catch (err) {
    console.log('ERROR-filmService-selectById: ', err);
  }
  return response;
}

module.exports.selectAll = async (queryParams, pagination) => {
  const response = { status: false };
  try {
    const data = {
      findQuery: queryParams,
      model: Film,
      projection: {
        __v: false
      }
    };
    if (pagination.skip && pagination.limit) {
      data.skip = pagination.skip;
      data.limit = pagination.limit;
    }
    const resFromRepo = await filmRepository.selectAll(data);
    if (resFromRepo.status) {
      response.result = resFromRepo.result;
      response.status = true;
    }
  } catch (err) {
    console.log('ERROR-filmService-selectAll: ', err);
  }
  return response;
}

module.exports.create = async (dataFromController) => {
  const responseObj = { status: false };
  console.log(dataFromController)
  try {
    const film = new Film(dataFromController);
    const responseFromRepository = await filmRepository.save(film);
    if (responseFromRepository.status) {
      responseObj.result = responseFromRepository.result;
      responseObj.status = true;
    }
  } catch (error) {
    responseObj.error = error;
    console.log(`ERROR-filmService-create: ${error}`);
  }
  return responseObj;
};

module.exports.update = async (film) => {
  const responseObj = { status: false };
  try {
    const data = {
      findQuery: { _id: mongoose.Types.ObjectId(film.id) },
      model: Film,
      projection: { __v: false },
      updateQuery: {}
    };
    if (film.title) data.updateQuery.title = film.title;
    if (film.director) data.updateQuery.director = film.director;
    if (film.sinopsis) data.updateQuery.sinopsis = film.sinopsis;
    if (film.releaseDate) data.updateQuery.releaseDate = film.releaseDate;
    const responseFromRepository = await filmRepository.findOneAndUpdate(data);
    if (responseFromRepository.status) {
      responseObj.result = responseFromRepository.result;
      responseObj.status = true;
    }
  } catch (error) {
    responseObj.error = error;
    console.log(`ERROR-filmService-update: ${error}`);
  }
  return responseObj;
};

module.exports.delete = async (filmId) => {
  const responseObj = { status: false };
  try {
    const data = {
      findQuery: { _id: mongoose.Types.ObjectId(filmId) },
      model: Film,
      projection: { __v: false}
    };
    const responseFromRepository = await filmRepository.findOneAndDelete(data);
    if (responseFromRepository.status) {
      if (responseFromRepository.result) {
        responseObj.result = responseFromRepository.result;
      } else {
        responseObj.result = c.status.notFound;
        responseObj.message = "Film not found";
      }

      responseObj.status = true;
    }
  } catch (error) {
    responseObj.error = error;
    console.log(`ERROR-filmService-delete: ${error}`);
  }
  return responseObj;
};