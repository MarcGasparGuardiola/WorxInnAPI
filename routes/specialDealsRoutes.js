const express = require('express');
const router = express.Router();

const specialDealController = require('../controllers/specialDealController');
const joiMiddleware = require('../middlewares/joiMiddleware');
const userSchemas = require('../models/joi/userSchemas');


router.post('/create',
  //joiMiddleware.validate(userSchemas.createUserSchema, 'body'),
  specialDealController.create
);
router.put('/update/:id',
  joiMiddleware.validate(userSchemas.selectUserSchema, 'params'),
  //joiMiddleware.validate(userSchemas.updateUserSchema, 'body'),
  specialDealController.update
);
router.delete('/delete/:id',
  joiMiddleware.validate(userSchemas.selectUserSchema, 'params'),
  specialDealController.delete
);
router.get('/details/:id',
  joiMiddleware.validate(userSchemas.selectUserSchema, 'params'),
  specialDealController.selectById
);
router.get('/list',
  //joiMiddleware.validate(userSchemas.selectAllSchema, 'query'),
  specialDealController.selectAll
);


module.exports = router;