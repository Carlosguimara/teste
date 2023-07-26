/*
Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja
entre 1922 e 2021. A partir dessas informações, o sistema mostrará o nome do usuário e a
idade que completou, ou completará, no ano atual (2022).

Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema
informará o erro e continuará perguntando até que um valor correto seja preenchido.
*/
var nome, nasc, ano, idade;
nome='Carlos Henrique'
nasc='1985'

try{
    ano=parseInt(nasc)
    if (isNaN(ano) == false){
       if ( ano>=1922 && ano<=2021){
        idade=2022-ano;
        console.log(nome,'nasceu em', nasc,'tendo',idade,'anos, em 2022');
        } else if (ano<1922) {
            throw new Error('Você tem mais de 100 anos ?, vai mentir para outro !');}
        
            else{
                throw new Error('Você nem nasceu ainda, ou ainda é um bebê');}
            } else { throw new Error('Nascimento digitado em formato inválido');
    }
} catch(error) {
    console.log(error)
}

