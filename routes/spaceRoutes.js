const express = require('express');
const router = express.Router();

const spaceController = require('../controllers/spaceController');
const joiMiddleware = require('../middlewares/joiMiddleware');
const userSchemas = require('../models/joi/userSchemas');


router.post('/create',
  //joiMiddleware.validate(userSchemas.createUserSchema, 'body'),
  spaceController.create
);
router.put('/update/:id',
  joiMiddleware.validate(userSchemas.selectUserSchema, 'params'),
  //joiMiddleware.validate(userSchemas.updateUserSchema, 'body'),
  spaceController.update
);
router.delete('/delete/:id',
  joiMiddleware.validate(userSchemas.selectUserSchema, 'params'),
  spaceController.delete
);
router.get('/details/:id',
  joiMiddleware.validate(userSchemas.selectUserSchema, 'params'),
  spaceController.selectById
);
router.get('/list',
  joiMiddleware.validate(userSchemas.selectAllSchema, 'query'),
  spaceController.selectAll
);


module.exports = router;