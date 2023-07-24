/* Exercícios:
Verifique o dia da semana com base em um número de 1 a 7.
Converta um número de mês em seu nome correspondente.
Exiba uma mensagem de acordo com o estado civil: "solteiro", "casado", "divorciado" ou "outro".
Exiba uma mensagem dependendo do tipo de animal: "cachorro", "gato", "pássaro" ou "outro".
Calcule o valor de uma operação matemática com base em um operador: soma, subtração, multiplicação ou divisão. */

//Verifique o dia da semana com base em um número de 1 a 7.

var dia=0;
while (dia<=7) {
dia= ++dia
switch (dia) {
  case 1:
    console.log(dia,' Domingo')
    break;
  case 2:
    console.log(dia,' Segunda')
    break;
  case 3:
    console.log(dia,' Terca')
    break;
  case 4:
    console.log(dia,' Quarta')
    break;
  case 5:
    console.log(dia,' Quinta')
    break;
  case 6:
    console.log(dia,' Sexta')
    break;
  case 7:
    console.log(dia,' Sábado')
    break;
  default:
    console.log(dia,' Dia inválido')
}
}

//Converta um número de mês em seu nome correspondente.

var mes=0;
while (mes<=12) {
mes= ++mes
switch (mes) {
  case 1:
    console.log(mes,' Janeiro')
    break;
  case 2:
    console.log(mes,' Fevereiro')
    break;
  case 3:
    console.log(mes,' Março')
    break;
  case 4:
    console.log(mes,' Abril')
    break;
  case 5:
    console.log(mes,' Maio')
    break;
  case 6:
    console.log(mes,' Junho')
    break;
  case 7:
    console.log(mes,' Julho')
    break;
  case 8:
    console.log(mes,' Agosto')
    break;
  case 9:
    console.log(mes,' Setembro')
    break;
  case 10:
    console.log(mes,' Outubro')
    break;
  case 11:
    console.log(mes,' Novembro')
    break;
  case 12:
    console.log(mes,' Dezembro')
    break;
  default:
    console.log(mes,' Mês inválido')
}
}

//Exiba uma mensagem de acordo com o estado civil: "solteiro", "casado", "divorciado" ou "outro".

var ecivil='outro';

switch (ecivil) {
  case 'solteiro':
    console.log('Aproveite a vida enquanto for', ecivil)
    break;
  case 'casado':
    console.log('Uma vez', ecivil, ', você passará a entender mais seus pais')
    break;
  case 'divorciado':
    console.log('agora que você está', ecivil , 'aproveite e reveja seus conceitos !')
    break;
    default:
    console.log('Na verdade, seu estado civil pode ser', ecivil, 'qualquer, isso só diz respeito a você !')
}

//Exiba uma mensagem dependendo do tipo de animal: "cachorro", "gato", "pássaro" ou "outro".

var animal='outro';

switch (animal) {
  case 'cachorro':
    console.log('O', animal,'é o melhor amigo do Homem !')
    break;
  case 'gato':
    console.log('O', animal,'é um animal muito astuto !')
    break;
  case 'pássaro':
    console.log('O', animal,'foi criado por Deus para ser livre !')
    break;
    default:
    console.log('qualquer',animal,'animal também deve ser respeitado !')
}

//Calcule o valor de uma operação matemática com base em um operador: soma, subtração, multiplicação ou divisão.

var operacao='soma';
var n1=2;
var n2=5;

switch (operacao) {
  case 'soma':
    console.log('Considerando 2 numeros quaisquer, como', n1, 'e', n2, 'por exemplo, sua', operacao, 'será igual a', n1+n2)
    break;
  case 'subtração':
    console.log('Considerando 2 numeros quaisquer, como', n1, 'e', n2, 'por exemplo, sua', operacao, 'será igual a', n1-n2)
    break;
  case 'multiplicação':
    console.log('Considerando 2 numeros quaisquer, como', n1, 'e', n2, 'por exemplo, sua', operacao, 'será igual a', n1*n2)
    break
  case 'divisão':
    console.log('Considerando 2 numeros quaisquer, como', n1, 'e', n2, 'por exemplo, sua', operacao, 'será igual a', n1/n2)
    break;
    default:
    console.log(operacao,' é uma operação inválida ')
}
