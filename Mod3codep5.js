/*
Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o valor 20.

Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada para essa situação.

Codifique a solução mais eficiente para buscar o número 20 no array
*/

//Por ser um pequeno array (com poucos dados), utilizarei o metodo linear.

let array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7]
let buscar=20

function buscarNoArray(entrada,procurar){
    for (i=0; i <= entrada.length-1; i++){
        if (entrada[i] === procurar){
            return i
        } else{
            if (i==entrada.length-1){
                i=-1
                return i
            }
        }
    }
}

let result=buscarNoArray(array,buscar)

if (result==-1){
    console.log(`o item procurado (${buscar}) não foi encontrado na lista`)
}else {
    console.log(`o item procurado (${buscar}) foi encontrado na ${result+1}ª posição da lista (índice [${result}])`)
    }
