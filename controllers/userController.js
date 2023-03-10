
const c = require('../config/constants');
const userService = require('../services/userService');

module.exports = {

  create: async (req, res) => {
    const response = { status: c.status.serverError, msg: 'Internal server error' };
    try {
      const user = req.body;
      const resFromService = await userService.create(user);
      if (resFromService.status) {
        response.status = c.status.created;
        response.msg = 'User created';
        response.body = resFromService.result;
      }
    } catch (err) {
      console.log('ERROR-userController-create: ', err);
      response.error = err;
    }
    res.status(response.status).send(response);
  },

  update: async (req, res) => {
    const response = { status: c.status.serverError, msg: 'Internal server error' };
    try {
      const resFromService = await userService.update(req.params.id, req.body);
      if (resFromService.result > 0) {
        response.status = c.status.ok;
        response.msg = 'User updated';
        response.body = resFromService.result;
      } else {
        response.status = c.status.notFound;
        response.msg = 'User not found';
      }
    } catch (err) {
      console.log('ERROR-userController-updated: ', err);
      response.error = err;
    }
    res.status(response.status).send(response);
  },

  delete: async (req, res) => {
    const response = { status: c.status.serverError, msg: 'Internal server error' };
    try {
      const userId = req.params.id;
      const resFromService = await userService.delete(userId);
      if (resFromService.status) {
        if (resFromService.result > 0) {
          response.status = c.status.ok;
          response.msg = 'User deleted';
          response.body = resFromService.result;
        } else {
          response.status = c.status.notFound;
          response.msg = 'User not found';
        }
      }
    } catch (err) {
      console.log('ERROR-userController-delete: ', err);
      response.error = err;
    }
    res.status(response.status).send(response);
  },

  selectById: async (req, res) => {
    const response = { status: c.status.serverError, msg: 'Internal server error' };
    try {
      const userId = req.params.id;
      const resFromService = await userService.selectById(userId);
      if (resFromService.status) {
        if (resFromService.result) {
          response.status = c.status.ok;
          response.msg = 'User found';
          response.body = resFromService.result;
        } else {
          response.status = c.status.notFound;
          response.msg = 'User not found';
        }
      }
    } catch (err) {
      console.log('ERROR-userController-selectById: ', err);
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
      const resFromService = await userService.selectAll(queryParams, pagination);
      if (resFromService.status) {
        // response.status = c.status.ok;
        // response.body = resFromService.result;
        if (resFromService.result) {
          response.status = c.status.ok;
          response.msg = 'Users found';
          response.body = resFromService.result;
        } else {
          response.status = c.status.notFound;
          response.msg = 'Users not found';
        }
      }
    } catch (err) {
      console.log('ERROR-userController-selectAll: ', err);
      response.error = err;
    }
    res.status(response.status).send(response);
  },
};