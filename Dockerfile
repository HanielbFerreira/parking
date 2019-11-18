FROM node:10.13-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
ADD . /usr/src/app
RUN npm run create
EXPOSE 4000
CMD [ "npm", "start" ]