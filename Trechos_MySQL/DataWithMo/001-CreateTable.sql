CREATE TABLE funcionarios {
   funcionario_id INT PRIMARY KEY,
   nome_funcionario VARCHAR(50),
   sobrenome_funcionario VARCHAR(50),
   email_funcionario VARCHAR(50),
   data_contratacao DATE,
   genero VARCHAR(1),
   salario INT,
   setor_id INT
};

CREATE TABLE lojas{
   fornecedor_id INT PRIMARY KEY,
   nome_fornecedor VARCHAR(50),
   cidade_id INT
};

--Add chave primária para tabela fornecedores
CREATE TABLE fornecedores{
   fornecedor_id INT PRIMARY KEY,
   nome_fornecedor VARCHAR(50),
   tipo_produto VARCHAR(50)
};

