FROM node:16-slim as builder
WORKDIR /app
ENV PORT=3001
COPY package.json ./
RUN npm install 
COPY . .


FROM node:alpine
WORKDIR /app
COPY --from=builder /app .
CMD ["npm", "run", "dev"]