# Semana Omnistack - Quarto dia

## Diferenças

Lá na web estamos acostumados a utilizar as tags div, spam, p, h1... pra fazer a nossa estrutura. Cada elemento tem uma semântica e um significa na tela, sempre possuindo um significado de utilização diferente uma da outra. 

No React Native não possui as mesmas tags que temos no HTML, então podemos utilizar o conceito de div para tudo que antigamente era usado no React. Lá existe a tag View e a tag text.

A tag View é utilizada para qualquer tipo de container. A tag text é utilizada para qualquer tipo de texto.

Portanto, concluímos que os elementos do React não possuem semântica (resultado significativo).

## Estilização

Não temos o className, id.. que nem temos no React. Para adicionar uma estilização no React Native nós devemos utilizar a tag style e ela vai receber um objeto com a estilização. Esse objeto de estilo pode ser criado a partir da classe StyleSheet.

## Flebox

Todos os elementos no React Native já possuem display flex por padrão.

## Propriedades

Utilizando o estilo CamelCase para declarar nossas propriedades de estilização nos React Native.

## Herança de Estilos

Não existe herança de estilos no React Native.
 
Para cada elemento deveremos criar um objeto de estilos próprio.

Portanto, temos que ter uma estilização própria por elemento, nunca uma que vai estilizar vários elementos como temos no HTML.
