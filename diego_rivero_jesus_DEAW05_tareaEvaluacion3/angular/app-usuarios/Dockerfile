# Stage 1: Build  Angular application usando the production config
FROM node:latest as build-stage
# establecer el directorio de trabajo
WORKDIR /app
#copiar los paquetes json de la app angular
COPY package*.json ./
# ejecutar una instalación limpia de las dependencias
RUN npm ci
# instalar Angular CLI global
RUN npm install -g @angular/cli
# copiar todos los ficheros
COPY . .
# hacer un build de la aplicacion
RUN npm run build --configuration=production

# Stage 2: uso aplicacion nginx 
FROM nginx:latest

# copiar el archivo de configuracion de nginx
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copio el build de angular en nginx
COPY --from=build-stage /app/dist/app-usuarios/browser /usr/share/nginx/html

# Expongo puerto 80 (Nginx lo usa por defecto)
EXPOSE 80





