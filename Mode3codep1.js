/*Você deve criar três listas em JavaScript:

1. para guardar os nomes de dez pessoas;
2. para guardar as suas idades;
3. para guardar as suas cores favoritas.

Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade. Ao terminar, imprima novamente todas as informações das três listas. */


const readline = require("readline-sync")
let tam=parseInt(readline.question(`Digite o tamanho desejado para o array - `))
let ind=0,nomes= Array(tam),idades=Array(tam),cores=Array(tam)

for (let i=0; i<nomes.length ; i++) {
    nomes[i]=readline.question(`Digite o ${i+1}º nome - `);
    idades[i]=readline.question(`Digite a idade - `);
    cores[i]=readline.question(`Digite a cor preferida - `);
}
function ImprimeArray(ind) {
nomes.forEach(function(nome){
    console.log(`Posição- ${ind} -  ${nomes[ind]},${idades[ind]},${cores[ind]}`)
    ind= ++ind
    })
    return
}

ImprimeArray(ind);

let alterar='S',alterar1, campo,campo1, local, campolist=['N','I','C'],correc;
while (alterar==='S'){
    alterar1=readline.question(`Você quer alterar algo nos itens digitados ? Digite S para alterar, qq tecla para encerrar`)
    alterar=alterar1.toUpperCase()
    if (alterar ==='S'){
        campo1=readline.question(`Digite 'N' para alterar o nome, 'I' para idade e 'C' para cor `)
        campo=campo1.toUpperCase()
        local=parseInt(readline.question(`Digite a posição para alteração`))
        if (campolist.includes(campo) && (local>=0 && local<=tam-1)){
            correc=readline.question(`Digite sua alteração`)
            switch (campo){
               case 'N':
                  nomes.splice(local,0,correc)
                  break;
               case 'I':
                  idades.splice(local,0,correc)
                  break;
                default:
                  cores.splice(local,0,correc);
            }
        }else {
            console.log(`Campo ${campo}, e/ou Posição ${local} não encontrado`)
            }
    } 
} 
ind=0;
ImprimeArray(ind);

    /* Log da Execução ****************** */