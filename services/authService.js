
const { User, HotelUser } = require('../sequelize')


module.exports.login = async (user) => {
    const responseObj = { status: false };
    try {
        const resFromRepo = await User.findOne({
            where: {
                email: user.email,
                password: user.password
            }
        });
        if (resFromRepo) {
            responseObj.result = resFromRepo;
            responseObj.status = true;
        } else {
            responseObj.result = null;
            responseObj.status = true;
        }
    } catch (error) {
        responseObj.error = error;
        console.log(`ERROR-authService-login: ${error}`);
    }
    return responseObj;
};

module.exports.loginSpaceUser = async (user) => {
    const responseObj = { status: false };
    try {
        const resFromRepo = await HotelUser.findOne({
            where: {
                email: user.email,
                password: user.password
            }
        });
        if (resFromRepo) {
            responseObj.result = resFromRepo;
            responseObj.status = true;
        } else {
            responseObj.result = null;
            responseObj.status = true;
        }
    } catch (error) {
        responseObj.error = error;
        console.log(`ERROR-authService-loginSpaceUser: ${error}`);
    }
    return responseObj;
};

module.exports.adminLogin = async (user) => {
    const responseObj = { status: false };
    try {
        const resFromRepo = await User.findOne({
            where: {
                email: user.email,
                password: user.password,
                UserTypeId: 1
            }
        });
        if (resFromRepo) {
            responseObj.result = resFromRepo;
            responseObj.status = true;
        } else {
            responseObj.result = null;
            responseObj.status = true;
        }
    } catch (error) {
        responseObj.error = error;
        console.log(`ERROR-authService-loginSpaceUser: ${error}`);
    }
    return responseObj;
};

module.exports.userLogin = async (user) => {
    const responseObj = { status: false };
    try {
        const resFromRepo = await User.findOne({
            where: {
                email: user.email,
                password: user.password,
                UserTypeId: 2
            }
        });
        if (resFromRepo) {
            responseObj.result = resFromRepo;
            responseObj.status = true;
        } else {
            responseObj.result = null;
            responseObj.status = true;
        }
    } catch (error) {
        responseObj.error = error;
        console.log(`ERROR-authService-loginSpaceUser: ${error}`);
    }
    return responseObj;
};

module.exports.spaceUserLogin = async (user) => {
    const responseObj = { status: false };
    try {
        const resFromRepo = await User.findOne({
            where: {
                email: user.email,
                password: user.password,
                UserTypeId: 3
            }
        });
        if (resFromRepo) {
            responseObj.result = resFromRepo;
            responseObj.status = true;
        } else {
            responseObj.result = null;
            responseObj.status = true;
        }
    } catch (error) {
        responseObj.error = error;
        console.log(`ERROR-authService-loginSpaceUser: ${error}`);
    }
    return responseObj;
};