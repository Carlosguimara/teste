const readline = require("readline-sync")
const clear = require('clear')
let bancoDeEmprestimos = []
let sequencial=0

class emprestimo {
    constructor (sequencial,idInstrumento,idAluno,evento,dataEmprestimo) {
        this.idEmprestimo=
        this.idInstrumento
        this.idAluno
        this.evento
        this.dataEmprestimo
        this.dataDevolucao = null
    }
}

function EmpEmprestar(IdEmprestimoAnt){
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
        break
    }
    return status, idEmprestimo, idInstrumento, idAluno, evento, dataEmprestimo
}

function EmpDevolver(idEmprestimo){
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
    continue
}