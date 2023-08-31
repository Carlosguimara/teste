const leitor = require('readline-sync')

/*9-Elabore um programa em JS para que leia três números e mostre-os em ordem crescente*/

let num1=parseInt(leitor.question(`Digite o 1º numero - `))
let num2=parseFloat(leitor.question(`Digite o 2º numero - `))
let num3=parseFloat(leitor.question(`Digite o 3º numero - `))

let numeros = [num1,num2,num3]
numeros.sort((a,b)=> a-b)
console.log(numeros)


