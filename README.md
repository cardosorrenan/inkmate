# Inkmate

## Build Setup

```bash
# Builds an image from a Dockerfile 
$ git clone https://github.com/cardosorrenan/inkmate.git

$ cd inkmate

$ docker build -t inkmate .

# Up a container over the specified image
$ docker run -p 3000:3000 -d inkmate

# Running in
http://localhost:3000
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

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
