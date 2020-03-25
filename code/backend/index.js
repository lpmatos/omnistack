// Express Module
const express = require("express")

const app = express();

// Dizendo para o Express ir no corpo da requisição para converter o JSON para um objeto do JavaScript.
app.use(express.json());

/**
 * Quando criamos uma rota precisamos obrigatoriamente informar qual será o seu caminho.
 * Chamamos o nome de uma rota de Recurso dentro do ecossistema de Backend.
 * Portanto, a Rota é o conjunto completo da URL e o recurso é o que está sendo acessado.
 */

/**
 * Rota / Recurso
 * 
 * Observação: Geralmente um Recurso está associdade a alguma tipo de Entidada/Tabeça no banco/Algo que queremos buscar na aplicação.
 * 
 */

/**
 * Métodos HTTP:
 * 
 * GET - Utilizado quando desejamos buscar uma informação no Backend. Sempre que formos criar uma rota que o Backend vai retornar uma informação, vamos utilizar o GET.
 * POST - Utilizado sempre que queremos criar uma informação no Backend. Exemplo: Rota de criação do usuário.
 * PUT - Utilizado para alterar uma informação no Backend.
 * DELETE - Utilizado para deletar uma informação no Backend.
 */

/**
 * O navegador toda vez que requisitamos uma URL/Acessa uma página, o Único método que ele utiliza é o método GET.
 * 
 * Para lidarmos com outros métodos podemos utilizar outros software, nesse caso sera o Insomnia.
 * No Insomnia conseguimos cadastrar nossas rotas acessando cada recurso e validar cada método HTTP.
 */

app.get("/", (request, response) => {
    return response.json({
        nome: "Lucca Pessoa",
        idade: 20
    });
});

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após o símbolo de "?" e geralmente servem para (Filtros, paginação...)
 * Route Params: Parâmetros utilizados para identificar recursos. Server para identificar um único rescurso.
 * Request Body: Corpo da requisição utilizado para criar ou alterar recursos.
 */

/**
 * O Request guarda todos os dados que vêm através da requisição do usuário.
 * O Response é o responsável por retornar uma resposta do usuário.
 */

app.post("/users", (request, response) => {
    const body = request.body;
    if(Object.keys(body).length > 0){
        return response.json({
            nome: "Lucca Pessoa",
            rota: "/users",
            params: "body",
            idade: 20
        });
    }else{
        return response.json({
            status: "empty"
        });
    }
});

app.get("/users", (request, response) => {
    // Acessando Query params vindos da requisição.
    const params = request.query;
    console.log(params);
    return response.json({
        nome: "Lucca Pessoa",
        rota: "/users",
        params: "query",
        idade: 20
    });
});

app.get("/users/:name", (request, response) => {
    // Acessando Route params.
    const name = request.params;
    console.log(name);
    return response.json({
        nome: "Lucca Pessoa",
        rota: "/users?:name",
        params: "route",
        idade: 20
    });
});

app.listen(3333);

console.log("Running Server...");
