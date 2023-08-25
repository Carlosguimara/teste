function CALCULADORA(num1,num2,operador){
  resto=0
  op=operador
  switch (op) {
  case '+':
      resultado=num1+num2
      break;
  case '-':   
      resultado=num1-num2
      break; 
  case '*':   
      resultado=num1*num2
      break;
  case '/':
      resultado=parseInt(num1/num2)
      resto=num1%num2
      break;
  default:
      resultado='Erro'
      op=operador+' (op inválida)'
  }
  return resultado, op, resto

}

operador='/';
var num1=5;
var num2=2;
CALCULADORA(num1,num2,operador)
console.log(`${num1} ${op} ${num2} = ${resultado}`)
if (resto != 0){
    console.log(`esta divisão não foi exata, (resto=${resto})`)
}

