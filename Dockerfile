FROM node:18-alpine AS builder
WORKDIR /app
 
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod
 
# 2) Serve con Nginx
FROM nginx:stable-alpine
COPY --from=builder /app/dist/Front_Venta_de_Repuestos /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]