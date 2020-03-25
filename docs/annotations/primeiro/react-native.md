# Semana Omnistack - Primeiro dia

De um lado temos a abordagem tradicional que foi a que utilizamos por muito e muito tempo e ainda utilizando hoje em dia. Do outro, temos a abordagem do React Native.

## React Native

### Abordagem Tradicional

Na abordagem tradicional, criamos uma aplicação para IOS (.ipa) e outra para Android (.apk), e nesses casos, o trabalho se torna repetido tanto para criação quanto para as alterações no projeto.

Portanto, o problema da abordagem é o retrabalho para criação/alteração de um projeto para ambas as plataformas.

### Abordagem do React Native

Todo código é feito em JavaScript e esse código não é convertido para código nativo, melhor que isso o dispositivo passa a entender o código JavaScript e a interface gerada é totalmente nativa.

Assim, não precisamos nos preocupar em fazer um código para cada plataforma. Com o React Native conseguimos fazer tudo utilizando JavaScript o que entra na Stack do NodeJS e React, onde todo nosso sistema é feito com JavaScript na parte Backend, Frontend e Mobile.

Mas com assim Nativas se não estamos utilizando uma linguagem Nativa? Quando estamos utizando React Native ele implementa dentro da nossa aplicação um cara chamado JavaScript Core que é um Framework para dar entendimento da linguagem JavaScript para o sistema operacional mobile. Assim, o Android e o IOS passam a conseguir interpretar código JavaScript para construção da interface e manipulação da interface.

Todo código é feito em JavaScript, esse código não é convertido em linguagem nativa como temos em outras alternativas (Xamarim). O código passa a ser entendível pelo nosso sistema operacional, então não tem por que converter esse código.

Melhor do que isso, toda interface gerada é nativa, ou seja, é a mesma interface que seria implementada nativamente.

### Por que utilizaremos o Expo?

O Expo é um framework para React Native. Um conjunto de ferramentas/bibliotecas prontas para você utilizar as funcionalidades do seu celular, exemplo: Câmera, mapas, geolocalização...

Sem o Expo, precisamos instalar em nosso sistema tanto o Android Studio para obter a SDK de desenvolvimento Android, e o XCode (apenas no Mac) para obter a SDK do IOS.

Nesse caso, nossa iniciação no desenvolvimento fica mais penosa, já que essas SDK's não são extremamente simples de instalar e livres de erros.

### Arquitetura do Expo

Com o Expo nós instalamos um aplicativo no celular chamado Expo, e dentro dele tudo que precisamos para desenvolver no React Native já está instalado, como as API's de Mapas, Geolocalização, Câmera, Sensores, Calendário, etc...

Com isso, não precisamos nos preocupar em gerar o aplicativo para Android e IOS, já que o app do Expor instalado tem tudo o que precisamos e assim usamos apenas o React. 

Nos precoupamos apenas em desenvolver em React e React Native, só vamos enviar código JavaScript.

Ao invés de gerar o aplicativo (apk, ipa) pelo nosso projeto, vamos utilizar o aplicativo mobile do Expo. O Expo irá realizar isso.
