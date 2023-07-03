FROM node:alpine as builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
COPY .env.prod .env
RUN yarn build

FROM softonic/node-prune as pruner
COPY --from=builder /app/node_modules /app/node_modules
RUN node-prune /app/node_modules

FROM node:alpine as runner
RUN apk add --no-cache bash
WORKDIR /app
COPY --from=pruner /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/.env ./.env
COPY --from=builder /app/.env.prod ./.env.prod
COPY ./package.json ./yarn.lock ./tailwind-config.js ./
COPY ./tsconfig.json ./tsconfig.node.json ./vite.config.ts ./

EXPOSE 4173

CMD yarn preview --host=0.0.0.0


