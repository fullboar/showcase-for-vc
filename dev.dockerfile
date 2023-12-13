FROM node:fermium as base

WORKDIR /app
COPY . .
RUN yarn install


EXPOSE 5000
EXPOSE 3000
EXPOSE 3001

ENTRYPOINT [ "yarn", "dev"]
