const express = require("express");
const routes = express.Router();

// Getting Controllers
const OngController = require("../controllers/OngController");
const IncidentController = require("../controllers/IncidentController");
const ProfileController = require("../controllers/ProfileController");
const SessionController = require("../controllers/SessionController");

// Route - Session
routes.post("/sessions", SessionController.create);

// Route - Ongs
routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

// Route - Profile
routes.get("/profile", ProfileController.index);

// Route - Incidents
routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

// Route - Healthcheck
routes.get("/healthcheck", (request, response) => {
    console.log("Health Check Request");
    response.status(200).end();
});

module.exports = routes;
