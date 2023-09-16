const readline = require("readline-sync")

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

// base de alunos e instrumentos criadas para teste- deletar antes de integrar ao codigo final

class aluno {
    constructor (matricula,nome){
        this.matricula = matricula
        this.nome = nome
    }
} 

const al1 = new aluno(1,"Carlos")
const al2 = new aluno(2,"Marta")
const al3 = new aluno(3,"Rebeca") 
const al4 = new aluno(4,"Francis")
const al5 = new aluno(10,"Waldeck")

bancoDeAlunos = [al1,al2,al3,al4,al5]


class instrumento {
    constructor (idInstrumento,tipo,descricao,disponibilidade,emprestado){
        this.id = idInstrumento
        this.tipo = tipo
        this.descricao = descricao
        this.dataDeAquisicao = []
        this.disponibilidade = disponibilidade
        this.emprestado = emprestado
    }
} 

const inst1 = new instrumento(1,"Alfaia","hahdakhucbbxjsh",false,false)
const inst2 = new instrumento(2,"Caixa","jhcuaiissnkjndknjbak",true,false)
const inst3 = new instrumento(3,"Agogo","jhasdbkkadbx jsjsh",true,true)
const inst4 = new instrumento(4,"Caixa","liudhknwxkkhdaxkxmbwdjh",true,false)
const inst5 = new instrumento(5,"Timbau","podhpdbjgol   dlb gdl",true,false)
const inst6 = new instrumento(6,"Timbau","liCHI DJ  QKHCL   BDI",true,false) 

bancoDeInstrumentos = [inst1,inst2,inst3,inst4,inst5,inst6]

// Fim das Classes/Atributos fake - deletar



const emp1 = new emprestimo(1,1,3,"Sala 101","2023-09-13T11:09:02.589Z")
const emp2 = new emprestimo(2,2,4,"Sala 102","2023-09-13T13:25:18.589Z)")
const emp3 = new emprestimo(3,4,1,"Praça do Arsenal","2023-09-15T08:35:45.589Z")




let bancoDeEmprestimos = [emp1,emp2,emp3]
let idEmprestimoAnterior=3

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
        let buscaAluno = false
        for (const a of bancoDeAlunos) {
            if (a.matricula == idAluno) {
                console.log(`Aluno: ${a.nome}`)
                buscaAluno = true
            }
        }
        if (!buscaAluno) {
            console.log("Aluno não encontrado.")
            status="a"
            break
            }
            
        let evento = readline.question(`informe onde será usado `)
        let confirmarEmprestimo = readline.question(`Digite 1 para confirmar o empréstimo ou qualquer outra tecla para cancelar: `)
        if (confirmarEmprestimo=="1"){
            let dataEmprestimo = new Date()
            let idEmprestimo = idEmprestimoAnterior+1
            console.log(`Instrumento liberado para empréstimo em ${dataEmprestimo}`)
            console.log(`Numero sequencial do empréstimo; ${idEmprestimo}`)
            const novoemprestimo = new emprestimo(idEmprestimo,idInstrumento,idAluno,evento,dataEmprestimo);
            bancoDeEmprestimos.push(novoemprestimo)
            idEmprestimoAnterior=novoemprestimo.idEmprestimo
        }else {
            console.log(`Empréstimo cancelado !!!`)
            status="c"
        }
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