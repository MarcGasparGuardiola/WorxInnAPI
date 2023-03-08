const express = require('express');
const router = express.Router();

const bookingStateController = require('../controllers/bookingStateController');
const joiMiddleware = require('../middlewares/joiMiddleware');
const userSchemas = require('../models/joi/userSchemas');


router.post('/create',
  //joiMiddleware.validate(userSchemas.createUserSchema, 'body'),
  bookingStateController.create
);
router.put('/update/:id',
  joiMiddleware.validate(userSchemas.selectUserSchema, 'params'),
  //joiMiddleware.validate(userSchemas.updateUserSchema, 'body'),
  bookingStateController.update
);
router.delete('/delete/:id',
  joiMiddleware.validate(userSchemas.selectUserSchema, 'params'),
  bookingStateController.delete
);
router.get('/details/:id',
  joiMiddleware.validate(userSchemas.selectUserSchema, 'params'),
  bookingStateController.selectById
);
router.get('/list',
  joiMiddleware.validate(userSchemas.selectAllSchema, 'query'),
  bookingStateController.selectAll
);


module.exports = router;