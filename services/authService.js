
const { User } = require('../sequelize')

module.exports.login = async (user) => {
    const responseObj = { status: false };
    try {
        const resFromRepo = await User.findAll({
            where: {
                email: user.email,
                password: user.password
            }
        });
        if (resFromRepo.length === 1) {
            responseObj.result = resFromRepo;
            responseObj.status = true;
        }
    } catch (error) {
        responseObj.error = error;
        console.log(`ERROR-authService-login: ${error}`);
    }
    return responseObj;
};