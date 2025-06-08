# 1) Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod
 
# 2) Serve con Nginx
FROM nginx:stable-alpine
COPY --from=builder /app/dist/front-venta-de-repuestos /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]