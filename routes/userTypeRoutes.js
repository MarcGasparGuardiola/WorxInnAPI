const express = require('express');
const router = express.Router();

const userTypeController = require('../controllers/userTypeController');
const joiMiddleware = require('../middlewares/joiMiddleware');
const userSchemas = require('../models/joi/userSchemas');


router.post('/create',
  //joiMiddleware.validate(userSchemas.createUserSchema, 'body'),
  userTypeController.create
);
router.put('/update/:id',
  joiMiddleware.validate(userSchemas.selectUserSchema, 'params'),
  //joiMiddleware.validate(userSchemas.updateUserSchema, 'body'),
  userTypeController.update
);
router.delete('/delete/:id',
  joiMiddleware.validate(userSchemas.selectUserSchema, 'params'),
  userTypeController.delete
);
router.get('/details/:id',
  joiMiddleware.validate(userSchemas.selectUserSchema, 'params'),
  userTypeController.selectById
);
router.get('/list',
  joiMiddleware.validate(userSchemas.selectAllSchema, 'query'),
  userTypeController.selectAll
);


module.exports = router;