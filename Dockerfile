FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN apk update && apk add git && apk add openssh && mkdir -p /var/run/sshd && /usr/sbin/sshd -D
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000 22
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
