//exercicio para treinar IF ELSE IF
//3-Classifique uma variável em 4 categorias: boolean, number, string, undefined
//4-classifique um numero em 5 categorias: negativo, zero, positiovo, par ou impar
//5-verifique se um nbumero é divisivel popr 2,3,5,7


var n1,variavel;
n1=-5
variavel=true

//1-Classifique um numero em 3 categorias:negativo, Zero ou Positivo
if (n1 >0){
    console.log(n1,' É positivo')
   }   else if (n1<0){console.log(n1, 'É negativo')}
       else{ console.log(n1, 'É Zero')
}      
             
//2-Verfifique se o numero é divisivel por 2,3 ou 5 

let n2=300
if (n2%2 === 0 ){
    console.log(n1,' É divisivel por 0')}
if (n2%3 === 0){ 
    console.log(n1,' É divisivel por 3')}
if (n2%5 === 0){ 
        console.log(n1,' É divisivel por 5')
}