FROM node:12-alpine

WORKDIR /app

COPY yarn.lock website/package.json/ /app/

RUN yarn --production --frozen-lockfile

COPY website/next.config.js  /app/
COPY website/.next/ /app/

USER node

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

CMD ["yarn", "next", "start"]
