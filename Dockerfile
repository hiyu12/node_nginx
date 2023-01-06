FROM node:14
WORKDIR /usr/scr/app
COPY ./package*.json /usr/scr/app/
RUN npm install
COPY ./ /usr/scr/app/
EXPOSE 3000
CMD [ "npm", "start" ]
