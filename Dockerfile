# Stage 1 - the build process
FROM node:9.6.1 as build-deps

RUN npm install webpack -g
RUN npm install yarn -g
RUN npm install -g serve

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# Override the base log level (info).
ENV NPM_CONFIG_LOGLEVEL warn


# Install all dependencies of the current project.
COPY package.json yarn.lock ./
RUN yarn

# Copy all local files into the image.
COPY . .

# Build for production.
RUN yarn build --production

# Stage 2 - the production environment
FROM nginx:1.15.2-alpine
COPY --from=build-deps /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
