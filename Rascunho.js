const leitor = require('readline-sync')

/*7-Faça um programa para ler um horário (hora:minuto:segundo) de início e a duração, em segundos, de uma experiência 
    biológica. O programa deve informar o horário (hora:minuto:segundo) de término da mesma..*/

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
