FROM node:lts-alpine3.10 as build-step

ENV ENV_TYPE=production

RUN mkdir -p /home/app

WORKDIR /home/app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --silent

COPY . .

RUN npm run build 

CMD ["npm", "start"]