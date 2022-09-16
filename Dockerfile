FROM node:16-alpine

WORKDIR /app

COPY . .

WORKDIR /app/server

RUN npm ci

CMD ["npm", "start"]