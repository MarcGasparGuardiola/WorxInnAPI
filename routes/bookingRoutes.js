const express = require('express');
const router = express.Router();

const bookingController = require('../controllers/bookingController');
const joiMiddleware = require('../middlewares/joiMiddleware');
const userSchemas = require('../models/joi/userSchemas');


router.post('/create',
  //joiMiddleware.validate(userSchemas.createUserSchema, 'body'),
  bookingController.create
);
router.put('/update/:id',
  joiMiddleware.validate(userSchemas.selectUserSchema, 'params'),
  //joiMiddleware.validate(userSchemas.updateUserSchema, 'body'),
  bookingController.update
);
router.delete('/delete/:id',
  joiMiddleware.validate(userSchemas.selectUserSchema, 'params'),
  bookingController.delete
);
router.get('/details/:id',
  joiMiddleware.validate(userSchemas.selectUserSchema, 'params'),
  bookingController.selectById
);
router.get('/list',
  joiMiddleware.validate(userSchemas.selectAllSchema, 'query'),
  bookingController.selectAll
);


module.exports = router;