const entrada = require("readline-sync")

var nota1=parseFloat(entrada.question(`Digite a 1a nota: `))
var nota2=parseFloat(entrada.question(`Digite a 2a nota: `))
var nota3=parseFloat(entrada.question(`Digite a 3a nota: `))

var media= (nota1+nota2+nota3)/3

console.log(`Media=${media.toFixed(1)} - Notas(${nota1.toFixed(1)} - ${nota2} - ${nota3.toFixed(1)})`)
