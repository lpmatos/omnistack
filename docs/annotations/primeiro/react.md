# Semana Omnistack - Primeiro dia

De um lado temos a abordagem tradicional que foi a que utilizamos por muito e muito tempo e ainda utilizando hoje em dia. Do outro, temos a abordagem SPA.

## React

### Abordagem Tradicional

Na abordagem tradicional, pensando que temos uma aplicação sem nenhum framework no Frontend, a cada requisição, o servidor retorna o conteúdo completo da página, contendo todo HTML e CSS.

Ou seja, quem faz todo trabalho pesado é o Backend, uma vez que é a partir dele, que por meio de um template engina, pegamos todo HTML já criado e formatado com as informações desejadas na requisição feita pelo Client.

Essa abordagem limita o Frontend para o Browser já que o aplicativo mobile ou serviços externos não vão conseguir interpretar o HTML.

### Abordagem de SPA

Na abordagem SPA (Single Page Applications, uu seja, é como se tivessemos uma página só), as requisições trazem apenas dados como resposta e com esses dados o Frontend pode preencher as informações na tela.

A página nunca recarrega, otimizando a performance e dando vida ao conceito de SPA. Retornando apenas JSON pode ter quantos Frontend quisermos.

Nesse caso o HTML, CSS e JS da parte de interface, ficam do lado do React/Browser, ou seja, isso é carregado a parte do servidor, retirando a responsabilidade do backend por essa parte visual.

Quando nossa aplicação React que contém o HTML, CSS e JS faz uma requisição pro NodeJS (Backend), a única coisa que é retorna é um JSON, uma estrutura de dados contendo todas as informações necessárias para serem utilizadas no Frontend.

Na abordagem tradicional o backend retornaria todo o HTML da listagem de usuários. Na abordagem de SPA nós iremos receber apenas uma lista de usuários na forma de vetor/array em JSON, contendo todos os dados do usuário, ai o Frontend pegará essa lista e irá mostrar esses dados em tela.

Utilizamos o React (ou algum outros Framework) pois ele possui várias e várias ferramentas para facilitar essa exibição, tornando a utilização do JavaScript puro não tão recomendada.

Fora que o React já é otimizado para essa tarefa de fazer uma chamada HTTP para uma API RestFul, receber esses dados em JSON e construir de forma performática a interface visual. Será o React que vai criar o HTML em nossa página, portanto precisamos de muita performance nisso, até por que isso estará sendo executado do lado do client (navegador do usuário).

Resumindo:

* Na abordagem de SPA as requisições trazem apenas dados como respostas.
* O Frontend fica responsável por preencher as informações em tela.
* O React irá criar todo o HTML da página e não o Backend.
* O Backend não tem responsabilidade na parte de apresentação dos dados.
* As rotas da tua aplicação serão controladas pelo React.
* Quando não retornamos HTML do nosso Backend, podemos ter quantos Frontend quisermos.

## Criando Projeto React

Existem várias formas de começarmos um projeto React. Mas a forma mais simples e disponibilizada pelo próprio time do Facebook, é utilizar uma ferramenta chamada **create react app**, uma vez que o React envolve muitas ferramentas por de baixo dos panos.

```bash
npx create-react-app frontend
```

Quando instalamos o NodeJS nós temos o npx, que é parecido com o npm, mas ele executa um pacote externo sem a necessidade de instalar ele na nossa máquina de forma global.

Para vermos o React funcionado podemos rodar o comando:

```bash
npm start
```

Que é um script contido dentro do package.json.
