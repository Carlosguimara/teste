/* Exercícios:
Imprima os números de 1 a 10.
Calcule a soma dos números de 1 a 100.
Conte e imprima a quantidade de números pares de 1 a 50.
Multiplique um número por 2 até que o resultado seja maior que 1000.
Verifique se um número é primo.
Faça o usuário digitar sua senha até que seja digitada a senha correta.
Imprima os múltiplos de 3 de 1 a 30.
Calcule a média de uma lista de números.
Calcule o fatorial de um número.
Imprima os números de 10 a 1 em ordem decrescente. */


//Imprima os números de 1 a 10.
var cont=1;;
while (cont<=10) {
  console.log(cont)
  cont== ++cont
}

//Calcule a soma dos números de 1 a 100.
var soma=0;
var cont=1
while (cont<=100) {
  soma = soma+cont
  cont= ++cont 
}
console.log(soma)

//Conte e imprima a quantidade de números pares de 1 a 50.
var cont=0;
var n=1;
while (n<=50) {
  if (n%2==0) {
    cont= ++cont}
  n= ++n  
}
console.log(cont)

//Multiplique um número por 2 até que o resultado seja maior que 1000.
var ninicial=7;
var nfinal=ninicial;
while (nfinal<=1000) {
  nfinal = nfinal*2
}
console.log('número inicial ',ninicial,'| número final', nfinal)
