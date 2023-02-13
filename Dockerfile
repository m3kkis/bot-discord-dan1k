FROM node:alpine

RUN mkdir -p /usr/src/bot
WORKDIR /usr/src/bot
RUN npm install
COPY . /usr/src/bot
CMD ["npm","start"]
