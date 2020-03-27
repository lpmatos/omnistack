// Get Database connection
const connection = require("../database/connection");
const crypto = require("crypto");

// Export 
module.exports = {
    async index(request, response){
        const ongs = await connection("ongs").select("*");
        return response.json(ongs)
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;
        // Gerando uma string aleatória com o crypto - 4 Bytes de carateres aleatórios convertidos em string no formato Hexadecimal.
        const id = crypto.randomBytes(4).toString("HEX");
        // Inserindo dados - Quando NodeJS chegar nessa parte o NodeJS vai fazer um await (aguarda) para que esse insert seja finalizado e assim retorne a response.
        try {
            await connection("ongs").insert({
                id,
                name,
                email,
                whatsapp,
                city,
                uf
            });
            return response.json({
                id,
                status: "sucess"
            });
        } catch (error) {
            console.log(error);
            return response.json({
                id
            });
        }
    }
};