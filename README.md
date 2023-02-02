DUMP SQL:

CREATE SCHEMA NodeDesafio

CREATE TABLE Empresa(
  idEmpresa INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  RazaoSocial VARCHAR(45) NOT NULL,
  CNPJ CHAR(22) NOT NULL UNIQUE,
  CEP CHAR(10) NOT NULL,
  Cidade VARCHAR(45) NOT NULL,
  Estado CHAR(20) NOT NULL,
  Bairro VARCHAR(45) NOT NULL,
  Complemento  VARCHAR(45) NOT NULL
  )


  CREATE TABLE Licenca(
  idLicenca INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Empresa INT NOT NULL,
  Numero VARCHAR(45) NOT NULL,
  OrgaoAmbiental VARCHAR(45) NOT NULL,
  Emissao DATE NOT NULL,
  Validade DATE NOT NULL
  )

  ALTER TABLE Licenca
  ADD foreign key (Empresa)
  REFERENCES Empresa(idEmpresa)

  Ferramentas usadas:

  Express -> npm install express
  Nodemon -> npm install nodemon
  MySQL -> npm install mysql
  knex -> npm install knex
  cors -> npm install cors


  Para iniciar o servidor:
  npm start , port 4001

  Foi realizado um CRUD para Entidade Empresa e um para Entidade Licença

  Foi usado Insomnia para testar a api

  Tecnologias e suas versões:

  MySQL 8.0.31
  Node.JS 17.3.0
  Express.js 4.16.1
  Git 2.25.1


Toda a aplicação foi em cima do controller e das rotas, foi feito um controlador para Empresa e outro para licença, para uma melhor leitura do código.

As informações do banco de dados ficaram em src-> database -> connection.js