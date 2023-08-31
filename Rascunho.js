const leitor = require('readline-sync')

/*8-Uma empresa paga R$ 10,00 por hora normal trabalhada e R$ 15,00 por hora extra. Escreva um programa que leia o total de horas normais 
e o total de horas extras trabalhadas por um empregado em um ano e calcule o salário anual deste trabalhador.

let inicio= leitor.question(`Digite a hora de inicio no formato hh:mm:ss - `)
let horain= inicio.split(":")
//console.log(horain)

let dura= parseInt(leitor.question(`Digite a duração da experiencia em segundos - `))

let inicseg = horain[0]*3600 + horain[1]*60 + horain[2]*1
//console.log( horain[0]*3600 , horain[1]*60 , horain[2], inicseg)
let fimseg = inicseg+dura
console.log(inicseg,fimseg)

let hfim=Math.trunc(fimseg/3600)
let mfim=Math.trunc((fimseg/3600-hfim)*60)
let sfim=((((fimseg/3600-hfim)*60)-mfim)*60).toFixed(0)

let fim =(`${hfim}:${mfim}:${sfim}`)
console.log(fim) 
