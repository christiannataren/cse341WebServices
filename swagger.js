const swaggerAutogen = require("swagger-autogen")

const doc = {
    info: {
        title: "Contacts API",
        description: "Contacts API"

    }, host: "localhost:8080",
    schemes: ["http", "https"]
}
const outputFile = "./swagger.json";
const endpointsFiles = ["./server.js"]
swaggerAutogen(outputFile, endpointsFiles, doc);