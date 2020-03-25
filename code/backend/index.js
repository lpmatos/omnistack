// Express module.
// O Express é um microframework - Possui pouquíssimas funcionalidades.
// Ajuda a dar um start na aplicação. 
const express = require("express");

// Call express module.
const app = express();

// Constants
const PORT = 3333;
const HOST = "0.0.0.0";

// Create routes.
app.get("/", (request, response) => {
    array = Array()
    for (let index = 0; index < 10; index++) {
        if(index % 2 === 0){
            array.push(index);
        }
    }
    return response.json({
        evento: "Omnistack - This is an Exemple",
        aluno: "Lucca Pessoa da Silva Matos",
        idade: 21,
        profissao: "Analista Cloud JR",
        numbers: JSON.stringify(array)
    });
});

// Create routes.
app.get("/users", (request, response) => {
    array = [
        {
            nome: "Lucca Pessoa",
            idade: 21
        },
        {
            nome: "Vitor Gabriel",
            idade: 10
        },
        {
            nome: "Sheyla Augusta",
            idade: 40
        },
        {
            nome: "Luiz Pereira",
            idade: 34
        },
        {
            nome: "Karol Mendonça",
            idade: 3
        },
    ];
    return response.json(
        array
    );
});

// Start server in port 3000
app.listen(PORT, HOST);

console.log("Running...");
