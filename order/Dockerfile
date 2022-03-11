# Dockerfile for order service

# base image
FROM node:alpine

# the app will be store on /app dir
WORKDIR /app

# copy the module file
COPY package.json .

# install base on module file
RUN npm install

# copy all file to workdir
COPY . .

# run the file
CMD ["npm","run","prod"]