CREATE DATABASE IF NOT EXISTS zoo;

USE zoo;

CREATE TABLE gerentes (
	gerente_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    sobrenome VARCHAR(50)
);

CREATE TABLE cuidadores (
	cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    sobrenome VARCHAR(50),
    gerente_id INT NOT NULL,
    
    FOREIGN KEY (gerente_id) REFERENCES gerentes(gerente_id)
);

CREATE TABLE animais (
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    especie VARCHAR(50) NOT NULL,
    sexo CHAR(1) NOT NULL,
    idade TINYINT NOT NULL,
    pais_origen VARCHAR(30) NOT NULL,
    localizacao VARCHAR(50) NOT NULL
);

CREATE TABLE animais_cuidadores (
	animal_id INT,
    cuidador_id INT,
    
    constraint PRIMARY KEY(animal_id,cuidador_id),
    
    FOREIGN KEY (animal_id) REFERENCES animais(animal_id),
    FOREIGN KEY (cuidador_id) REFERENCES cuidadores(cuidador_id)
);