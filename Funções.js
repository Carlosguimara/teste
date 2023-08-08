
//1-Crie uma funçaõ chamada saudação que exiba a mensagem "Olá, mundo !" no console quando for chamada.
function exibirSaudacao() {
    console.log("Olá Mundo !"); 
 }
 
 exibirSaudacao()

//outra 
 
 let mensagem="Carlos";

function exibirSaudacao(mens) {
   console.log(`Bom dia ${mens} !`); 
}

exibirSaudacao(mensagem)


//outra

const readline = require("readline-sync")
let mensagem1=(readline.question(`Digite seu nome - `))
let diahoje=parseInt(readline.question(`Digite a dia do mes - `))
let meshoje=parseInt(readline.question(`Digite o mes (1 a 12) - `))



function exibirSaudacao(mens, dia,mes) {
   console.log(`Bom dia ${mens} hoje é ${dia}/${mes} !`); 
}

exibirSaudacao(mensagem1,diahoje,meshoje)

//2-Escreva uma função chamada dobro que aceite um parametro num e exiba o dobro deste numero na console

const readline = require("readline-sync")
let num2=parseInt(readline.question(`Digite um número - `))

function calcularDobro(num) {
   console.log(`O dobro de ${num} é ${(num*2)}`); 
}

calcularDobro(num2)

/*3-Crie uma funçao chamada mostrarNumeros que receba dois parametros, inicio e fim.
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

//4-Escreva uma função chamada verificarPar que aceite um número como entrada
    e exiba no console se o número é par ou não

    const readline = require("readline-sync")
    let num4=parseInt(readline.question(`Digite um numero - `))
    
    function verificarPar(num) {  
    
       if (num%2==0) {  
           console.log(`o número ${num} é PAR`)
       } else {
           console.log(`o número ${num} é IMPAR`);
       }
    }
    
    verificarPar(num4)

    //5-Crie uma função chamada imprimirLista que aceite um array como parametro
        e que exiba cada elemento desse array no console, um por um

        let meuArray=[1,2,"E","D"]

        function imprimirLista(array) {  
            let tam=array.length-1
            
            for (let ind=0; ind<=tam; ++ind) {
               console.log(array[ind])
            }
               
        }
        
        imprimirLista(meuArray)

        /*6-Escreva uma função chamada calcularMedia que receba um array de números como parâmetro 
          e calcule a média desses números. Não é necessário exibir o resultado, apenas retorne o valor da média. */



        /*7-Crie uma função chamada maiorNumero que receba um array de números como parâmetro e exiba o maior número 
            presente no array no console.*/



        /*8-Escreva uma função chamada contarVogais que aceite uma string como parâmetro e conte quantas 
            vogais (a, e, i, o, u) ela contém. Exiba o resultado no console.*/



        /*9-Crie uma função chamada imprimirTabuada que aceite um número como entrada e exiba a tabuada desse número 
            de 1 a 10 no console.*/



        /*10-Escreva uma função chamada verificarPrimo que receba um número como parâmetro e exiba no console se o 
             número é primo ou não.*/

             




