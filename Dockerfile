# State 1
# Create image based on the official Node 10 from dockerhub
FROM node:10-alpine as stage1

ARG BUILD_ENVIRONMENT

ARG PUBLIC_URL

ENV PUBLIC_URL=$PUBLIC_URL

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package*.json ./

# Install dependencies
RUN npm install

# Get all the code needed to run the app
COPY . .

# Run the Angular in product
RUN npm run build

# Stage 2
FROM nginx:1.17-alpine

# Copy dist content to html nginx folder, config nginx to point in index.html
COPY --from=stage1 /usr/src/app/build /usr/share/nginx/html/app-root
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/app.conf /etc/nginx/conf.d/app.conf


# Initialize environment variables into filesystem
WORKDIR /usr/share/nginx/html/app-root
COPY ./env.sh .
COPY ./.env.template .

# Add bash
RUN apk add --no-cache bash

# Run script which initializes env vars to fs
RUN chmod +x env.sh
# RUN ./env.sh

# Start Nginx server
CMD ["/bin/bash", "-c", "/usr/share/nginx/html/app-root/env.sh && nginx -g \"daemon off;\""]