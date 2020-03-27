const express = require("express");

// Precisamos passar com o ponto barra para o NodeJS não entender essa referência como um módulo, e sim como um caminho.
const routes = require("./routes/routes");

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3333);

console.log("Running Server...")