-- SELECT statement

SELECT FROM funcionários;
SELECT FROM lojas;
SELECT FROM locations;
SELECT FROM fornecedores;

SELECT funcionario_id,nome_funcionario, sobrenome_funcionario
FROM funcionarios;

SELECT funcionario_id,data_admissao,salario_funcionario 
FROM funcionarios;

--WHERE clause + AND & OR

-- Select only the funcionarios who make more than 50k
SELECT =
FROM funcionarios 
WHERE salario_funcionario > 50000;

-- Select only the funcionarios who work em São Paulo  coffeshop
SELECT =
FROM funcionarios 
WHERE  coffeshop_id = 1;

-- Select todos os funcionários que trabalham em São Paulo  e 
