const { body } = require("express-validator")
const strings = require("../utils/strings")
validateRules = {}



validateRules.createUser = () => {
    return [
        body("*").escape().trim(),
        body("firstName").notEmpty().withMessage(strings.NAME_NOT_EMPTY),
        body("lastName").notEmpty().withMessage(strings.LASTNAME_NOT_EMPTY),
        body("email").notEmpty().withMessage(strings.EMAIL_NOT_EMPTY).isEmail().withMessage(strings.EMAIL_BAD_FORMAT),
        body("favoriteColor").notEmpty().withMessage(strings.COLOR_NOT_EMPTY),
        body("birthday").notEmpty().withMessage(strings.BIRTHDAY_NOT_EMPTY).isDate({ format: 'YYYY-MM-DD', strictMode: true })
            .withMessage(strings.BIRTHDAY_BAD_FORMAT)
    ]
}

module.exports = validateRules