const leitor = require('readline-sync')

/* Considerando 7,0 a nota mínima para o aluno ser aprovado, fazer:

   1º Código: Com base em 3 notas fornecidas, verificar se o aluno foi aprovado ou reprovado.
   2º Código: Dado as 2 primeiras notas, informar qual é a próxima nota mínima necessária para a aprovacão.
   
   Utilizar pelo menos um operador de atribuição e um operador ternario

   *** incorporei as 2 solicitaões acima em um único código, de forma que após a digitação da 2a nota, 
    o programa informa ao usuário qual é a proxima nota mínima para o aluno alcanar a aprovação. 
    Após receber a 3a nota o programa, mostra as notas digitadas, a média final e a condição do 
    aluno(aprovado ou reprovado). */

let nota , notas=[] , soma=0 , media, falta

for (i=1;i<=3; i++){
    nota = parseFloat(leitor.question(`Digite a ${i}ª nota `))
    notas[i-1]=nota
    soma += nota //Operador 
    if (i==2){
        falta=21-soma
        console.log(`*** AVISO !!! *** Para ser Aprovado, sua 3a nota de ser no mínimo ${falta.toFixed(1)}`)
    }
}
media=soma/3
console.log(notas)
let condicao= (media >= 7) ? 'Aprovado':'Reprovado' //Uso de operador ternário

console.log(`1ª nota-${notas[0]} , 2ª nota-${notas[1]} , 3ª nota-${notas[0]} , Média-${media.toFixed(2)} - ${condicao}`)
