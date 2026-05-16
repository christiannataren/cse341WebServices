const swaggerAutogen = require("swagger-autogen")

const doc = {
    info: {
        title: "Contacts API",
        description: "Contacts API"

    }, host: "cse341webservices-13l1.onrender.com",
    schemes: ["https"]
}
const outputFile = "./swagger.json";
const endpointsFiles = ["./server.js"]
swaggerAutogen(outputFile, endpointsFiles, doc);