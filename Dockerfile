ARG NODE_VERSION=lts-alpine3.11

FROM node:${NODE_VERSION}

LABEL maintainer="Lucca Pessoa da Silva Matos - luccapsm@gmail.com" \
        org.label-schema.version="1.0.0" \
        org.label-schema.release-data="2020-03-23" \
        org.label-schema.url="https://github.com/lpmatos" \
        org.label-schema.node="https://www.npmjs.com/" \
        org.label-schema.npm="https://www.python.org/" \
        org.label-schema.name="Semena Omnistack" 

ENV HOME=/usr/src/app

WORKDIR ${HOME}

COPY [ "./code/backend", "." ]

RUN set -ex && apk update

RUN npm install express

EXPOSE 3000

ENTRYPOINT []

CMD [ "node", "index.js" ]
