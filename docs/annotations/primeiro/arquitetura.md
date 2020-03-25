# Semana Omnistack - Primeiro dia

## Arquitetura da Aplicação

### Backend

O Backend é aquilo que o usuário não enxerga, é onde ficam:

* Regras de negócio.
* Conexão com Bando de Dados.
* Envio de E-mail.
* Comunicação com WebServices.
* Autenticação do usuário.
* Criptografia e segurança.

É o coração da nossa aplicação.

Durante essa semana estaremos construindo uma API RestFul (Aplication Programing Interface). Uma API é basicamente isso, um backend, quando a gente cria uma aplicação que não tem a parte visual dentro do backend.

O RestFul significa que essa API precisa seguir alguns padrões de métodos, tipos de parâmetros e etc.

Quando falamos que nossa API é RestFul quer dizer que ela está seguindo uma quantidade de regras já definidas.

### Frontend

Quando temos nosso Backend em NodeJS ou em qualquer outra linguagem, precisamos ter uma forma de comunicas esse Backend com o nosso Frontend, com a parte visual. O Frontend pode ser aplicações como:

* Frontend Web
* Frontend Mobile
* Serviços Externos

A partir do momento que estamos utilizando o Backend da nossa aplicação para servir informações para algum cliente, seja ele: um navegador, um aplicativo, outro aplicação que esteja consumindo esses nossos dados... podemos tudo isso de Frontend (camadas que podem ser visualizadas, que recebem os dados).

Os dados transmitidos pelo Backend precisa ser transmitido em uma linguagem especifícica para que o Frontend possa conversar com ele. A linguagem mais adato atualmente é o JSON. Não adiante o Backend ter um idioma diferente do Frontend.

### JSON

O JSON é uma estrutura de dados que facilita-rá essa comunicação entre o Backend e o Frontend. 

Uma estrutura de dados é uma forma de organizar nossos dados em uma estrutura padrão.

JSON é uma sigla para JavaScript Object Notation. É a estrutura de um objeto no JavaScript.
