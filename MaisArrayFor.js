/*
1-Dado um array de números [3, 7, 2, 9, 5], crie um loop "for" que itere pelo array e exiba cada elemento no console.
*/
/*
const numeros = [3, 7, 2, 9, 5]

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
*/


/*
2-Suponha que você tenha um objeto com valores numéricos: {a: 10, b: 20, c: 30, d: 40}. 
  Utilize um laço "for...in" para iterar pelas chaves do objeto e calcular a soma de todos os valores.
*/
/*
const codigos = [{a: 10, b: 20, c: 30, d: 40}]

for (let item in codigos) {
  console.log(codigos[item].a+codigos[item].b+codigos[item].c+codigos[item].d);
}
*/



/*
3-Dado um array de números [12, 5, 8, 21, 16, 7], crie um loop "for" que itere pelo array, verificando se cada número é par. 
  Se for par, adicione-o a um novo array. No final, exiba o novo array com os números pares.
*/
/*
const numeros = [12, 5, 8, 21, 16, 7], pares = []

for (let i = 0; i < numeros.length; i++) {
  let resto=numeros[i]%2
    if (resto==0){
       pares.push(numeros[i])
    }
}
console.log(pares)
*/


/*
4-Considere um objeto com informações de estudantes: const estudantes = { alice: 18, bob: 20, carol: 19, david: 21 }; 
  Utilize um loop "for...in" para verificar se há um estudante com a idade de 19 anos. Se sim, 
  exiba "Nome do estudante: idade" no console.
*/
/*
const estudantes = [{nome: "alice", idade: 18}, {nome: "bob", idade: 20}, {nome: "carol", idade: 19}, {nome: "david", idade: 21}];


for (let item of estudantes) {
    if (item.idade==19)
        console.log(`${item.nome} tem ${item.idade} anos`)
 
}
*/


/*
5-Imagine que você tem uma matriz bidimensional representando uma grade de   
  pontos: const estudantes = [{nome: "alice", idade: 18}, {nome: "bob", idade: 20}, {nome: "carol", idade: 19}, {nome: "david", idade: 21}];


for (let item of estudantes) {
    if (item.idade==19)
        console.log(`${item.nome} tem ${item.idade} anos`)
 
}
*/


/*
5-Imagine que você tem uma matriz bidimensional representando uma grade 
  de pontos: const pontos = [ [2, 5, 8], [3, 9, 12], [4, 6, 10] ]; Utilize dois loops "for" aninhados 
para calcular a soma de todos os elementos da matriz e exibir o resultado.
  */

const pontos = [ [2, 5, 8], [3, 9, 12], [4, 6, 10] ];

function somaMatriz(matriz){
    let soma=0
    for (let x=0; x < pontos.length; x++) {
        for(let y=0; y < pontos[x].length; y++){
            soma=soma+pontos[x][y]
       }
     }
     console.log(soma)
}
somaMatriz(pontos)


