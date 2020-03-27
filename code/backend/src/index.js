const express = require("express");
const cors = require("cors");
const port = 3333;
const routes = require("./routes/routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port);

console.log("Running Server...");
