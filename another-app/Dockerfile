FROM node:10-alpine
RUN mkdir -p /home/node/app
RUN chown -R node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
USER node
RUN npm install
COPY --chown=node:node . .
EXPOSE 9000
CMD ["node", "server.js"]