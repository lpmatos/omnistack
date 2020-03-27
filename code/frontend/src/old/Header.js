import React from 'react';

//import Header from "./Header";
// Um componente no React nada mais é que uma função que retorna HTML, podendo ter funcionalidades JS e CSS.
// Quando esse HTML está escrito dentro de um arquivo JS, chamamos isso de JSX - JavaScript XML.
// O React possui um processo de Live Reload.
// As propriedades no React são quase a mesma coisa que temos no HTML com o conceito de atributo.
/**
 * As propriedades tem a mesma sintaxe de atributos, porém são atributos repassados para componentes ao invés de elementos do HTML.
 * Todos os componentes precisam ter letra maiúscula no começo e sempre começam importanto o react.
 * Em todo lugar que você usar JSX você precisa importar o react.
 */

export default function Header({ children }){
    return (
        <header>
            <h1>{children}</h1>
        </header>
    );
}
