/* Exercícios:
1.Imprima os números de 1 a 10.
2.Calcule a soma dos números de 1 a 100.
3.Conte e imprima a quantidade de números pares de 1 a 50.
4.Multiplique um número por 2 até que o resultado seja maior que 1000.
5.Verifique se um número é primo.
6.Faça o usuário digitar sua senha até que seja digitada a senha correta.
7.Imprima os múltiplos de 3 de 1 a 30.
8.Calcule a média de uma lista de números.
9.Calcule o fatorial de um número.
10.Imprima os números de 10 a 1 em ordem decrescente. */


//1.Imprima os números de 1 a 10.
var cont=1;;
while (cont<=10) {
  console.log(cont)
  cont== ++cont
}

//2.Calcule a soma dos números de 1 a 100.
var soma=0;
var cont=1
while (cont<=100) {
  soma = soma+cont
  cont= ++cont 
}
console.log(soma)

//3.Conte e imprima a quantidade de números pares de 1 a 50.
var cont=0;
var n=1;
while (n<=50) {
  if (n%2==0) {
    cont= ++cont}
  n= ++n  
}
console.log(cont)

//4.Multiplique um número por 2 até que o resultado seja maior que 1000.
var ninicial=7;
var nfinal=ninicial;
while (nfinal<=1000) {
  nfinal = nfinal*2
}
console.log('número inicial ',ninicial,'| número final', nfinal)

//5.Verifique se um número é primo.
var div=2;
var n=241;
var cont=0;
while (div<n && cont==0) {
  if (n%div==0) {
    cont= ++cont;    }
   div= ++div;  
}
if (cont !=0){
  console.log(n,'não é um numero primo')}
else {
  console.log(n,'é um número primo')}

//6.Faça o usuário digitar sua senha até que seja digitada a senha correta.
// instalar no node 'npm install readlyne-sync'

const leitor=require('readline-sync')
var senha='senha1234@'
var digit=leitor.question('Digite sua senha')
while (digit != senha){
      digit=leitor.question('Senha não confere !, digite novamente sua senha ')}
console.log(' Senha confirmada');

//7.Imprima os múltiplos de 3 de 1 a 30.

var div=3;
var liminf=1;
var limsup=30;
console.log('Os multiplos de', div,'entre',liminf,'e',limsup,'são:');
while (liminf<=limsup){
  if (liminf%div == 0){
    console.log(liminf);}
  liminf= ++liminf;
}

//8.Calcule a média de uma lista de números

var lista, tamlist, cont, media;
lista = [10, 20, 60];
tamlist = lista.length;
cont = 1;
media = 0;
while (cont <= tamlist) {
  media = media + lista[(cont - 1)];
  cont = cont + 1;
}
console.log(media / tamlist);

//9.Calcule o fatorial de um número.
var fat, cont;
n=5;
fat=cont=n;
while (cont > 1){
  cont= --cont;
  fat=fat*(cont-n);
  }
console.log(n,'! =',fat);


//10.Imprima os números de 10 a 1 em ordem decrescente.
var n=10;
 while (n>0){
   console.log(n);
   n= --n
 }   
