FROM node:current-alpine3.16

RUN mkdir /usr/node/
COPY ./src/ /usr/node/
WORKDIR /usr/node/
RUN npm install

EXPOSE 8080