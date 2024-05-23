-- Active: 1707754906047@@127.0.0.1@3306
-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS usuariosbbdd;

-- Seleccionar la base de datos
USE usuariosbbdd;
-- Eliminar las tablas si existen
DROP TABLE IF EXISTS usuarios;
-- Crear la tabla de usuarios
CREATE TABLE usuarios (
    usuario_id INT PRIMARY KEY,
    nombre VARCHAR(100),
    departamento VARCHAR(100)
);


-- Insertar datos en la tabla de usuarios
INSERT INTO usuarios (usuario_id, nombre, departamento) VALUES
(101, 'Laura', 'Topografia'),
(102, 'Rodrigo', 'Topografia'),
(103, 'Lucas', 'Gerente'),
(104, 'Lucho', 'Obra'),
(110, 'Laila', 'Administracion'),
(105, 'Marta', 'Geologia'),
(107, 'Pedro', 'Administracion');

