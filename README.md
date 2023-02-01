CREATE SCHEMA NodeDesafio

CREATE TABLE Empresa(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  RazaoSocial VARCHAR(45) NOT NULL,
  CNPJ CHAR(22) NOT NULL UNIQUE,
  CEP CHAR(10) NOT NULL,
  Cidade VARCHAR(45) NOT NULL,
  Estado CHAR(20) NOT NULL,
  Bairro VARCHAR(45) NOT NULL,
  Complemento  VARCHAR(45)
  )
  ENGINE = InnoDB;

  CREATE TABLE Licenca (
  idLicenca INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Empresa INT NOT NULL,
  Numero VARCHAR(45) NOT NULL,
  OrgaoAmbiental VARCHAR(45) NOT NULL,
  Emissao DATE NOT NULL,
  Validade DATE NOT NULL
  )

  ALTER TABLE Licenca
  add foreign key (Empresa)
  references Empresa(idEmpresa)