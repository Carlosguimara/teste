const leitor = require('readline-sync')

let fb=leitor.questionInt('Digite o val ')

function somatorio(n) {
    if (n === 0) {
      return 0; 
    } else {
      return n + fibo(n + 1); // Chamada recursiva
    }
  }
  // Teste a função
  
  console.log(`O Somatorio de ${numero} é ${somatorio(numero)}`);

