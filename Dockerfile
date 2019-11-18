FROM node:12.13.0

WORKDIR /usr/src/app
COPY package*.json ./
COPY tsconfig*.json ./
COPY ./src ./src
RUN npm ci --quiet && npm run build
EXPOSE 4000
CMD [ "npm", "start" ]