// Mapping Routes

// Call express module
const express = require("express");

// Getting Controllers
const OngController = require("../controllers/OngController");

// Create routes const
const routes = express.Router();

// Routes
routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

// Export routes variable - to export a variable that is inside a file.
module.exports = routes;
