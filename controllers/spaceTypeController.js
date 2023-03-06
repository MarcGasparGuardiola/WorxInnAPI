
const c = require('../config/constants');
const spaceTypeService = require('../services/spaceTypesService');

module.exports = {

  create: async (req, res) => {
    const response = { status: c.status.serverError, msg: 'Internal server error' };
    try {
      const space = req.body;
      const resFromService = await spaceTypeService.create(space);
      if (resFromService.status) {
        response.status = c.status.created;
        response.msg = 'space created';
        response.body = resFromService.result;
      }
    } catch (err) {
      console.log('ERROR-spaceController-create: ', err);
      response.error = err;
    }
    res.status(response.status).send(response);
  },

  update: async (req, res) => {
    const response = { status: c.status.serverError, msg: 'Internal server error' };
    try {
      const resFromService = await spaceTypeService.update(req.params.id, req.body);
      if (resFromService.result > 0) {
        response.status = c.status.ok;
        response.msg = 'Space updated';
        response.body = resFromService.result;
      } else {
        response.status = c.status.notFound;
        response.msg = 'Space not found';
      }
    } catch (err) {
      console.log('ERROR-spaceController-updated: ', err);
      response.error = err;
    }
    res.status(response.status).send(response);
  },

  delete: async (req, res) => {
    const response = { status: c.status.serverError, msg: 'Internal server error' };
    try {
      const spaceId = req.params.id;
      const resFromService = await spaceTypeService.delete(spaceId);
      if (resFromService.status) {
        if (resFromService.result > 0) {
          response.status = c.status.ok;
          response.msg = 'Space deleted';
          response.body = resFromService.result;
        } else {
          response.status = c.status.notFound;
          response.msg = 'Space not found';
        }
      }
    } catch (err) {
      console.log('ERROR-spaceController-delete: ', err);
      response.error = err;
    }
    res.status(response.status).send(response);
  },

  selectById: async (req, res) => {
    const response = { status: c.status.serverError, msg: 'Internal server error' };
    try {
      const spaceId = req.params.id;
      const resFromService = await spaceTypeService.selectById(spaceId);
      if (resFromService.status) {
        if (resFromService.result) {
          response.status = c.status.ok;
          response.msg = 'Space found';
          response.body = resFromService.result;
        } else {
          response.status = c.status.notFound;
          response.msg = 'Space not found';
        }
      }
    } catch (err) {
      console.log('ERROR-spaceController-selectById: ', err);
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
      const resFromService = await spaceTypeService.selectAll(queryParams, pagination);
      if (resFromService.status) {
        // response.status = c.status.ok;
        // response.body = resFromService.result;
        if (resFromService.result) {
          response.status = c.status.ok;
          response.msg = 'Spaces found';
          response.body = resFromService.result;
        } else {
          response.status = c.status.notFound;
          response.msg = 'Spaces not found';
        }
      }
    } catch (err) {
      console.log('ERROR-spaceController-selectAll: ', err);
      response.error = err;
    }
    res.status(response.status).send(response);
  },
};