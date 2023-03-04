const express = require(`express`);
const router = express.Router();
const fetchController = require('../controllers/fetchController');


router.get(`/users`, fetchController.selectAll);

router.get('/user/:id', fetchController.getUser);

module.exports = router;