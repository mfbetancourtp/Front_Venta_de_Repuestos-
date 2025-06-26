# 1) Etapa de build con Node 18
FROM node:18-alpine AS builder
WORKDIR /app
 
# Copiamos y instalamos dependencias
COPY package*.json ./
RUN npm install --legacy-peer-deps
 
# Copiamos el resto del código y lanzamos el build de Angular
COPY . .
RUN npm run build --prod
 
# 2) Etapa de producción con Nginx
FROM nginx:stable-alpine
 
# Copiamos los archivos estáticos resultantes del build
COPY --from=builder /app/dist/respuestos /usr/share/nginx/html
 
# Exponemos el puerto 80 y arrancamos Nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]