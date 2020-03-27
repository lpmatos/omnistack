const knex = require("knex");

const configuration = require("../../knexfile");

// Create Connection
const connection = knex(configuration.development);

// Export connctions const database
module.exports = connection
