const leitor = require('readline-sync')

/*9-Elabore um programa em JS para que leia três números e mostre-os em ordem crescente.

do {
  

let horasnormais= parseInt(leitor.question(`Digite o numero de Horas Normais trabalhadas no ano `))   
let horasextras= parseInt(leitor.question(`Digite o numero de Horas Extras trabalhadas no ano `)) 
let valorN=horasnormais*10.00
let valorE=horasextras*15.00
let valoranual=valorN+valorE

console.log(`Salario Anual=${valoranual}`)

