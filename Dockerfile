FROM node:18-alpine as builder
COPY package.json package-lock.json tsconfig.json config.json ./
COPY src src
RUN npm ci && npm run tsc

FROM node:18-alpine as app
WORKDIR /usr/src/app
COPY --from=builder ./node_modules ./node_modules
COPY --from=builder ./dist ./dist
EXPOSE 8080
CMD node dist/src/index.js