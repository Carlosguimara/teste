const leitor = require('readline-sync')

/*4-Faça um programa que calcule e mostre a soma dos N primeiros números pares. 
    Faça três versões desse programa, cada uma usando uma estrutura de repetição diferente 
    (for, while, do-while). Qual das três estruturas é a mais adequada para este programa? Por que?
 */

let soma=0,qtd=50
for (let i=1; i<=(qtd*2); i++) {
    if (i%2==0){
       soma +=i
    }
}
console.log(`a soma dos primeiros ${qtd} numeros pares é ${soma} (calculado com e estrutura FOR)`)

let soma1=0,qtd1=50, i=1
while  (i <= qtd1*2) {
    if (i%2==0){
       soma1 +=i
    }
    i++
}
console.log(`a soma dos primeiros ${qtd} numeros pares é ${soma} (calculado com e estrutura WHILE)`)

let soma2=0,qtd2=50, i2=1
do  {
    if (i2%2==0){
       soma2 +=i2
    }
    i2++
} while (i2 <= qtd2*2)

console.log(`a soma dos primeiros ${qtd} numeros pares é ${soma} (calculado com e estrutura DO WHILE)`)




    