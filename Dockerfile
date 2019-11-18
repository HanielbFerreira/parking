FROM node:10.13-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
ADD . /usr/src/app
CMD [ "npm", "start" ]
EXPOSE 4000