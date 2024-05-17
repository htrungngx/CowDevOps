FROM node:alpine as builder
WORKDIR /app
ENV NEXT_PUBLIC_API_URL="http://127.0.0.1:3001"
ENV PORT=3000
COPY package.json ./
RUN npm install
RUN npm ci 
COPY . .
RUN npm run build

FROM node:alpine
WORKDIR /app
COPY --from=builder /app .
CMD ["npm", "run", "start"]