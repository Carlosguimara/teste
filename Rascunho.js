function CALCULADORA(num1,num2,operador){
  resto=0
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
      resultado=parseInt(num1/num2)
      op='/'
      resto=num1%num2
      break;
  default:
      resultado=0
      op='inválida'
  }
  return resultado, op, resto

}

operador=4;
var num1=5;
var num2=0;
CALCULADORA(num1,num2,operador)
console.log(`${num1} ${op} ${num2} = ${resultado}`)
if (resto != 0){
    console.log(`esta divisão não foi exata, (resto=${resto})`)
}
