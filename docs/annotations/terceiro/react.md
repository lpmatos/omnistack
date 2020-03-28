# Semana Omnistack - Terceiro dia

## React

Quando iniciamos um projeto React, ele acaba criando alguns lixos em sua estrutura, portanto, é imprescindível que você limpe essa estrutura antes de começar o seu projeto. 

## Conceitos

O primeiro index.html é o primeiro arquivo acessado pelo React. A partir dele ele lê o HTML principal. Se formos ver esse arquivo, veremos que ele tem apenas uma div com id root, mas onde está o resto do HTML?

Para respondermos essa pergunta temos que entender o React. O React monta a estrutura HTML/CSS de uma página a partir do JavaScript e o JavaScript só executa após esse HTML estar montado em tela. Então, qual é o passo a passo do React?

1 - Ele joga esse HTML em tela.
2 - O JavaScript entra em ação.
3 - Preenche a div root com o restante do teu código.

O arquivo index.js é o primeiro arquivo que o index.html irá ler, mesmo que isso não seja importado dentro do HTML, isso é feito de maneira automática pelo React.

Dentro desse index.js importamos o react, o react-dom (que é Integração do React com o navegador/DOM) e chamamos o nosso App. O App é um arquivo chamado App.js.

Após vamos chamar o ReactDOM para renderizar (colocar em tela) o nosso App dentro da nossa div root.

Os componentes do React podem ser escritos como se fossem uma tag HTML e todos eles devem possuir um arquivo JS começando com a letra maiúscula. E o que tem dentro desse App? O teu HTML.

## Componente

O componente nada mais é que uma função que retorna HTML. Porém, quando esse HTML está escrito dentro do JavaScript, chamamos de JSX (Java Script XML).

Sendo uma função que retorna um HTML, um componente também pode possuir funcionalidaeds HTML/CSS.

Quando temos o HTML integrado dentro do JS, então temos um JSX.

Criamos um componente quando sabemos que ele vai se repetir muito durando a nossa página.

Para cada componente iremos criar uma pasta.

Quando importamos um componente não precisar passar o index.js como parâmetro... por padrão o React procura ele.

## Propriedades

As propriedades no React é quase a mesma coisa que temos no HTML com o conceito de atributo. 

No HTML, suas tags possuem atributos (id, class)... No React, as propriedades possuem essa mesma sintaxe de atributos, porém, são atributos passados a componentes ao invés de elementos HTML.

As propriedades vêm como parâmetro da função do componente. Para utilizar elas no elemento HTML você precisar utilizar chaves.

Existe uma propriedade chamada children que retorna todo texto/HTML para dentro de onde vamos utilizar.

## Estado

O estado é como uma informação que será mantida pelo componente.

No React não podemos utilizar variáveis convencionais... precisamos utilizar um conceito chamado estado.

Toda vez que o estado é alterado, o componente vai renderizar novamente exibindo as informações em tela.

Sempre que seu componente precisar armazenar uma informação dentro dele, nós não vamos criar uma variável comum, mas sim um estado.

## Imutabilidade

Dentro do React, por uma questão de performance, nunca podemos manipular o valor do estado por uma forma direta. Nós precisamos sobrepor o valor da variável do estado.

O método useState no retorna um array com duas posições: o valor e uma função de atualização desse valor.

## Dicas

Criar um global.css para estilizações que teremos em todas as páginas.
