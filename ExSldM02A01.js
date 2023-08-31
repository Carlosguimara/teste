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

 /*4-Faça um programa que calcule e mostre a soma dos N primeiros números pares. 
     Faça três versões desse programa, cada uma usando uma estrutura de repetição diferente 
     (for, while, do-while). Qual das três estruturas é a mais adequada para este programa? Por que?
 

let soma=0,qtd=50
for (let i=1; i<=(qtd*2); i++) {
    if (i%2==0){
       soma +=i
    }
}
console.log(`a soma dos primeiros ${qtd} numeros pares é ${soma} (calculado com e estrutura FOR)`)

let soma1=0,qtd1=50, i=1
while  (i <= qtd1*2) {
    if (i%2==0){
       soma1 +=i
    }
    i++
}
console.log(`a soma dos primeiros ${qtd} numeros pares é ${soma} (calculado com e estrutura WHILE)`)

let soma2=0,qtd2=50, i2=1
do  {
    if (i2%2==0){
       soma2 +=i2
    }
    i2++
} while (i2 <= qtd2*2)

console.log(`a soma dos primeiros ${qtd} numeros pares é ${soma} (calculado com e estrutura DO WHILE)`)

*/

/*5-Faça um programa em Javascript que receba do usuário um número N e depois imprima os N primeiros 
    números naturais ímpares.

    let qtd= parseInt(leitor.question(`Digite a qtde desejada `))   

    let soma=0
    for (let i=1; i<=(qtd*2); i++) {
        if (i%2!==0){
           console.log(i)
        }
    }
*/

/*6- Uma empresa contrata um encanador a R$ 30,00 por dia. Crie um programa que solicite o número de dias 
     trabalhados pelo encanador e imprima a quantia líquida que deverá ser paga, sabendo-se que são 
     descontados 8% para pagamento de impostos e taxas devidas.

     
let dias= parseInt(leitor.question(`Digite o numero de dias a ser pago `))   

let aliq= 8.00, valor=30.00, pagto=(valor *=dias).toFixed(2), imposto=(pagto*(aliq/100)).toFixed(2)

console.log(`Valor da Diaria R$${valor.toFixed(2)}, Dias trabalhados ${dias}, Valor Bruto a receber R$${pagto}, Impostos R$${imposto}, Liquido a receber R$${(pagto-imposto).toFixed(2)}`)

*/

/*7-Faça um programa para ler um horário (hora:minuto:segundo) de início e a duração, em segundos, de uma experiência 
    biológica. O programa deve informar o horário (hora:minuto:segundo) de término da mesma.

let inicio= leitor.question(`Digite a hora de inicio no formato hh:mm:ss - `)
let horain= inicio.split(":")
//console.log(horain)

let dura= parseInt(leitor.question(`Digite a duração da experiencia em segundos - `))

let inicseg = horain[0]*3600 + horain[1]*60 + horain[2]*1
//console.log( horain[0]*3600 , horain[1]*60 , horain[2], inicseg)
let fimseg = inicseg+dura
console.log(inicseg,fimseg)

let hfim=Math.trunc(fimseg/3600)
let mfim=Math.trunc((fimseg/3600-hfim)*60)
let sfim=((((fimseg/3600-hfim)*60)-mfim)*60).toFixed(0)

let fim =(`${hfim}:${mfim}:${sfim}`)
console.log(fim) 
*/


/*8-Uma empresa paga R$ 10,00 por hora normal trabalhada e R$ 15,00 por hora extra. Escreva um programa que leia o total de horas normais 
e o total de horas extras trabalhadas por um empregado em um ano e calcule o salário anual deste trabalhador

let horasnormais= parseInt(leitor.question(`Digite o numero de Horas Normais trabalhadas no ano `))   
let horasextras= parseInt(leitor.question(`Digite o numero de Horas Extras trabalhadas no ano `)) 
let valorN=horasnormais*10.00
let valorE=horasextras*15.00
let valoranual=valorN+valorE

console.log(`Salario Anual=R$${valoranual.toFixed(2)}`)
*/
