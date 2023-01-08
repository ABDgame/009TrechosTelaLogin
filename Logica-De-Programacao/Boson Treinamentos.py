Resolução: 4.Pseudocódigo

  algoritmo Média
  var
    res: caractere
    N1, N2, N3, N4 : real
    media : real
  inicio
    leia (N1, N2, N3, N4)
    media <- ((N1 + N2 + N3 + N4) / 4)
    se (media >= 7) então
         res <- "Aprovado"
    senão
         res <- "Reprovado"
    fimse
    escreva ("Resultado:",res)
   fimalgoritmo
  
  
  
