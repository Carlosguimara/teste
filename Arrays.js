
const meuArray = [10, 20, 30, 40, 50]
var segundoelemento = meuArray[1]
console.log(segundoelemento)

const frutas = ['maçã', 'banana', 'laranja', 'uva', 'manga']
tamanho = frutas.length
console.log(tamanho)

frutas.push('pera')
console.log(frutas)

delete frutas[0]
console.log(frutas)
frutas.splice((frutas.length - frutas.length), 1)
console.log(frutas)

const numeros = [10, 20, .30, 40, 50]
var n=20
console.log(numeros.includes(n))
switch (numeros.includes(n)) {
    case true:
        console.log(`${n} está incluido no Array`)
        break;
    default:
        console.log(`${n} não está incluido no Array`);
}

