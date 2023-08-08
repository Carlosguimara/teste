/*Você deve criar três listas em JavaScript:

1. para guardar os nomes de dez pessoas;
2. para guardar as suas idades;
3. para guardar as suas cores favoritas.

Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade. Ao terminar, imprima novamente todas as informações das três listas. */


/******************************** INICIO DO PROGRAMA ************************************/ 

//Define o numero de entradas desejado (no caso do exercicio será executado com valor 10)

const readline = require("readline-sync")
let tam=parseInt(readline.question(`Digite o tamanho desejado para o array - `))
let ind=0,nomes= Array(tam),idades=Array(tam),cores=Array(tam)


//Inicio da coleta de dados

for (let i=0; i<nomes.length ; i++) {
    nomes[i]=readline.question(`Digite o ${i+1}º nome - `);
    idades[i]=readline.question(`Digite a idade - `);
    cores[i]=readline.question(`Digite a cor preferida - `);
}


//funcão para imprimir o conteúdo dos arrays de forma ordenada e com conteúdo atual

function ImprimeArray(n) {
nomes.forEach(function(nome){
    console.log(`Posição- ${n} -  ${nomes[n]},${idades[n]},${cores[n]}`)
    n= ++n
    })
    return
}


//Após coleta inicial dos dados, manda imprimir o conteúdo dos arrays chamando a função

ImprimeArray(ind);


//Inicia a fase de alterações, tantas quanto usuário deseje.

let alterar='S',alterar1, campo,campo1, local, campolist=['N','I','C'],correc;
while (alterar==='S'){
    alterar1=readline.question(`Você quer alterar algo nos itens digitados ? Digite S para alterar, qq tecla para encerrar-`)
    alterar=alterar1.toUpperCase()
    if (alterar ==='S'){
        campo1=readline.question(`Digite 'N' para alterar o nome, 'I' para idade e 'C' para cor-`)
        campo=campo1.toUpperCase()
        local=parseInt(readline.question(`Digite a posição para alteração-`))
        if (campolist.includes(campo) && (local>=0 && local<=tam-1)){
            correc=readline.question(`Digite sua alteração-`)
            switch (campo){
               case 'N':
                  console.log(`${nomes[local]} substituido por ${correc}`)
                  nomes.splice(local,1,correc)
                  break;
               case 'I':
                  console.log(`${idades[local]} substituido por ${correc}`)
                  idades.splice(local,1,correc)
                  break;
                default:
                  console.log(`${cores[local]} substituido por ${correc}`)
                  cores.splice(local,1,correc);
            }
        }else {
            console.log(`Campo ${campo}, e/ou Posição ${local} não encontrado`)
            }
    } 
} 


//imprime o conteúdo dos arrays após alterações

ImprimeArray(ind);

/******************************** FIM DO PROGRAMA ************************************/    


/***  Dados coletados

Posição- 0 -  Carlos,18,branco
Posição- 1 -  maria,23,branco
Posição- 2 -  zoe,14,preto
Posição- 3 -  Alberto,18,verde
Posição- 4 -  Paula,21,preto
Posição- 5 -  Monica,19,rosa
Posição- 6 -  Fernando,25,amarelo
Posição- 7 -  André Luis,27,azul
Posição- 8 -  Ana Julia,20,marrom
Posição- 9 -  Francis,26,vermelho

*/


/***  Conteúdo dos arrays após alterações

Posição- 0 -  Carlos,18,branco
Posição- 1 -  maria,23,branco
Posição- 2 -  zoe,14,preto
Posição- 3 -  Alberto,18,verde
Posição- 4 -  Paula,21,preto
Posição- 5 -  Monica,19,rosa
Posição- 6 -  Fernando,25,amarelo
Posição- 7 -  André Luis,27,azul
Posição- 8 -  Ana Julia,20,marrom
Posição- 9 -  Francis,26,vermelho

*/

/****  Log completo da Execução 

Digite o tamanho desejado para o array - 10

Digite o 1º nome - Carlos
Digite a idade - 18
Digite a cor preferida - branco
Digite o 2º nome - maria
Digite a idade - 23
Digite a cor preferida - branco
Digite o 3º nome - zoe
Digite a idade - 14
Digite a cor preferida - preto
Digite o 4º nome - Alberto
Digite a idade - 18
Digite a cor preferida - verde
Digite o 5º nome - Paula
Digite a idade - 21
Digite a cor preferida - preto
Digite o 6º nome - Monica
Digite a idade - 19
Digite a cor preferida - rosa
Digite o 7º nome - Fernando
Digite a idade - 25
Digite a cor preferida - amarelo
Digite o 8º nome - André Luis
Digite a idade - 27
Digite a cor preferida - azul
Digite o 9º nome - Ana Julia
Digite a idade - 20
Digite a cor preferida - marrom
Digite o 10º nome - Francis
Digite a idade - 26
Digite a cor preferida - vermelho

Posição- 0 -  Carlos,18,branco
Posição- 1 -  maria,23,branco
Posição- 2 -  zoe,14,preto
Posição- 3 -  Alberto,18,verde
Posição- 4 -  Paula,21,preto
Posição- 5 -  Monica,19,rosa
Posição- 6 -  Fernando,25,amarelo
Posição- 7 -  André Luis,27,azul
Posição- 8 -  Ana Julia,20,marrom
Posição- 9 -  Francis,26,vermelho

Você quer alterar algo nos itens digitados ? Digite S para alterar, qq tecla para encerrar-s

Digite 'N' para alterar o nome, 'I' para idade e 'C' para cor-n
Digite a posição para alteração-2
Digite sua alteração-Zoe Martins
zoe substituido por Zoe Martins

Você quer alterar algo nos itens digitados ? Digite S para alterar, qq tecla para encerrar-s

Digite 'N' para alterar o nome, 'I' para idade e 'C' para cor-n
Digite a posição para alteração-1
Digite sua alteração-Maria José
maria substituido por Maria José

Você quer alterar algo nos itens digitados ? Digite S para alterar, qq tecla para encerrar-s

Digite 'N' para alterar o nome, 'I' para idade e 'C' para cor-i
Digite a posição para alteração-0
Digite sua alteração-30
18 substituido por 30

Você quer alterar algo nos itens digitados ? Digite S para alterar, qq tecla para encerrar-S

Digite 'N' para alterar o nome, 'I' para idade e 'C' para cor-I
Digite a posição para alteração-6
Digite sua alteração-28
25 substituido por 28

Você quer alterar algo nos itens digitados ? Digite S para alterar, qq tecla para encerrar-S

Digite 'N' para alterar o nome, 'I' para idade e 'C' para cor-C
Digite a posição para alteração-7
Digite sua alteração-laranja
amarelo substituido por laranja

Você quer alterar algo nos itens digitados ? Digite S para alterar, qq tecla para encerrar-c

Posição- 0 -  Carlos,30,branco
Posição- 1 -  Maria José,23,branco
Posição- 2 -  Zoe Martins,14,preto
Posição- 3 -  Alberto,18,verde
Posição- 4 -  Paula,21,preto
Posição- 5 -  Monica,19,rosa
Posição- 6 -  Fernando,28,laranja
Posição- 7 -  André Luis,27,azul
Posição- 8 -  Ana Julia,20,marrom
Posição- 9 -  Francis,26,vermelho

*/
