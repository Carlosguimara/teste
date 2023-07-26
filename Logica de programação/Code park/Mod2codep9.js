/*
Faça, utilizando o Google Blockly, uma função calculadora que os números e as operações serão feitas pelo usuário. O código deve ficar rodando infinitamente até que o usuário escolha a opção de sair. No início, o programa mostrará a seguinte lista de operações:
1: Soma
2: Subtração
3: Multiplicação
4: Divisão
0: Sair

Digite o número para a operação correspondente e caso o usuário introduza qualquer outro,
 o sistema deve mostrar a mensagem “Essa opção não existe” e voltar ao menu de opções.

Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor, um
 de cada. Depois precisa executar a operação e mostrar o resultado na tela. Quando o usuário
 escolher a opção “Sair”, o sistema irá parar. 

É necessário que o sistema mostre as opções sempre que finalizar uma operação e mostrar o resultado. 
*/

//a resolução deste exercicio, pode ser verificada no link abaixo, e sua execuão no próprio ambiente do Blocly.

//https://blockly-demo.appspot.com/static/demos/code/index.html#c7k5hc

/*
var operacao, oper, num1, num2, operador, mensagem, res;


operacao = ['+', '-', '*', '/'];
oper = 123;
while (oper != 0) {
  oper = Number(window.prompt('Escolha a operação desejada ! 1-Soma ! 2-Subtração ! 3-Multiplicação ! 4-Divisão ! 0-Para encerrar'));
  if (oper == 0) {
    break;
  } else if (oper > 4 || oper < 0) {
    window.alert('Operação inválida');
    continue;
  }
  num1 = Number(window.prompt('Digite o primeiro número'));
  num2 = Number(window.prompt('Digite o segundo número'));
  operador = operacao[(oper - 1)];
  mensagem = [num1,operador,num2,'='].join('');
  if (oper == 1) {
    res = num1 + num2;
  } else if (oper == 2) {
    res = num1 - num2;
  } else if (oper == 3) {
    res = num1 * num2;
  } else {
    res = num1 / num2;
  }
  window.alert(String(mensagem) + String(res));
}
*/