
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

const array1 = [1,2,3,4,5]
const array2 = [1,2,3,4,5]
const array3 = array1.concat(array2)
console.log(array3)

const numeros1 = [1,2,3,4,5,6,7,8,9,10]
const pares =numeros1.filter(number => number%2 === 0)
console.log(pares)

const numeros2 = [3,1,4,1,5,9,2,6,5,3,5]
console.log(numeros2.sort((a,b) => a - b))


const frutas1 = ['maçã','banana','laranja','uva','manga']
var indice = (frutas1.indexOf('laranja'))
if (indice != -1){
    console.log(`posição ${indice}`)
    }
    else {
        console.log(`laranja não está na lista`)
    }

 /*def testaArray (a):
      var taman 
        return resp

        usar typeof




