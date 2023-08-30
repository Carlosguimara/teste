/Crie uma funçao chamada mostrarNumeros que receba dois parametros, inicio e fim.
    Essa função deve exibir todos os numeros inteiros no intervalo de inicio e fim
    (inclusive), no console */

const readline = require("readline-sync")
let inicio=parseInt(readline.question(`Digite um numero inicial - `))
let final=parseInt(readline.question(`Digite um numero final - `))

function mostrarNumeros(inic,fim) {  
    
   while (inic <= fim) {  
       console.log(inic)
       inic == ++inic
   }
}

mostrarNumeros(inicio,final)
