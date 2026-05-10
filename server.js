const db = require("./models/db.js")

const express = require('express')
const app = express()
const routeContacts = require("./routes/contactsRoute.js")


app.use("/contacts", routeContacts)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

process.on('SIGINT', async () => {
    await db.close();
    process.exit(0);
});