const express = require("express")
const router = new express.Router();
const contactsCtrl = require("../controllers/contactsController")

router.get('/', contactsCtrl.getAll)
router.get('/:id', contactsCtrl.getByID)
router.get('/insert', contactsCtrl.insert)

module.exports = router