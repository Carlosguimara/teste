// Exercício 1: Acessar elementos - Dado o array abaixo, acesse o segundo elemento e armazene-o em uma variável chamada "segundoElemento".
const meuArray = [10, 20, 30, 40, 50]
var segundoelemento = meuArray[1]
console.log(segundoelemento)


// Exercício 2: Tamanho do array - Calcule e exiba o tamanho do seguinte array:
const frutas = ['maçã', 'banana', 'laranja', 'uva', 'manga']
tamanho = frutas.length
console.log(tamanho)


// Exercício 3: Adicionar elementos - Adicione o elemento "pera" ao final do array de frutas do exercício anterior.
frutas.push('pera')
console.log(frutas)


// Exercício 4: Remover elementos - Remova o primeiro elemento do array de frutas do exercício anterior.
delete frutas[0]
console.log(frutas)
frutas.splice((frutas.length - frutas.length), 1)
console.log(frutas)


// Exercício 5: Procurar elemento - Dado o array abaixo, verifique se o número 25 está presente e exiba uma mensagem indicando se ele foi encontrado ou não.
const numeros = [10, 20, .30, 40, 50]
var n=25
console.log(numeros.includes(n))
switch (numeros.includes(n)) {
    case true:
        console.log(`${n} está incluido no Array`)
        break;
    default:
        console.log(`${n} não está incluido no Array`);
} 


// Exercício 6: Concatenar arrays - Crie dois arrays com números de 1 a 5 cada e, em seguida, concatene-os em um novo array.
const array1 = [1,2,3,4,5]
const array2 = [1,2,3,4,5]
const array3 = array1.concat(array2)
console.log(array3)


// Exercício 7: Filtrar elementos - Dado o array de números abaixo, crie um novo array contendo apenas os números pares.
const numeros1 = [1,2,3,4,5,6,7,8,9,10]
const pares =numeros1.filter(number => number%2 === 0)
console.log(pares)


// Exercício 8: Ordenar elementos - Ordene o seguinte array de números em ordem crescente.
const numeros2 = [3,1,4,1,5,9,2,6,5,3,5]
console.log(numeros2.sort((a,b) => a - b))


// Exercício 9: Encontrar índice - Dado o array de frutas abaixo, encontre o índice em que a fruta "laranja" está localizada.
const frutas1 = ['maçã','banana','laranja','uva','manga']
var indice = (frutas1.indexOf('laranja'))
if (indice != -1){
    console.log(`posição ${indice}`)
    }
    else {
        console.log(`laranja não está na lista`)
    }


// Exercício 10: Verificar se é array - Crie uma função que receba um parâmetro e verifique se é um array ou não. A função deve retornar true se for um array e false caso contrário.
// Ao invés de testar, resolvi mostrando o tipo da variável.
function testaTipoVar (a){
    console.log(`A variável informada com conteúdo ${a} do tipo ${Object.prototype.toString.call(a)}`)
    return;
    }
let v6,v7=5, v=[[1,2,3],2,"2","",NaN,v6,v7]
testaTipoVar(v[4])



