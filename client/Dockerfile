FROM node:16.13.2

WORKDIR /client

COPY package* .

RUN npm install

COPY . .

CMD ["npm", "run", "serve"]