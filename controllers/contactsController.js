const controller = {}
const e = require("express");
const contacts = require("../models/contacts.js")
const utils = require("../utils/utils.js")
const strings = require("../utils/strings.js")





controller.getByID = async function (req, res, next) {
    //#swagger.tags=["Contacts"]
    //#swagger.summary="Get a contact BY ID"
    let { id } = req.params;
    try {
        let contact = await contacts.getByID(id);
        if (contact) {
            res.status(200).json(contact);
        } else {
            next(utils.constructError(strings.CONTACT_NOT_FOUND, 404))
        }
    } catch (error) {
        next(error)
    }

}
controller.updateContact = async function (req, res, next) {
    //#swagger.tags=["Contacts"]
    //#swagger.summary="Update a contact sending the following data"
    /* #swagger.parameters['body'] = {
    in: 'body',
    description: 'Contact to update',
    required: true,
    schema: {
        $firstName: 'John',
        $lastName: 'Doe',
        $email: 'john@example.com',
        $favoriteColor: 'blue',
        $birthday: '1990-01-15'
    }
} */
    if (req.is("application/json")) {
        let { id } = req.params;
        try {
            let contact = await contacts.getByID(id);
            if (contact) {
                let sanContact = utils.sanitizeContact(req)
                let update = await contacts.updateContact(id, sanContact)
                if (update.matchedCount == 1) {
                    res.status(200).json({ status: true, message: strings.CONTACT_UPDATED });
                } else {
                    next(utils.constructError(strings.CONTACT_FAIL_UPDATED))

                }

            } else {
                next(utils.constructError(strings.CONTACT_NOT_FOUND, 404))
            }
        } catch (error) {
            next(error)
        }
    } else {
        next(utils.constructError("Unsupported format"))
    }

}
controller.deleteContact = async function (req, res, next) {
    //#swagger.tags=["Contacts"]
    //#swagger.summary="DELETE a contact BY ID"
    let { id } = req.params;
    try {
        let contact = await contacts.getByID(id);
        if (contact) {
            let del = await contacts.deleteContact(id);
            if (del.deletedCount == 1) {
                res.status(200).json({ status: true, message: strings.CONTACT_DELETED })
            } else {
                next(utils.constructError(strings.CONTACT_DELETED_FAIL))
            }
        } else {
            next(utils.constructError(strings.CONTACT_NOT_FOUND, 404))
        }
    } catch (error) {
        next(error)
    }

}

controller.getAll = async function (req, res, next) {
    //#swagger.tags=["Contacts"]
    //#swagger.summary="Get all the contacts"
    try {
        let data = await contacts.getContacts();
        res.status(200).json(data);
    } catch (error) {
        next({ message: "Fail fetching contacts" })
    }
}


controller.create = async function (req, res, next) {
    //#swagger.tags=["Contacts"]
    //#swagger.summary="Create a new Contact sending the following data"
    /* #swagger.parameters['body'] = {
    in: 'body',
    description: 'Contact to create',
    required: true,
    schema: {
        $firstName: 'John',
        $lastName: 'Doe',
        $email: 'john@example.com',
        $favoriteColor: 'blue',
        $birthday: '1990-01-15'
    }
} */
    if (req.is("application/json")) {
        let contact = utils.sanitizeContact(req)
        try {
            let id = await contacts.insertData(contact);
            if (id) {
                res.status(200).json(id)
            } else {
                next(utils.constructError(strings.ERROR_CREATING_CONTACT))
            }
        } catch (error) {
            next(error)
        }

    } else {
        next(utils.constructError("Unsupported Request"))
    }


}




module.exports = controller
