FROM node:15

WORKDIR /app
COPY package.json .
RUN npm install pnpm -g
RUN  pnpm install
ARG  NODE_ENV
RUN if [ "$NODE_ENV" == "development" ]; \
    then pnpm install;\
    else pnpm install --only=production;\
    fi
COPY . ./
EXPOSE 3000
CMD ["pnpm","dev"]