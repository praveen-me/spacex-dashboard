
# STAGE 1

FROM node:12-alpine AS build

WORKDIR /app

COPY package.json ./

RUN yarn  install

COPY . /app

RUN yarn build


# STAGE 2

FROM node:12-alpine

WORKDIR /app

RUN npm install -g webserver.local

COPY --from=build /app/build ./build

EXPOSE 3000

CMD webserver.local -d ./build