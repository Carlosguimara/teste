const leitor = require('readline-sync')

/*8-Uma empresa paga R$ 10,00 por hora normal trabalhada e R$ 15,00 por hora extra. Escreva um programa que leia o total de horas normais 
e o total de horas extras trabalhadas por um empregado em um ano e calcule o salário anual deste trabalhador.

let horasnormais= parseInt(leitor.question(`Digite o numero de Horas Normais trabalhadas no ano `))   
let horasextras= parseInt(leitor.question(`Digite o numero de Horas Extras trabalhadas no ano `)) 
let valorN=horasnormais*10.00
let valorE=horasextras*15.00
let valoranual=valorN+valorE

console.log(`Salario Anual=${valoranual}`)

