/*Exercícios:
Imprima os números pares de 1 a 20.
Calcule a soma dos números de 1 a 100 utilizando for.
Imprima a tabuada de multiplicação de um número de 1 a 10.
Imprima os números de 10 a 1 em ordem decrescente utilizando for.
Imprima os números de 1 a 100, substituindo múltiplos de 3 por "Fizz", múltiplos de 5 por "Buzz" e múltiplos de ambos por "FizzBuzz".
Calcule a média de uma lista de números utilizando for.
Calcule o fatorial de um número utilizando for.
Imprima os elementos de um array utilizando for.
Calcule a soma dos dígitos de um número utilizando for.
Imprima os números primos de 1 a 50 utilizando for.

  for (inicialização; condição; expressão final) {
  // Código a ser repetido   
}
*/

//Imprima os números pares de 1 a 20
var cont;
for (cont=1;cont<=20; cont++) {
  if (cont%2 == 0){console.log(cont)}
}  

//Calcule a soma dos números de 1 a 100 utilizando for.

var liminf=1;
var limsup=100
var soma=0;
var cont=liminf;
for (cont=liminf;cont<=limsup;cont++){
  soma = soma + cont}
console.log('A soma dos numeros inteiros entre',liminf,'e',limsup,'é',soma);

//Imprima a tabuada de multiplicação de um número de 1 a 10.

var tab=5; 
var cont=1;
for (cont=1; cont<=10; cont++){
  console.log(tab,'x',cont,'=',tab*cont)}

//Imprima os números de 10 a 1 em ordem decrescente utilizando for.
 
var cont=10;
for (cont=10;cont>=1;cont--){
  console.log(cont)}

//Imprima os números de 1 a 100, substituindo múltiplos de 3 por "Fizz", múltiplos de 5 por "Buzz" e múltiplos de ambos por "FizzBuzz".

var cont;
for (cont=1;cont<=100; cont++) {
  if (cont%3==0 && cont%5==0){
    console.log('FizzBuzz')}
  else if (cont%3==0){
    console.log('Fizz')}
  else if (cont%5==0){ 
    console.log('Buzz')}
  else {
    console.log(cont)}
}

//Calcule a média de uma lista de números utilizando for.

var lista, tamlist, cont, media;
lista = [10, 20, 60];
tamlist = lista.length;
cont = 1;
media = 0;
for (cont=1; cont<=tamlist; cont++) {
  media = media + lista[(cont - 1)];
}
console.log(media / tamlist);

//Calcule o fatorial de um número utilizando for.

var fat, cont;
n=5;
fat=n;
for (cont=1; cont<n; cont++) {
  fat=fat*cont;
  }
console.log(n,'! =',fat);


//Imprima os elementos de um array utilizando for.



