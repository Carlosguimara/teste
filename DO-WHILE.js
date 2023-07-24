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
var cont=1;
do {
  console.log(cont)
  cont== ++cont
} while (cont<=10);

//Calcule a soma dos números de 1 a 100.
var soma=0;
var cont=1
do {
  soma = soma+cont
  cont= ++cont 
} while (cont<=100);
console.log(soma)

//Conte e imprima a quantidade de números pares de 1 a 50.
var cont=0;
var n=1;
do {
  if (n%2==0) {
    cont= ++cont}
  n= ++n  
}while (n<=50);
console.log(cont)

//Multiplique um número por 2 até que o resultado seja maior que 1000.
var ninicial=7;
var nfinal=ninicial;
do {
  nfinal = nfinal*2
}while (nfinal<=1000);
console.log('número inicial ',ninicial,'| número final', nfinal)

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

//Faça o usuário digitar sua senha até que seja digitada a senha correta. (ESSE NÂO TEM COMO FAZER SEM TESTAR PRIMEIRO)

var senha='senha1234@'
var digit=window.prompt('Digite sua senha')
while (digit != senha){
      digit=window.prompt('Senha não confere !, digite novamente sua senha ')}
window.alert(' Senha confirmada');

//Imprima os múltiplos de 3 de 1 a 30.

var div=3;
var liminf=1;
var limsup=30;
console.log('Os multiplos de', div,'entre',liminf,'e',limsup,'são:');
do{
  if (liminf%div == 0){
    console.log(liminf);}
  liminf= ++liminf;
} while (liminf<=limsup);

//Calcule a média de uma lista de números

var lista, tamlist, cont, media;
lista = [10, 20, 60];
tamlist = lista.length;
cont = 1;
media = 0;
do {
  media = media + lista[(cont - 1)];
  cont = cont + 1;
}while (cont <= tamlist);
console.log(media / tamlist);


//Calcule o fatorial de um número.
var fat, cont;
n=5;
fat=cont=n;
do{
  cont= --cont;
  fat=fat*(cont-n);
  }while (cont > 1);
console.log(n,'! =',fat);


//Imprima os números de 10 a 1 em ordem decrescente.
var n=10;
 do{
   console.log(n);
   n= --n
}while (n>1);
   
