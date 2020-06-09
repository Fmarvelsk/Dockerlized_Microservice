FROM node:12.2.0

COPY . /src

WORKDIR /src

RUN npm install --production

EXPOSE 4000

CMD ["npm", "run", "start"]