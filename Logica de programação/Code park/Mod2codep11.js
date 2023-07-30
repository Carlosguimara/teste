/*INSTRUÇÕES DO PROJETO
Desenvolva um código que simule uma eleição com três candidatos.
- candidato_X => 889
- candidato_Y => 847
- candidato_Z => 515
- branco => 0

O código deve perguntar se deseja finalizar a votação depois do voto. 
Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo.
Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.

Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e,
também, a quantidade de votos de cada candidato, os brancos e nulos. 
*/

const readline = require("readline-sync");
var Carlos = Roberto = Luciana = branco = nulo = total = voto =0;
var encerrar;

//Faça enquanto não for digitado "FIM"
while (encerrar != 'FIM') {
    voto = readline.question ("Digite o seu voto ou FIM para encerrar ");
    encerrar = voto;
    //Se voto tiver recebido algum caracter ele assumira valor NaN
    voto= Number(voto);
    //Contabilização dos votos numéricos 
    if ( voto === voto ){
        total= ++total;
        switch (voto){
            case 889:
                Carlos= ++Carlos
                break;
            case 847:
                Roberto= ++Roberto
                break;
            case 515:
                Luciana= ++Luciana
                break;
            case 0:
                branco= ++branco
                break
            default:
                nulo= ++nulo
        }
    }    else  if (encerrar != 'FIM') {
            /* Qualquer caracter digitado com exceção de 'FIM' será
            considerado voto inválido, e será solicitado nova entrada */
            console.log(`Voto ${voto} inválido, digite seu voto novamente !`);
            }
}
//Montagem de Array com nome do candidato e votos recebidos
var classif =[{nome: Object.keys({Carlos}) [0], votos: Carlos},
              {nome: Object.keys({Roberto}) [0], votos: Roberto},
              {nome: Object.keys({Luciana}) [0], votos: Luciana},
              {nome: Object.keys({branco}) [0], votos: branco},
              {nome: Object.keys({nulo}) [0], votos: nulo}];

//Classificação em ordem decrescente de votos
classif.sort(function (a,b) {
    return b.votos-a.votos;});

//Divulgação do resultado
console.log (`********\nRESULTADO FINAL DA APURAÇÃO DOS VOTOS\n\nForam apurados ${total} votos\n\nVENCEDOR ${classif[0].nome.padEnd(8)} com ${classif[0].votos} votos\n`) 

for (var i=0; i < classif.length; i++){
    var percent= classif[i].votos/total*100
    console.log(`${classif[i].nome.padEnd(8)} recebeu ${classif[i].votos} votos, (${percent.toFixed(2)}% dos votos)`)
}