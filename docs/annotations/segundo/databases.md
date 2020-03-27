# Semana Omnistack - Segundo dia

## Databases

Hoje no mercado de desenvolvimento nós encontramos duas principais alternativas no quesito Bando de Dados:

* SQL: Bancos de Dados Relacionais.
    * Postgres.
    * Mysql.
    * SQLite.
    * Oracle.
    * Microsoft SQL Server.
* NOSQL: Bancos de Dados não Relacionais.
    * MongoDB.
    * Redis.
    * CouchDB.

O que os bancos de dados relacionais possuem em comum é a linguagem SQL. Por possuirem a característica de boa estruturação dos dados, os Bancos SQL são os mais utilizados no mercado, apesar que os Bancos NoSQL possuem uma grande utilização, principalmente em projetos complexos e cuja estruturação dos dados é uma dor de cabeça.

Em bancos de dados NoSQL os schemas ficam muito livre e pouco estruturado, no SQL conseguimos manter uma estrutura legal para estes dados.

No mercado muitas vezes você vai se deparar primeiramente com bancos de dados estruturais, uma vez que estruturar dados em NoSQL pode ser algo difícil logo no início.

Para fazermos a comunicação com o nosso banco de dados, existem algumas formas principais:

1. Instalar o Driver diretamente do banco de dados.
    * Query Exemple: SELECT * FROM USERS;
2. Query Builder.
    * Query Exemple: table("users").select("*");
    * Está pronto para aceitar qualquer banco SQL. As Querys não mudam.

O Query Builder que estaremos utilizando é o knex. Ele funciona para:

* Postgres
* SQLite
* MySQL
* Oracle
* MariaDB
* MSSQL

Para instalar o knex executamos:

```bash
npm install knex
```

Também precisamos instalar o Driver do Banco de Dados de acordo com o que iremos utilizar, no caso será SQLite.

```bash
npm install sqlite3
```

Para começarmos a fazer a nossa conexão com o banco de dados da nossa aplicação, precisamos inicializar o Knex:

```bash
npx knex init
```

Lembrando que o npx serve para executar um pacote ao invés de instalar um pacote.

Isso vai criar um arquivo na raiz do nosso projeto chamado knexfile. É nesse arquivo que vão ficar as configurações de acesso ao Banco de Dados para cada dos ambientes da nossa aplicação:

* Ambiente de desenvolvimento.
* Ambiente de staging (simula o ambiente de produção para o time de desenvolvimento).
* Ambiente de produção.

## Criando Database da aplicação

Existem várias formas de realizar essa tarefa, porém o Knex nos dá uma funcionalidade chamada migrations que facilita esse processo.

A partir dele consiguimos criar tabelas e manter um histórico de alteração, criação... como se fosse um controle de versão do nosso banco de dados.

Isso é muito legal em times que possuem uma alta rotatividade.

Para criar a nossa primeira migration executamos o comando:

```bash
npx knex migrate:make create_ongs
```

O warning que aparece após rodarmos o migrate, conseguimos resolver utilizar o useNullAsDefault. Isso acontece por que por padrão o SQLite não suporta a inserção de valores default para a colunas de banco de dados.

```bash
npx knex migrate:latest
```

Listando comando knex:

```bash
npx knex
```

Voltando uma migration:

```bash
npx knex migrate:rollback
```

Listando migrations:

```bash
npx knex migrate:status
```
