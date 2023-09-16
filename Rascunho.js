const readline = require("readline-sync")
const clear = require('clear')
let bancoDeEmprestimos = []
let idEmprestimoAnterior=0

class emprestimo {
    constructor (sequencial,idInstrumento,idAluno,evento,dataEmprestimo) {
        this.idEmprestimo = sequencial
        this.idInstrumento = idInstrumento
        this.idAluno = idAluno
        this.evento = evento
        this.dataEmprestimo = dataEmprestimo
        this.dataDevolucao = null
    }
}

function EmpEmprestar(IdEmprestimoAnterior){
    let status="ok"
    while (true) {
        let idInstrumento = readline.questionInt(`Digite o numero do Instrumento, 0 para desistir: `)
        if (idInstrumento==0){
            console.log(`desistindo`)
            status="d"
            break
        }
    
        /*buscar no banco de instrumentos
            if !existir{
            console.log(`Instrumento inexistente`)
            continue
        }else {
            console.log(`tipo: ${bd.tipo}`)
            console.log(`descrição: ${bd.descricao}`)
        } */
        
        let idAluno = readline.questionInt(`digite a matricula do aluno: `)
      /*buscar no banco de instrumentos
        if !existir{
            console.log(`Aluno inexistente`)
            continue
        }else {
            console.log(`Aluno: ` ${bd.nome})
        } */

        let evento = readline.question(`informe onde será usado `)
        let dataEmprestimo = new Date()
        let idEmprestimo = idEmprestimoAnterior+1
        console.log(`Instrumento liberado para empréstimo em ${dataEmprestimo}`)
        console.log(`Numero sequencial do empréstimo; ${idEmprestimo}`)
        const novoemprestimo = new emprestimo(idEmprestimo,idInstrumento,idAluno,evento,dataEmprestimo);
        bancoDeEmprestimos.push(novoemprestimo)
        IdEmprestimoAnterior=novoemprestimo.idEmprestimo
        break
    }
    
    return status
}

function EmpDevolver(){
    let devolver = readline.questionInt(`Digite o numero do empréstimo: `)
    for (i=bancoDeEmprestimos.length-1; i>= -1; --i){
        if (i < 0){
            console.log(`Numero de empréstimo inválido`)
            break
        }
        if (bancoDeEmprestimos[i].idEmprestimo==devolver){
            if (bancoDeEmprestimos[i].dataDevolucao==null){
                bancoDeEmprestimos[i].dataDevolucao= new Date()
                console.log(`Instrumento devolvido em ${bancoDeEmprestimos[i].dataDevolucao}`)        
            }else {
                console.log(`Instrumento já devolvido em ${bancoDeEmprestimos[i].dataDevolucao} pelo aluno ${bancoDeEmprestimos[i].idAluno}`)
            }
            break
        }
    }
}

function EmpBuscarEmprestimo(){
    let emprest = readline.questionInt(`Digite o numero do empréstimo: `)
    for (i=bancoDeEmprestimos.length-1; i>=-1; i--){
        if (i < 0){
            console.log(`Numero de empréstimo inválido`)
            break
        }
        if (bancoDeEmprestimos[i].idEmprestimo==emprest){
            console.log(bancoDeEmprestimos[i])
            break
            }
    }
}

function EmpBuscarUltimoEmprestimoDoInstrumento(){
    let localizar = readline.questionInt(`Digite o numero do instrumento à localizar: `)
    for (i=bancoDeEmprestimos.length-1; i>=-1; i--){
        if (i < 0){
            console.log(`Instrumento não Localizado`)
            break
        }
        if (bancoDeEmprestimos[i].idInstrumento==localizar){
            console.log(bancoDeEmprestimos[i])
            break
            }
    }
}