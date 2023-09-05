const leitor = require('readline-sync')
const aluno1 = {
    matricula: 1,
    nome: "Carlos",
    notas: [5,7,10],
}

const aluno2 = {
    matricula: 2,
    nome: "Maria",
    notas: [9,8.5,8],
}

const alunos= [aluno1,aluno2]
let mat=2
console.log(`**** Cadastro de Alunos ****`)
console.log(`*********** MENU ***********`)
console.log()
console.log(`0 - Sair do sistema`)
console.log(`1 - Listar todos os alunos`)
console.log(`2 - Incluir novo aluno`)
console.log(`3 - Buscar um aluno pela matricula`)
console.log()
console.log(`****************************`)
console.log()
let opc=0
do {
    opc=parseInt(leitor.question(`Digite a opção desejada - `))
    switch(opc){
     case 1:
          console.log()
          console.log(`listando todos os alunos`)
          console.log(`************************`)
          
          for (const a of alunos) {
            let soma=0
            let media=0.0
            console.log(`Nome: ${a.nome}, Matricula: ${a.matricula}`);
              for (let i = 0; i < a.notas.length; i++) {
                console.log(`\t- Nota ${i+1} = ${a.notas[i]}`)
                soma += a.notas[i];
            }
            
            media=soma/(3)
            console.log(`\t- Media=${media.toFixed(1)}`) 
          }
          console.log()
          continue;
     case 2:
        mat= mat=mat+1
         let nomeAluno = leitor.question(`Digite o nome do aluno: `)
         let nota=[]
         for (n=0; n<3; n++){
            nota[n] = parseFloat(leitor.question(`Digite a nota ${n+1}: `))
         }
         const aluno1 = {
            matricula: mat,
            nome: nomeAluno,
            notas: nota
         }
         alunos.push(aluno1)
         break;
      case 3:
         let buscar = leitor.questionInt(`Digite a Matricula do Aluno}: `)
         let soma=0
         let media=0.0
         let achou = false
         for (const a of alunos){
            console.log(a.matricula, buscar)
            if (a.matricula==buscar){
              achou = true  
              console.log(`Nome: ${a.nome}, Matricula: ${a.matricula}`);
              for (let i = 0; i < a.notas.length; i++) {
                console.log(`\t- Nota ${i+1} = ${a.notas[i]}`)
                soma += a.notas[i];
                }
            media=soma/(3)
            console.log(`\t- Media=${media.toFixed(1)}`)
            };
        }
        if (!achou) {
            console.log(`Matricula ${buscar} não encontrada`) 
        }      
          continue;
     case 0:
         console.log()
         console.log(`saindo...`);
         console.log()
         break;
     default:
            console.log()
            console.log(`opção inválida`)
            console.log()
            continue;
    }
    } while (opc!='0');
 

