FROM node:10

WORKDIR /usr/share/scrmapi

COPY package*.json ./

RUN npm install

COPY . . 


CMD ["npm", "start"]