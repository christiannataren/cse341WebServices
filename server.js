const db = require("./models/db.js")

const express = require('express')
const app = express()
const routeContacts = require("./routes/contactsRoute.js")
const routeSwagger = require("./routes/swagger.js")

app.use(express.json())


app.use("/contacts", routeContacts)

app.use("/", routeSwagger)


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        error: {
            message: err.message || "Internal Server Error",
        }
    });
});



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

process.on('SIGINT', async () => {
    await db.close();
    process.exit(0);
});