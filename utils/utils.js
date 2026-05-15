

utils = {}

utils.sendMessage = function (message) {
    console.log(message.constructor)
    message = message.errors || message
    return {
        message: message
    }
}

utils.sanitizeContact = function (req) {
    let data = ["firstName", "lastName", "email", "favoriteColor", "birthday"]
    let contact = {}
    data.forEach((value) => {
        contact[value] = req.body[value]
    })
    return contact;
}

module.exports = utils