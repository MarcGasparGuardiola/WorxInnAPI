module.exports.getAllUsers = async () => {
    let response = {status: false}
    try {
        const promise = await fetch('https://reqres.in/api/users')
        const users = await promise.json();

        console.log(users)

        response = {
            status: promise.status,
            msg: promise.msg,
            body: users,
        };
    } catch (err) {
        console.log('ERROR fetchService, getAllUsers: ', err)
    }
    return response
}

module.exports.singleUser = async (id) => {
    let response = {status: false}
    try {
        const promise = await fetch(`https://reqres.in/api/users/${id}`)
        const users = await promise.json();

        console.log(users)

        response = {
            status: promise.status,
            msg: promise.msg,
            body: users,
        };
    } catch (err) {
        console.log('ERROR fetchService, getAllUsers: ', err)
    }
    return response
}