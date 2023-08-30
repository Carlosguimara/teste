// Os dois programas estão incluidos neste mesmo código (parte I e Parte II)

//***** Parte I ***** exemplos de codigos usando Funções com sem e com parametros, return e uso de function Arrow

function semparametro(){
    console.log(`Este é um exemplo de função sem parametro`)
}

function comparametroeretorno(par){
    return `Função com parametro e msg de retorno - ${par} !!!`
}

const texto = (nome)=> `Função Arrow - O nome do professor é ${nome}`

semparametro()

let param="Olá mundo"
console.log(comparametroeretorno(param))

let prof='Waldeck'
console.log(texto(prof))

/***** Parte II ***** exemplo de programa utilizando os 3 tipos de função
                    Poderia ter sido feito de uma foma mais otimizada, porém
                    o objetivo é mostrar o uso dos 3 tipos de função *******/

const readline = require("readline-sync")

let operacao= readline.question('Digite o Tipo de Operação (+ ,- ,/ , *) - ')
let num01 = parseInt(readline.question('Digite o 1° número - '))
let num02 = parseInt(readline.question('Digite o 2° número - ')) 

//Função sem parametro e retorno   
function agradecimento(){
    console.log(`Obrigado por me ajudar a testar funções !!!`)
}

//Função Arrow
const calc=(oper,[n1,n2])=> eval(`${n1}${oper}${n2}`)

//Função com parametro e retorno
function resposta(cont){
    msg=`${num01}${operacao}${num02}=${cont}`
    return msg;
  }
agradecimento()
let conta=calc(operacao,[num01,num02])
console.log(resposta(conta))
 



