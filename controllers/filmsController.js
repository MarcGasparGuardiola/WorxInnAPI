const c = require('../config/constants');
const filmService = require('../services/filmService');

module.exports = {
  selectById: async (req, res) => {
    const response = { status: c.status.serverError, msg: 'Internal server error' };
    try {
      const filmId = req.params.id;
      const resFromService = await filmService.selectById(filmId);
      if (resFromService.status) {
        if (resFromService.result) {
          response.status = c.status.ok;
          response.msg = 'Film found';
          response.body = resFromService.result;
        } else {
          response.status = c.status.notFound;
          response.msg = 'Film not found';
        }
      }
    } catch (err) {
      console.log('ERROR-FilmController-selectById: ', err);
      response.error = err;
    }
    res.status(response.status).send(response);
  },

  selectAll: async (req, res) => {
    const response = { status: c.status.serverError, msg: 'Internal server error' };
    try {
      const queryParams = {};
      if (req.query.active) queryParams.active = req.query.active;
      const pagination = {};
      if (req.query.skip) pagination.skip = +req.query.skip;
      if (req.query.limit) pagination.limit = +req.query.limit;
      if (req.query.search) queryParams.title = {$regex : `^${req.query.search}`}
      console.log(queryParams)
      const resFromService = await filmService.selectAll(queryParams, pagination);
      if (resFromService.status) {
        // response.status = c.status.ok;
        // response.body = resFromService.result;
        if (resFromService.result) {
          response.status = c.status.ok;
          response.msg = 'Films found';
          response.body = resFromService.result;
        } else {
          response.status = c.status.notFound;
          response.msg = 'Films not found';
        }
      }
    } catch (err) {
      console.log('ERROR-filmController-selectAll: ', err);
      response.error = err;
    }

    res.render('index', {
      films: response.body,
    });
    //res.status(response.status).send(response);
  },

  create: async (req, res) => {
    const responseObj = { status: c.status.serverError, message: 'Internal server error' };
    try {
      const data = req.body;
      const responseFromService = await filmService.create(data);
      if (responseFromService.status) {
        responseObj.body = responseFromService.result;
        responseObj.message = 'Film created successfully';
        responseObj.status = c.status.created;
      }
    } catch (error) {
      responseObj.error = error;
      console.log('ERROR-filmController-create: ${error}');
    }
    return res.status(responseObj.status).send(responseObj);
  },

  update: async (req, res) => {
    const responseObj = { status: 500, message: `Internal server error` };
    try {
      const film = req.body;
      film.id = req.params.id;
      const responseFromService = await filmService.update(film);
      if (responseFromService.status) {
        responseObj.body = responseFromService.result;
        responseObj.message = `Film updated successfully`;
        responseObj.status = 200;
      }
    } catch (error) {
      responseObj.error = error;
      console.log(`ERROR-filmController-update: ${error}`);
    }
    return res.status(responseObj.status).send(responseObj);
  },

  delete: async (req, res) => {
    const responseObj = { status: 500, message: `Internal server error` };
    try {
      const filmId = req.params.id;
      const responseFromService = await filmService.delete(filmId);
      if (responseFromService.status) {
        responseObj.body = responseFromService.result;
        responseObj.message = `Film removed successfully`;
        responseObj.status = 200;
      }
    } catch (error) {
      responseObj.error = error;
      console.log(`ERROR-filmController-delete: ${error}`);
    }
    return res.status(responseObj.status).send(responseObj);
  },
};