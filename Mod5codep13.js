const leitor = require('readline-sync')
let denum=leitor.questionInt('Vamos dividir o Numero 10, Digite o denominador da divisão: ')
try {
  if (denum === 0) {
    throw "Denominador não pode ser igual a 0 !"
  } else { console.log(`10 dividido por ${denum} = ${10/denum}`)
     }
} catch (erro) {
     console.log(`"Erro:", divisão por 0 no console`)
} finally {
    console.log('Obrigado por me ajudar a praticar !!!')
}
