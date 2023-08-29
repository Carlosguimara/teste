const leitor = require('readline-sync')

/*1-Faça um programa que leia o nome do aluno, três notas e mostre o nome e a média(aritmética) do aluno.

let nota , notas=[] , soma=0 , media
let nome = leitor.question('Digite o nome do aluno: ')

for (i=1;i<=3; i++){
    nota = parseFloat(leitor.question(`Digite a ${i}ª nota `))
    notas[i-1]=nota
    soma += nota //Operador 
    
}
media=soma/3
console.log(notas)
let condicao= (media >= 7) ? 'Aprovado':'Reprovado' //Uso de operador ternário

console.log(`Aluno: ${nome}, 1ª nota-${notas[0]} , 2ª nota-${notas[1]} , 3ª nota-${notas[2]} , Média-${media.toFixed(2)} - ${condicao}`)
*/


/*2-Faça um programa com Javascript para verificar se um determinado ano, fornecido pelo usuário, é bissexto. 
    Um ano é bissexto se for divisível por 4, não for divisível por 100, (porém se for divisivel por 400 é bisexto).
    Exemplos: 1988, 1992, 1996, 2000. Repare que 1900 não é bissexto.


let ano = parseInt(leitor.question('Digite o ano: '))

switch (ano%4){

    case 0:
        if (ano%100==0){
            if (ano>1581){ // Calendario Gregoriano que institui a regra dos 400.
                 if (ano%400!==0){
                     console.log(`${ano} NÂO é um ano bisexto`)
                     break
                 } else {console.log(`${ano} é um ano bisexto`)}
                 break
            }
        }
        console.log(`${ano} é um ano bisexto`)
        break
    default:
        console.log(`${ano} NÂO é um ano bisexto`)
}

*/

/*3-Uma determinada empresa vende seus produtos em quatro diferentes estados. Cada estado possui uma taxação de 
    imposto diferente sobre o produto (MG: 7%; SP: 12%; RJ: 15%; MS: 8%). Faça um programa em Javascript, que o 
    usuário entre com o valor e o estado destino do produto e o programa retorne o preço final do produto acrescido 
    do imposto correspondente ao estado onde será vendido. O programa deve mostrar uma mensagem de erro caso o estado 
    fornecido não esteja na lista de estados válidos.

   let aliq=0.00
   let valor = parseFloat(leitor.question('Digite o valor da mercadoria: R$')).toFixed(2)
   let estado= leitor.question('DIgite o Estado de destino da mercadoria (MG,SP,RJ,MS): ').toUpperCase()
   
       switch (estado){
   
           case 'MG':
               aliq=1.07
               break
           case 'SP':
               aliq=1.12  
               break
           case 'RJ':
               aliq=1.15  
               break 
           case 'MS':
               aliq=1.08
               break
           default:
               console.log(`Estado não cadastrado - ${estado}`)
       }
   if (aliq > 0) {
       let total= valor*aliq
       console.log(`valor da mercadoria - R$${valor} , Impostos(${((aliq-1)*100).toFixed(2)}%) - R$${(valor*(aliq-1)).toFixed(2)}, Valor Total - R$${total.toFixed(2)}`)
   }
   */
