
const fetchService = require('../services/fetchService');
const c = require('../config/constants');

module.exports = {
    selectAll: async (req, res) => {
        const response = { status: c.status.serverError, msg: 'Internal server error' };
        try {
            const resFromService = await fetchService.getAllUsers();
            response.body = resFromService;
            response.status = resFromService.status;
            response.msg = resFromService.msg;
        } catch (err) {
            console.log('ERROR-fetchController-getAllUsers: ', err);
            response.error = err;
        }
        res.status(response.status).send(response);
    },

    getUser: async (req, res) => {
        let response = { status: 500, message: `Internal server error` };
        try {
            userId = req.params.id;
            response = await fetchService.singleUser(userId);
        } catch (error) {
            responseObj.error = error;
            console.log(`ERROR-filmController-update: ${error}`);
        }
        return res.status(response.status).send(response);
    },
};

