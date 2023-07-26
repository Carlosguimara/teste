/* Faça uma função calculadora de dois números com três parâmetros: os dois primeiros serão os números da operação e o terceiro será a entrada que definirá a operação a ser executada. Considera a seguinte definição:
1. Soma
2. Subtração
3. Multiplicação
4. Divisão

Caso seja inserido um número de operação que não exista, o resultado deverá ser 0. */


function CALCULADORA(num1,num2,operador){
    switch (operador) {
    case 1:
        resultado=num1+num2
        op='+'
        break;
    case 2:   
        resultado=num1-num2
        op='-'
        break; 
    case 3:   
        resultado=num1*num2
        op='*'
        break;
    case 4:
        resultado=num1/num2
        op='/'
        break;
    default:
        resultado=0
        op='inválida'
    }
    return resultado, op

}

operador=3;
var num1=5;
var num2=3;
var resfunc;
resfunc, oper = CALCULADORA(num1,num2,operador)
if (resultado != 0){
     console.log(`${num1} ${op} ${num2} = ${resultado}`)}
    else {
        console.log(`Operação(${operador}) ${op} , resultado = ${resultado} `)
    }
