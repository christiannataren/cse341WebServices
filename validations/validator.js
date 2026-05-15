const { validationResult } = require("express-validator")
const utils = require("../utils/utils")
validator = {}


validator.validateContact = async (req, res, next) => {
    let errors = []
    errors = validationResult(req)
    
    if (!errors.isEmpty()) {
        // console.log(errors)
        next(utils.sendMessage(errors))

    } else {
        next();
    }
}

module.exports = validator