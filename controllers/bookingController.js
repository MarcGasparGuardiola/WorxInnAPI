
const c = require('../config/constants');
const bookingService = require('../services/bookingService');

module.exports = {

  create: async (req, res) => {
    const response = { status: c.status.serverError, msg: 'Internal server error' };
    try {
      const space = req.body;
      const resFromService = await bookingService.create(space);
      if (resFromService.status) {
        response.status = c.status.created;
        response.msg = 'space created';
        response.body = resFromService.result;
      }
    } catch (err) {
      console.log('ERROR-bookingController-create: ', err);
      response.error = err;
    }
    res.status(response.status).send(response);
  },

  update: async (req, res) => {
    const response = { status: c.status.serverError, msg: 'Internal server error' };
    try {
      const resFromService = await bookingService.update(req.params.id, req.body);
      if (resFromService.result > 0) {
        response.status = c.status.ok;
        response.msg = 'Booking updated';
        response.body = resFromService.result;
      } else {
        response.status = c.status.notFound;
        response.msg = 'Booking not found';
      }
    } catch (err) {
      console.log('ERROR-bookingController-updated: ', err);
      response.error = err;
    }
    res.status(response.status).send(response);
  },

  delete: async (req, res) => {
    const response = { status: c.status.serverError, msg: 'Internal server error' };
    try {
      const spaceId = req.params.id;
      const resFromService = await bookingService.delete(spaceId);
      if (resFromService.status) {
        if (resFromService.result > 0) {
          response.status = c.status.ok;
          response.msg = 'Booking deleted';
          response.body = resFromService.result;
        } else {
          response.status = c.status.notFound;
          response.msg = 'Booking not found';
        }
      }
    } catch (err) {
      console.log('ERROR-bookingController-delete: ', err);
      response.error = err;
    }
    res.status(response.status).send(response);
  },

  selectById: async (req, res) => {
    const response = { status: c.status.serverError, msg: 'Internal server error' };
    try {
      const spaceId = req.params.id;
      const resFromService = await bookingService.selectById(spaceId);
      if (resFromService.status) {
        if (resFromService.result) {
          response.status = c.status.ok;
          response.msg = 'Booking found';
          response.body = resFromService.result;
        } else {
          response.status = c.status.notFound;
          response.msg = 'Booking not found';
        }
      }
    } catch (err) {
      console.log('ERROR-BookingController-selectById: ', err);
      response.error = err;
    }
    res.status(response.status).send(response);
  },

  selectAll: async (req, res) => {
    const response = { status: c.status.serverError, msg: 'Internal server error' };
    try {
      const resFromService = await bookingService.selectAll(res.query);
      if (resFromService.status) {
        // response.status = c.status.ok;
        // response.body = resFromService.result;
        if (resFromService.result) {
          response.status = c.status.ok;
          response.msg = 'Booking found';
          response.body = resFromService.result;
        } else {
          response.status = c.status.notFound;
          response.msg = 'Booking not found';
        }
      }
    } catch (err) {
      console.log('ERROR-BookingController-selectAll: ', err);
      response.error = err;
    }
    res.status(response.status).send(response);
  },
};