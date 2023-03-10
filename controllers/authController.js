const authService = require(`../services/authService`);
const jwt = require(`jsonwebtoken`);

module.exports.login = async (req, res) => {
    const responseObj = { status: 500, message: `Internal server error` };
    try {
        const user = req.body;
        const responseFromService = await authService.login(user);
        if (responseFromService.status) {
            if (responseFromService.result) {
                const token = jwt.sign(
                    { userId: responseFromService.result._id },
                    process.env.SECRET_KEY,
                    { expiresIn: `1h` }
                );
                responseObj.body = { token: token, id: responseFromService.result.id };
                responseObj.message = `User authenticated successfully`;
                responseObj.status = 200;
            } else {
                responseObj.message = `Invalid credentials`;
                responseObj.status = 400;
            }
        }
    } catch (error) {
        responseObj.error = error;
        console.log(`ERROR-authController-login: ${error}`);
    }
    return res.status(responseObj.status).send(responseObj);
}; 

module.exports.spaceuserlogin = async (req, res) => {
    const responseObj = { status: 500, message: `Internal server error` };
    try {
        const user = req.body;
        const responseFromService = await authService.loginSpaceUser(user);
        if (responseFromService.status) {
            if (responseFromService.result) {
                const token = jwt.sign(
                    { userId: responseFromService.result.id },
                    process.env.SECRET_KEY,
                    { expiresIn: `1h` }
                );
                responseObj.body = { token: token, id: responseFromService.result.id };
                responseObj.message = `Space User authenticated successfully`;
                responseObj.status = 200;
            } else {
                responseObj.message = `Invalid credentials`;
                responseObj.status = 400;
            }
        }
    } catch (error) {
        responseObj.error = error;
        console.log(`ERROR-authController-login: ${error}`);
    }
    return res.status(responseObj.status).send(responseObj);
}; 

module.exports.adminLogin = async (req, res) => {
    const responseObj = { status: 500, message: `Internal server error` };
    try {
        const user = req.body;
        const responseFromService = await authService.adminLogin(user);
        if (responseFromService.status) {
            if (responseFromService.result) {
                const token = jwt.sign(
                    { userId: responseFromService.result.id },
                    process.env.SECRET_KEY,
                    { expiresIn: `1h` }
                );
                responseObj.body = { token: token, id: responseFromService.result.id };
                responseObj.message = `Space User authenticated successfully`;
                responseObj.status = 200;
            } else {
                responseObj.message = `Invalid credentials`;
                responseObj.status = 400;
            }
        }
    } catch (error) {
        responseObj.error = error;
        console.log(`ERROR-authController-login: ${error}`);
    }
    return res.status(responseObj.status).send(responseObj);
}; 


module.exports.userLogin = async (req, res) => {
    const responseObj = { status: 500, message: `Internal server error` };
    try {
        const user = req.body;
        const responseFromService = await authService.userLogin(user);
        if (responseFromService.status) {
            if (responseFromService.result) {
                const token = jwt.sign(
                    { userId: responseFromService.result.id },
                    process.env.SECRET_KEY,
                    { expiresIn: `1h` }
                );
                responseObj.body = { token: token, id: responseFromService.result.id };
                responseObj.message = `Space User authenticated successfully`;
                responseObj.status = 200;
            } else {
                responseObj.message = `Invalid credentials`;
                responseObj.status = 400;
            }
        }
    } catch (error) {
        responseObj.error = error;
        console.log(`ERROR-authController-login: ${error}`);
    }
    return res.status(responseObj.status).send(responseObj);
}; 

module.exports.spaceUserLogin = async (req, res) => {
    const responseObj = { status: 500, message: `Internal server error` };
    try {
        const user = req.body;
        const responseFromService = await authService.spaceUserLogin(user);
        if (responseFromService.status) {
            if (responseFromService.result) {
                const token = jwt.sign(
                    { userId: responseFromService.result.id },
                    process.env.SECRET_KEY,
                    { expiresIn: `1h` }
                );
                responseObj.body = { token: token, id: responseFromService.result.id };
                responseObj.message = `Space User authenticated successfully`;
                responseObj.status = 200;
            } else {
                responseObj.message = `Invalid credentials`;
                responseObj.status = 400;
            }
        }
    } catch (error) {
        responseObj.error = error;
        console.log(`ERROR-authController-login: ${error}`);
    }
    return res.status(responseObj.status).send(responseObj);
}; 