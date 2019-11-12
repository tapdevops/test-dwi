# Set NodeJS version
FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app

# Install required packages
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Setup port
EXPOSE 4020

# Running command
CMD [ "node", "server.js" ]
