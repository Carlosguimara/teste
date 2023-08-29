const leitor = require('readline-sync')

/*5-Faça um programa em Javascript que receba do usuário um número N e depois imprima os N primeiros 
    números naturais ímpares.*/

let qtd= parseInt(leitor.question(`Digite a qtde desejada `))   

let soma=0
for (let i=1; i<=(qtd*2); i++) {
    if (i%2!==0){
       console.log(i)
    }
}






    