const express = require(`express`);
const router = express.Router();
const authController = require('../controllers/authController');
const joiSchemaValidation = require('../middlewares/joiMiddleware');
const authSchemas = require('../models/joi/authSchemas');

router.post(`/login`,
    joiSchemaValidation.validate(authSchemas.loginSchema, `body`),
    authController.login);

router.post(`/spaceuserlogin`,
    joiSchemaValidation.validate(authSchemas.loginSchema, `body`),
    authController.spaceuserlogin);

module.exports = router;