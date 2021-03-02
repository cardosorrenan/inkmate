FROM node:14-alpine
WORKDIR /usr/src/app_vue
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build
EXPOSE 3000
CMD [ "yarn", "start" ]
