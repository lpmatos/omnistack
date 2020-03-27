// Mapping Routes

const express = require("express");

// Getting Controllers
const OngController = require("../controllers/OngController");
const IncidentController = require("../controllers/IncidentController");

const routes = express.Router();

// Routes - Ongs
routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

// Routes - Incidents
routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

module.exports = routes;
