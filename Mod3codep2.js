/*Nesta atividade, você deve criar um código em JavaScript com uma matriz bidimensional para armazenar informações sobre animais e as suas características.

Cada linha deve representar um animal e cada coluna terá as diferentes informações sobre ele, como nome, espécie e idade.

*/
/********************** INICIO DO PROGRAMA *************************/ 

// Usuário informa a quantidade de animais que será digitada

const readline = require("readline-sync")
let tam=parseInt(readline.question(`Digite a qtde de animais - `))


//Criação da Matriz de acordo com quantidade informada

function criarMatriz(n,m) {
    let matriz =[];
    for (let i = 0; i<n; i++){
        matriz[i] = new Array(m).fill(0);
    }
    return matriz;
}


//leitura dos dados digitados e inserão na Matriz
    
let zooMatriz=criarMatriz(tam,3);

for (let i=0; i<tam ; i++){
    for (let z=0; z<3 ;z++){
        switch (z){
            case 0:
                zooMatriz[i][z]=readline.question(`Digite o nome do ${i+1}º animal -`)
                break;
            case 1:
                zooMatriz[i][z]=readline.question(`Digite a especie -`)
                break;
            default:
                zooMatriz[i][z]=readline.question(`Digite a idade da ${zooMatriz[i][0]} -`);
        }
    }
}

//impressão da Matriz após inclusão dos dados

console.log(zooMatriz)  


/********************** FIM DO PROGRAMA *************************/

//*** LOG DE EXECUÇÂO ***
/*
Digite a qtde de animais – 3

Digite o nome do 1º animal -Vaca
Digite a especie -Ruminante
Digite a idade do Vaca -5

Digite o nome do 2º animal -Cavalo
Digite a especie -Equino
Digite a idade do Cavalo -3

Digite o nome do 3º animal -Cachorro
Digite a especie -Canina
Digite a idade do Cachorro -9

[
  [ 'Vaca', 'Ruminante', '5' ],
  [ 'Cavalo', 'Equino', '3' ],
  [ 'Cachorro', 'Canina', '9' ]
]
*/