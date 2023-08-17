/*
1- Crie um programa que recebe do teclado um número e tenta dividir por zero dentro 
de um bloco try...catch. Capture o erro e o exiba "Erro: Divisão por zero" no console.
*/
/*
const leitor = require('readline-sync')

let num=leitor.questionInt('Digite o numerador da divisão ')

try {
 
  if (num === 0) {
    throw "Valor negado"
  } else { console.log(`10 dividido por ${num} = ${10/num}`)
     }
} catch (erro) {
     console.log(`"Erro:", divisão por 0 no console`)
} 
*/

/*
2- Crie um programa que recebe do teclado uma string não numérica em um número utilizando 
parseInt dentro de um bloco try...catch. Capture o erro e o exiba "Erro: Conversão inválida" no console.
*/
/*
const leitor = require('readline-sync')

let texto=leitor.question('Digite uma letra ou frase ')

try {
    let texto=parseInt(texto)
} catch (erro) {
     console.log(`"Erro: Conversão inválida" no console`)
} 
console.log(texto)
*/

/*
3-Crie um programa que recebe do teclado um objeto e tente acessar uma propriedade inexistente desse 
objeto dentro de um bloco try...catch. Capture o erro e o exiba "Erro: Propriedade não encontrada" no console.
*/

const leitor = require('readline-sync')

const pessoa={ nome: leitor.question('Digite o nome '),
              idade: leitor.questionInt('Digite a idade ')}

try {
  //console.log(pessoa.nome); // correto 0 nome do objeto é pessoa
  console.log(cliente.nome); // Errado, o objeto cliente não está denido
  console.log(`${pessoa.nome}, ${pessoa.idade} anos`);
} catch (error) {
  console.log("[Erro]");//
  console.log(error.message); 
}