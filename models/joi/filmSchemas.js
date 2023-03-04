const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);


const actor = Joi.object().keys({
  firstName: Joi.string().regex(/([A-Z])\w+/).min(3).max(20).required(),
  lastName: Joi.string().regex(/([A-Z])\w+/).min(3).max(20).required(),
  _id: Joi.objectId().required()
});

module.exports.createFilmSchema = Joi.object({
  title: Joi.string().alphanum().min(2).max(50).required(),
  sinopsis: Joi.string().min(2).max(120).required(),
  director: Joi.string().regex(/([A-Z])\w+/).min(3).max(20).required(),
  releasedDate: Joi.date().required(),
  actors: Joi.array().items(actor).optional(),
});

module.exports.selectFilmSchema = Joi.object({
  id: Joi.objectId().required(),
});

module.exports.selectAllSchema = Joi.object({
  active: Joi.boolean().optional(),
  skip: Joi.number().integer().optional(),
  limit: Joi.number().integer().optional(),
  search: Joi.string().alphanum().optional()
}).and('skip', 'limit');



module.exports.updateFilmSchema = Joi.object({
  title: Joi.string().alphanum().min(2).max(50).optional(),
  sinopsis: Joi.string().min(2).max(120).optional(),
  director: Joi.string().regex(/([A-Z])\w+/).min(3).max(20).optional(),
  releasedDate: Joi.date().optional(),
  actors: Joi.array().items(actor).optional(),
});