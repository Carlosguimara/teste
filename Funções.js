
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

/*4-Escreva uma função chamada verificarPar que aceite um número como entrada
    e exiba no console se o número é par ou não*/

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

/*5-Crie uma função chamada imprimirLista que aceite um array como parametro
    e que exiba cada elemento desse array no console, um por um*/

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

    const readline = require("readline-sync")
    const meuArray6 = []
    let num6, fim6
    
    //Pede ao usario que digite os itens a serem incluidos um a um 
    do {
        fim6 = readline.question('Digite * para encerrar ou enter para continuar - ')
        if (fim6 == "*" ){
            break
        }
        num6 = parseInt(readline.question('Digite um numero a ser incluido - '))
        meuArray6.push(num6)
    } while (fim6 !='*');
        
    console.log(meuArray6)
    
    //calcula o amanho do array e se tamanho maior que Zero, chama a função para calcular a média.
    let tam6=meuArray6.length
    if (tam6 >1){
        calcularMedia(meuArray6,tam6)
        }
    
    // define função que calcua a média e divulga o resultado
    function calcularMedia(array,tam) {  
                let soma=array.reduce(function(acumulado,atual){
                    return acumulado+atual;
                })
                let media=soma/tam
                console.log(`Média - ${media.toFixed(2)}`)
    }
    
/*7-Crie uma função chamada maiorNumero que receba um array de números como parâmetro e exiba o maior número 
    presente no array no console.*/

    let meuArray7=[1,2,10,8,25,23]

    function valorMaximo(array) { 
        //usa a função (método ?) Math.Max() para descobrir o maior valor do array
        let maximo = Math.max(...array)
        console.log(meuArray7)
        console.log(`O maior valor deste array é ${maximo}`)
    }
                   
    valorMaximo(meuArray7)

/*8-Escreva uma função chamada contarVogais que aceite uma string como parâmetro e conte quantas 
    vogais (a, e, i, o, u) ela contém. Exiba o resultado no console.*/

 //Pede ao usuário para digitar qualquer frase
 const readline = require("readline-sync")
 let frase8 = readline.question('Digite uma frase qualquer em minusculas e sem acento - ')
 
// converte todas as letras para minusculas 
 fraseconvert8=frase8.toLowerCase()
 
// separa todos os acentos
 frasenormalizada8=fraseconvert8.normalize("NFD")
 
//Funcão para contar as letras usando split
 function contaLetras(frase,letra) {

     let ocorrencias = frasenormalizada8.split(letra).length -1
     console.log(`Nesta frase a letra '${letra}' aparece ${ocorrencias} vezes`)
 } 

//chama a função contaLetras para cada vogal    
 contaLetras(frasenormalizada8,"a")
 contaLetras(frasenormalizada8,"e")
 contaLetras(frasenormalizada8,"i")
 contaLetras(frasenormalizada8,"o")
 contaLetras(frasenormalizada8,"u")
 


/*9-Crie uma função chamada imprimirTabuada que aceite um número como entrada e exiba a tabuada desse número 
    de 1 a 10 no console.*/

/*
VAR cont,tab;inteiro

INICIO

tab <- 1

ENQUANTO (tab <> 0) FACA
   ESCREVA("Informe o valor da tabuada desejada - digite 0 para encerrar")
   LEIA(tab)
   SE (tab <> 0)
      cont <-1
      PARA cont <-1 ATÉ 10 FAÇA
           ESCREVA(tab,"*",cont,"=",tab*cont)
           FIMPARA
   FIMSE
FIMENQUANTO
ESCREVA("Espero ter lhe ajudado, até breve !")
FIMALGORITMO
*/

/*10-Escreva uma função chamada verificarPrimo que receba um número como parâmetro e exiba no console se o 
     número é primo ou não.*/

 /* 
 //Verifique se um número é primo.
var div=2;
var n=17;
var cont=0;
do {
  if (n%div==0) {
    cont= ++cont;    }
   div= ++div;  
} while (div<n && cont==0);
if (cont !=0){
  console.log(n,'não é um numero primo')}
else {
  console.log(n,'é um número primo')}

*/      




