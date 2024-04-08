FROM node:16-slim as builder

WORKDIR /app

COPY package.json ./

RUN npm install 

COPY . .


FROM node:alpine
WORKDIR /app
COPY --from=builder /app .
EXPOSE  3001
CMD ["npm", "run", "dev"]