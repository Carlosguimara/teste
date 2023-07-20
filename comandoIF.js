//exercicio para treinar IF ELSE


var n1,texto;
n1=8
texto='Julia'
if (n1 >=0){
    console.log(n1,' É positivo')
   }   else{
    console.log(n1, 'É negativo')
}
if (n1%2 === 0){
    console.log(n1,' É par')
}   else{console.log(n1,' É impar')}

if (texto ===  ''){
    console.log(n1,' Não tem conteúdo')
}   else{console.log('texto= ',texto)}
if (n1 > 10){
    console.log(n1,' É maior que 10')
}   else{ n1 = n1*2;
    console.log('n1 passou a valer ',n1)
}
if (typeof texto === 'boolean')
{
    console.log(texto,' É uma variavel Booleana')
}   else { texto=true;
    console.log('texto passou a valer ',typeof texto)}
    