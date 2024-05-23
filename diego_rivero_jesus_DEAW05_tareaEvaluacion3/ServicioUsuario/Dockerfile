# Use the official OpenJDK image from the Docker Hub
FROM openjdk:17-jdk-slim

# Set the working directory inside the container
WORKDIR /app



# Copy the Spring Boot application's JAR file into the container
COPY ./target/ServicioUsuario-0.0.1-SNAPSHOT.jar /app/ServicioUsuario.jar
EXPOSE 8080
# Specify the command to run the application
ENTRYPOINT ["java", "-jar", "/app/ServicioUsuario.jar"]
