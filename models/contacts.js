const db = require('./db.js')


const collection = "contacts"
model = {}

model.getContact = async function (filter = {}) {
    let contact = await db.getOne(collection, filter);
    return contact
}

model.getByID = async function (id) {
    let contact = await db.getByID(collection, id);
    return contact;
}
model.insertData = async function (data) {
    const result = await db.insertData(collection, data);
    return result;
}
model.updateContact = async function (id, data) {
    let result = await db.updateByID(collection, id, data)
    return result;
}
model.getContacts = async function () {
    let data = await db.getAll(collection);
    return data;
}


module.exports = model


