ARG NODE_VERSION=lts-alpine3.11

FROM node:${NODE_VERSION}

LABEL maintainer="Lucca Pessoa da Silva Matos - luccapsm@gmail.com" \
        org.label-schema.version="1.0.0" \
        org.label-schema.release-data="2020-03-23" \
        org.label-schema.url="https://github.com/lpmatos" \
        org.label-schema.node="https://www.npmjs.com/" \
        org.label-schema.react="https://pt-br.reactjs.org/" \
        org.label-schema.npm="https://www.python.org/" \
        org.label-schema.name="Semena Omnistack Dockerfile Frontend" 

ENV HOME=/usr/src/app \
    PATH=/usr/src/app/node_modules/.bin:$PATH

WORKDIR ${HOME}

COPY [ ".", "." ]

RUN set -ex && apk update

RUN npm install --silent

EXPOSE 3000

ENTRYPOINT []

CMD ["npm", "start"]
