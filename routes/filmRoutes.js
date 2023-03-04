const express = require('express');
const router = express.Router();

const filmController = require('../controllers/filmsController');
const joiMiddleware = require('../middlewares/joiMiddleware');
const filmSchemas = require('../models/joi/filmSchemas');
const tokenValidation = require('../middlewares/tokenValidation');

router.get('/details/:id',
  tokenValidation.validate,
  joiMiddleware.validate(filmSchemas.selectFilmSchema, 'params'),
  filmController.selectById
);

router.get('/list',
  joiMiddleware.validate(filmSchemas.selectAllSchema, 'query'),
  filmController.selectAll
);

router.post('/create',
  tokenValidation.validate,
  joiMiddleware.validate(filmSchemas.createFilmSchema, 'body'),
  filmController.create);

router.put('/update/:id',
  tokenValidation.validate,
  joiMiddleware.validate(filmSchemas.selectFilmSchema, 'params'),
  joiMiddleware.validate(filmSchemas.updateFilmSchema, 'body'),
  filmController.update);

router.delete('/delete/:id',
  tokenValidation.validate,
  joiMiddleware.validate(filmSchemas.selectFilmSchema, 'params'),
  filmController.delete);

module.exports = router;