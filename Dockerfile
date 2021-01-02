FROM node:14-alpine

WORKDIR /usr/src/app

ENV NODE_ENV=production
ENV PORT=3000
ENV BUILD_DESKTOP_APP_PATH=/usr/src/app/dist/desktop
ENV BUILD_MOBILE_APP_PATH=/usr/src/app/dist/mobile

# To reduce image build time
# Bundle server node_modules
COPY ./package.json ./
COPY ./yarn.lock ./
COPY ./dist ./dist/

RUN yarn --frozen-lockfile

EXPOSE 3000

CMD ["node", "dist/server/app.js"]