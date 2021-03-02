# Inkmate
- ### Get the repo
```bash
$ git clone https://github.com/cardosorrenan/inkmate.git

$ cd inkmate_api
```
- ### Build setup
```bash
# Builds an image from a Dockerfile 
$ docker build -t inkmate . --rm=true  

# Up a container over the specified image
$ docker run -p 3000:3000 -d inkmate
```
or
```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start
```
- ### Test
```bash
# Running in
http://localhost:3030/
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
