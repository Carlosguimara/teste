/*
Crie uma função recursiva chamada somaRecursiva que receba
um número inteiro positivo n como argumento e calcule a soma
de todos os números inteiros de 1 até n.
*/
/*
const leitor = require('readline-sync')

numero=leitor.questionInt('Digite um numero ')

function somatorio(n) {
    if (n === 0) {
      return 0; 
    } else {
      return n + somatorio(n - 1); // Chamada recursiva
    }
  }
  // Teste a função
  
  console.log(`O Somatorio de ${numero} é ${somatorio(numero)}`);
*/

  /*
  Escreva uma função chamada fibonacci que receba um número n como parâmetro e retorne o n-ésimo termo 
  da sequência de Fibonacci. Lembre-se de implementar essa função de forma recursiva
  */

  function fibonaci(n){
    if (n==0){
    return 0
}
    if (n==1){
        return 1
    }
    return fibonaci(n-1)+fibonaci(n-2)
}


console.log(`O ${leitor}° numero da sequencia de Fibonaci é ${fibonaci(leitor)}`)