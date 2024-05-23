# Usa la imagen oficial de MySQL
FROM mysql:latest

# Variables de entorno
ENV MYSQL_DATABASE=usuariosbbdd

# Copia el archivo SQL al contenedor 
COPY usuariosbbdd.sql /docker-entrypoint-initdb.d/

# Puerto por defecto de MySQL
EXPOSE 3306

# Comando que se ejecuta cuando se inicia el contenedor
