const express = require("express")
const router = new express.Router();
const contactsCtrl = require("../controllers/contactsController")
const validator = require("../validations/validator")
const validatorRules = require("../validations/validateRules")
router.get('/', contactsCtrl.getAll)
router.get('/:id', contactsCtrl.getByID)
router.put('/:id', validatorRules.createUser(), validator.validateContact, contactsCtrl.updateContact)
router.post('/create', validatorRules.createUser(), validator.validateContact, contactsCtrl.create)
router.get('/insert', contactsCtrl.insert)

module.exports = router