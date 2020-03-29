ARG NODE_VERSION=lts-alpine3.11

FROM node:${NODE_VERSION}

LABEL maintainer="Lucca Pessoa da Silva Matos - luccapsm@gmail.com" \
        org.label-schema.version="1.0.1" \
        org.label-schema.release-data="2020-03-28" \
        org.label-schema.url="https://github.com/lpmatos" \
        org.label-schema.node="https://nodejs.org/en/" \
        org.label-schema.npm="https://www.npmjs.com/" \
        org.label-schema.name="Semana Omnistack Dockerfile Backend" 

ENV HOME=/usr/src/code

RUN set -ex && apk update

WORKDIR ${HOME}

COPY [ ".", "." ]

RUN npm install

HEALTHCHECK --interval=1m --timeout=2m CMD curl 0.0.0.0:3333/healthcheck

EXPOSE 3333

ENTRYPOINT []

CMD [ "npm", "start" ]
