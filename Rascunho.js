const readline = require("readline-sync")
//const clear = require('clear')
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
        idEmprestimoAnterior=novoemprestimo.idEmprestimo
        break
    }
    retorno=[status,idEmprestimoAnterior]
    return retorno
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

let continuar = true
let unlock=false
// MENU INICIAL
while (continuar) {
    if (unlock) {
        readline.keyInPause()
        console.clear()
    } else{
        console.clear()
        unlock=true
    }
	console.log('*** REGISTRO DE EMPRESTIMO DE INSTRUMENTO ***');
	console.log('OPÇÃO:');
	console.log('1. Emprestar Instrumento');
	console.log('2. Devolver Instrumento');
	console.log('3. Listar Emprestimo');
    console.log('4. Localizar Instrumento')
	console.log('0. Sair');
	console.log('**********************************************');
	const opcao = readline.questionInt('Escolha uma opção: ');

	switch (opcao) {
		case 1:
	        retorno=EmpEmprestar(idEmprestimoAnterior)
	        let status=retorno[0]
	        let novoIdEmp=retorno[1]
	        
            if (status=="ok"){
                idEmprestimoAnterior=novoIdEmp
            }else {
                console.log(`Empréstimo não efetuado`)
            }
            continue    

        case 2:
            EmpDevolver()
            continue
		
        case 3:
            EmpBuscarEmprestimo()
            continue
    
        case 4:
            EmpBuscarUltimoEmprestimoDoInstrumento()
            continue
		
		case 0:
			console.log(`Encerrando o programa`);
            continuar = false
			break;
		
		default:
			console.log('Opção inválida. Por favor, escolha uma opção válida.');
			break;
	}
}