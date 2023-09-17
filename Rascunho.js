const readline = require("readline-sync")

//**base de alunos e instrumentos criadas para teste - deletar antes de integrar ao codigo final
                                                                                        //deletar
class aluno {                                                                           //deletar  
    constructor (matricula,nome){                                                       //deletar
        this.matricula = matricula                                                      //deletar
        this.nome = nome                                                                //deletar
    }                                                                                   //deletar
}                                                                                       //deletar
                                                                                        //deletar
const al1 = new aluno(1,"Carlos")                                                       //deletar
const al2 = new aluno(2,"Marta")                                                        //deletar
const al3 = new aluno(3,"Rebeca")                                                       //deletar
const al4 = new aluno(4,"Francis")                                                      //deletar
const al5 = new aluno(10,"Waldeck")                                                     //deletar
                                                                                        //deletar
let bancoDeAlunos = [al1,al2,al3,al4,al5]                                               //deletar
                                                                                        //deletar
class instrumento {                                                                     //deletar
    constructor (idInstrumento,tipo,descricao,disponibilidade,emprestado){              //deletar
        this.id = idInstrumento                                                         //deletar
        this.tipo = tipo                                                                //deletar
        this.descricao = descricao                                                      //deletar
        this.dataDeAquisicao = []                                                       //deletar
        this.disponibilidade = disponibilidade                                          //deletar
        this.emprestado = emprestado                                                    //deletar
    }                                                                                   //deletar
}                                                                                       //deletar
                                                                                        //deletar
const inst1 = new instrumento(1,"Alfaia","hahdakhucbbxjsh",false,false)                 //deletar
const inst2 = new instrumento(2,"Caixa","jhcuaiissnkjndknjbak",true,true)               //deletar
const inst3 = new instrumento(3,"Agogo","jhasdbkkadbx jsjsh",true,false)                //deletar
const inst4 = new instrumento(4,"Caixa","liudhknwxkkhdaxkxmbwdjh",true,true)            //deletar
const inst5 = new instrumento(5,"Timbau","podhpdbjgol   dlb gdl",true,true)             //deletar
const inst6 = new instrumento(6,"Timbau","liCHI DJ  QKHCL   BDI",true,false)            //deletar
const inst7 = new instrumento(7,"Caixa","ihqkwineeknwcdk",true,false)                   //deletar
const inst8 = new instrumento(8,"Agogo","ikdhkhjkhdksjwcdk",true,false)                 //deletar
                                                                                        //deletar
let bancoDeInstrumentos = [inst1,inst2,inst3,inst4,inst5,inst6,inst7,inst8]             //deletar
                                                                                        //deletar
// Fim das Classes/Atributos fake                                                       //deletar


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

const emp1 = new emprestimo(1,2,3,"Sala 101","2023-09-13T11:09:02.589Z")
const emp2 = new emprestimo(2,4,4,"Sala 102","2023-09-13T13:25:18.679Z")
const emp3 = new emprestimo(3,5,1,"Praça do Arsenal","2023-09-15T08:35:45.125Z")

let bancoDeEmprestimos = [emp1,emp2,emp3]
let idEmprestimoAnterior=3

// Funçoes ***********************************************************

//********************************************************************
function EmpEmprestar(IdEmprestimoAnterior){
    let status="ok"
    while (true) {
        let idInstrumento = readline.questionInt(`Digite o numero do Instrumento, 0 para cancelar: `)
        if (idInstrumento==0){
            console.log(`*** CANCELANDO ***`)
            status="d"
            break
        }
    
        let buscaInstrumento = false
        for (const a of bancoDeInstrumentos) {
            if (a.id == idInstrumento) {
                buscaInstrumento=true
                if (a.disponibilidade & !a.emprestado){
                  console.log(`Tipo: ${a.tipo}`)
                  console.log(`Descrição: ${a.descricao}`)
                  status="ok"
                }else {
                    if(a.emprestado == true){
                        console.log(`*** O INSTRUMENTO JÁ ESTÁ EMPRESTADO ***`)
                        status="e"
                        break
                    } else {
                        console.log(`*** INSTRUMENTO EM MANUTENÇÃO ***`)
                        status="m"
                        break
                        }
                    continue
                    }
                }
            }
        if (status != "ok"){
            break
        }
        if (!buscaInstrumento) {
            console.log("*** INSTRUMENTO NÃO CADASTRADO ***")
            continue
            }
        let idAluno=0
        while(true) {  
            idAluno = readline.questionInt(`digite a matricula do aluno ou 0 para cancelar: `)
            if (idAluno==0){
                console.log(`*** CANCELANDO ***`)
                status="a"
                break
            }
            let buscaAluno = false
            for (const a of bancoDeAlunos) {
                if (a.matricula == idAluno) {
                    status="ok"
                    console.log(`Aluno: ${a.nome}`)
                    buscaAluno = true
                    break
                }
            }
            if (!buscaAluno) {
                console.log("*** ALUNO INEXISTENTE ***")
                status="a"
                continue
            }
            break
                
        }
        
        if (status != "ok"){
            break
        }
        
        let evento = readline.question(`informe onde será usado: `)
        let confirmarEmprestimo = readline.question(`Digite 1 para confirmar o empréstimo ou qualquer outra tecla para cancelar: `)
        if (confirmarEmprestimo=="1"){
            let dataEmprestimo = new Date()
            let idEmprestimo = idEmprestimoAnterior+1
            console.log()
            console.log(`Instrumento liberado para empréstimo em ${dataEmprestimo}`)
            console.log()
            console.log(`Numero sequencial do empréstimo ===> ${idEmprestimo}`)
            console.log()
            const novoemprestimo = new emprestimo(idEmprestimo,idInstrumento,idAluno,evento,dataEmprestimo);
            bancoDeEmprestimos.push(novoemprestimo)
            //sinalizando emprestimo no bancoDeInstrumentos
            for (const a of bancoDeInstrumentos) {
                if (a.id == idInstrumento) {
                    a.emprestado=true
                }
            }
            idEmprestimoAnterior=novoemprestimo.idEmprestimo
        }else {
            console.log(`*** EMPRÉSTIMO CANCELADO ***`)
            status="c"
        }
        break
    }
    retorno=[status,idEmprestimoAnterior]
    return retorno
}

//********************************************************************
function EmpDevolver(){
    let devolver = readline.questionInt(`Digite o numero do empréstimo: `)
    for (i=bancoDeEmprestimos.length-1; i>= -1; --i){
        if (i < 0){
            console.log(`*** NUMERO DE EMPRÉSTIMO NÃO CADASTRADO ***`)
            break
        }
        if (bancoDeEmprestimos[i].idEmprestimo==devolver){
            if (bancoDeEmprestimos[i].dataDevolucao==null){
                let confirmarDevolucao = readline.question(`Digite 1 para confirmar a devolução ou qualquer outra tecla para cancelar: `)
                if (confirmarDevolucao=="1"){
                    bancoDeEmprestimos[i].dataDevolucao= new Date()
                    //sinalizando devolução no bancoDeInstrumentos
                   for (const a of bancoDeInstrumentos) {
                        if (a.id == bancoDeEmprestimos[i].idInstrumento) {
                           a.emprestado=false
                       }
                    }
                    console.log(`Instrumento devolvido em ${bancoDeEmprestimos[i].dataDevolucao}`)
                }else {
                    console.log(`*** DEVOLUÇÃO NÃO FINALIZADA, EMPRÉSTIMO ${devolver}EM ABERTO ***`)
                }        
            }else {
                console.log(`Instrumento já devolvido em ${bancoDeEmprestimos[i].dataDevolucao} pelo aluno ${bancoDeEmprestimos[i].idAluno}`)
            }
            break
        }
    }
}

//********************************************************************
function EmpBuscarEmprestimo(){
    let emprest = readline.questionInt(`Digite o numero do empréstimo: `)
    for (i=bancoDeEmprestimos.length-1; i>=-1; i--){
        if (i < 0){
            console.log(`*** NÚMERO DE EMPRÉSTIMO NÃO CADASTRADO ***`)
            break
        }
        let devolvido=""
        if (bancoDeEmprestimos[i].idEmprestimo==emprest){
            if (bancoDeEmprestimos[i].dataDevolucao == null){
                devolvido="Em aberto"
            } else {
                devolvido=bancoDeEmprestimos[i].dataDevolucao
            }
            console.log(`Empréstimo Nº: ${bancoDeEmprestimos[i].idEmprestimo} - Matricula do Aluno: ${bancoDeEmprestimos[i].idAluno} - Emprestado em ${bancoDeEmprestimos[i].dataEmprestimo} - Devolvido em: ${devolvido}`)
            break
            }
    }
}

//********************************************************************
function EmpBuscarUltimoEmprestimoDoInstrumento(){
    let localizar = readline.questionInt(`Digite o numero do instrumento à localizar: `)
    for (i=bancoDeEmprestimos.length-1; i>=-1; i--){
        if (i < 0){
            console.log(`*** INSTRUMENTO AINDA NÃO FOI EMPRESTADO ***`)
            break
        }
        let devolvido=""
        if (bancoDeEmprestimos[i].idInstrumento==localizar){
            if (bancoDeEmprestimos[i].dataDevolucao == null){
                devolvido="Em aberto"
            } else {
                devolvido=bancoDeEmprestimos[i].dataDevolucao
            }
            console.log(`Empréstimo Nº: ${bancoDeEmprestimos[i].idEmprestimo} - Matricula do Aluno: ${bancoDeEmprestimos[i].idAluno} - Emprestado em ${bancoDeEmprestimos[i].dataEmprestimo} - Devolvido em: ${devolvido}`)
            break
            }
    }
}

//********************************************************************
function EmpListarEmprestimosDoInstrumento(){
    let devolvido=""
    let localizar = readline.questionInt(`Digite o numero do instrumento: `)
    for (i=bancoDeEmprestimos.length-1; i>=-1; i--){
        if (i < 0 & devolvido=="" ){
            console.log(`*** INSTRUMENTO AINDA NÃO FOI EMPRESTADO ***`)
            break
        }else if(i < 0){
            break
        }
        if (bancoDeEmprestimos[i].idInstrumento==localizar){
            if (bancoDeEmprestimos[i].dataDevolucao==null){
                devolvido="EM ABERTO"
            }else{
                devolvido=bancoDeEmprestimos[i].dataDevolucao
            }
            console.log(`Empréstimo Nº: ${bancoDeEmprestimos[i].idEmprestimo} - Matricula do Aluno: ${bancoDeEmprestimos[i].idAluno} - Devolvido em: ${devolvido}`)
        }
    }

}

//**********************************************************
function EmpListarEmprestimosEmAberto(){
    let emAberto=false
    for (const a of bancoDeEmprestimos){
       if (a.dataDevolucao == null){
           emAberto = true
           console.log(`Empréstimo Nº: ${a.idEmprestimo} - Matricula do Aluno: ${a.idAluno} - Instrumento Nº: ${a.idInstrumento} - Em aberto desde: ${a.dataEmprestimo}`)
       }
   }
   if (emAberto == false){
       console.log(`Nao existem empréstimo em aberto`)
   }
}

//********************************************************************
function  EmpListarInstrumentosDisponiveis() {
    let emAberto=false
     for (const a of bancoDeInstrumentos){
        if (a.disponibilidade == true & a.emprestado == false){
            emAberto = true
            console.log(`Instrumento Nº: ${a.id} - Tipo: ${a.tipo} - Descriçao: ${a.descricao}`)
        }
    }
    if (emAberto == false){
        console.log(`No momento nao existem instrumentos disponíveis para empréstimo, volte mais tarde.`)
    }
}

//MENU EMPRÉSTIMOS **************************************************

let continuar = true
let unlock=false

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
	console.log('3. Buscar Emprestimo');
    console.log('4. Localizar ultimo empréstimo do Instrumento')
    console.log('5. Listar todos empréstimos do Instrumento')
    console.log('6. Listar Empréstimo em aberto')
    console.log('7. Listar Instrumentos disponíveis para Empréstimo')
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
                console.log(`*** EMPRÉSTIMO NÃO EFETUADO ***`)
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
		
        case 5:
             EmpListarEmprestimosDoInstrumento()
             continue

        case 6:
             EmpListarEmprestimosEmAberto()
             continue

        case 7:
             EmpListarInstrumentosDisponiveis()
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