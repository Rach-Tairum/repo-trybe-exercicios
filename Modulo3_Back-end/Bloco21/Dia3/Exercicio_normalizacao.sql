CREATE DATABASE IF NOT EXISTS normalization;

USE normalization;

CREATE TABLE funcionarios (
	FUNCIONARIO_ID INT PRIMARY KEY AUTO_INCREMENT,
    NOME VARCHAR(50) NOT NULL,
    SOBRENOME VARCHAR(100) NOT NULL,
    CONTATO VARCHAR(100),
    TELEFONE CHAR(15) NOT NULL,
    DATA_CADASTRO DATETIME NOT NULL
);

CREATE TABLE setor (
	SETOR_ID INT PRIMARY KEY AUTO_INCREMENT,
    NOME VARCHAR(50) NOT NULL
);

CREATE TABLE setor_funcionario (
	SETOR_ID INT,
    FUNCIONARIO_ID INT,
    
    constraint primary key(SETOR_ID,FUNCIONARIO_ID),
    FOREIGN KEY (SETOR_ID) REFERENCES setor(SETOR_ID),
    FOREIGN KEY (FUNCIONARIO_ID) REFERENCES funcionarios(FUNCIONARIO_ID)
);

INSERT INTO funcionarios (NOME, SOBRENOME, CONTATO, TELEFONE, DATA_CADASTRO) VALUES 
('Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:00'),
('André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-02-05 09:00:00'),
('Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:00'),
('Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:00');

INSERT INTO setor (NOME) VALUES
('Administração'),
('Vendas'),
('Operacional'),
('Estratégico'),
('Marketing');

INSERT INTO setor_funcionario (SETOR_ID, FUNCIONARIO_ID) VALUES
(1,1),
(2,1),
(2,3),
(3,2),
(4,3),
(5,4);