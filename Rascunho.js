const leitor = require('readline-sync')

/* Uma determinada empresa vende seus produtos em quatro diferentes estados. Cada estado possui uma taxação de 
   imposto diferente sobre o produto (MG: 7%; SP: 12%; RJ: 15%; MS: 8%). Faça um programa em Javascript, que o 
   usuário entre com o valor e o estado destino do produto e o programa retorne o preço final do produto acrescido 
   do imposto correspondente ao estado onde será vendido. O programa deve mostrar uma mensagem de erro caso o estado 
   fornecido não esteja na lista de estados válidos. */

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