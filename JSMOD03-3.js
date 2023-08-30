// Os dois programas estão incluidos neste mesmo código (parte I e Parte II)

//***** Parte I ***** exemplos de codigos usando Funções com sem e com parametros, return e uso de function Arrow

function semparametro(){
    console.log(`Este é um exemplo de função sem parametro`)
}

function comparametroeretorno(par){
    return `Função com parametro e msg de retorno - ${par} !!!`
}

const texto = (nome)=> `Função Arrow - O nome do professor é ${nome}`

semparametro()

let param="Olá mundo"
console.log(comparametroeretorno(param))

let prof='Waldeck'
console.log(texto(prof))

//***** Parte II ***** exemplo de programa utilizando os 3 tipos de função



