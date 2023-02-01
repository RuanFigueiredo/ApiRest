{
	"RazaoSocial":"HortoPAY52",
	"CNPJ":"78945612345618",
	"CEP":"89010010",
	"Cidade":"Natal",
	"Estado":"RN",
	"Bairro":"Fortaleza Alta",
	"Complemento":"casa 23"
	
}

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