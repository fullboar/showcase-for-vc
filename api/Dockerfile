FROM node:18.18

WORKDIR /usr/src/app

COPY package.json ./
RUN yarn

COPY . .

RUN yarn build

EXPOSE 3100

CMD [ "yarn", "dev"]