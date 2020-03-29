const knex = require("knex");
const configuration = require("../../knexfile");

// Getting database connection
const connection = knex(configuration.development);

module.exports = connection
