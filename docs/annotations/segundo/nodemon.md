# Semana Omnistack - Segundo dia

## Install Nodemon

Para instalar o Nodemon, execute o comando:

```bash
npm install nodemon -D
```

A opção -D serve para salvar o pacote instalado como dependência de desenvolvimento. Ou seja, o nodemon é uma biblioteca que você vai utilizar apenas no desenvolvimentod a aplicação.

Para executar o nodemon podemos criar um scropt dentro do package.json:

```bash
nodemon index.js
```

Toda vez que algo é alterado na aplicação, o Nodemon indentifica isso e restarta o servidor.
