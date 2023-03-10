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

router.post(`/admin`,
    joiSchemaValidation.validate(authSchemas.loginSchema, `body`),
    authController.adminLogin);

router.post(`/user`,
    joiSchemaValidation.validate(authSchemas.loginSchema, `body`),
    authController.userLogin);

router.post(`/spaceuser`,
    joiSchemaValidation.validate(authSchemas.loginSchema, `body`),
    authController.spaceUserLogin);
module.exports = router;