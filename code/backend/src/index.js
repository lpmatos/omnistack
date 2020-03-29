const cors = require("cors");
const express = require("express");
const routes = require("./routes/routes");
const config = require("./settings/config");
const port = parseInt(config.NODE_PORT);
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port);

console.log(`Server Running on ${port}...`);
