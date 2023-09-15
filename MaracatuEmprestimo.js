const readline = require("readline-sync")
const clear = require('clear')
let bancoDeEmprestimos = []
let sequencial=0

class emprestimo {
    constructor () {
        this.datadev=0
    }
    emprestar(numeroemprestimoant){
        
        while (true) {
            this.idInstrumento = readline.questionInt(`Digite o numero do Instrumento, 0 para desistir: `)
            if (this.idInstrumento==0){
                console.log(`desistindo`)
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
            
            this.aluno = readline.questionInt(`digite a matricula do aluno: `)
          /*buscar no banco de instrumentos
            if !existir{
                console.log(`Aluno inexistente`)
                continue
            }else {
                console.log(`Aluno: ` ${bd.nome})
            } */

            this.evento = readline.question(`informe onde será usado `)
            this.Data = new Date()
            this.NumeroEmprestimo = numeroemprestimoant+1
            console.log(`Instrumento liberado para empréstimo em ${this.Data}`)
            console.log(`Numero sequencial do empréstimo; ${this.NumeroEmprestimo}`)
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
			const novoemprestimo = new emprestimo();
            novoemprestimo.emprestar(sequencial)
            if (novoemprestimo.idInstrumento==0){
                console.log(`Empréstimo não efetuado`)
            }else {
                bancoDeEmprestimos.push(novoemprestimo)
                sequencial=novoemprestimo.NumeroEmprestimo
                }
            continue    

        case 2:
            let devolver = readline.questionInt(`Digite o numero do empréstimo: `)
            for (i=bancoDeEmprestimos.length-1; i>= -1; i--){
                if (i < 0){
                    console.log(`Numero de empréstimo inválido`)
                    break
                }
                if (bancoDeEmprestimos[i].NumeroEmprestimo==devolver){
                    if (bancoDeEmprestimos[i].datadev==0){
                        bancoDeEmprestimos[i].datadev= new Date()
                        console.log(`Instrumento devolvido em ${bancoDeEmprestimos[i].datadev}`)        
                    }else {
                        console.log(`Instrumento já devolvido em ${bancoDeEmprestimos[i].datadev} pelo aluno ${bancoDeEmprestimos[i].aluno}`)
                    }
                    break
                }
            }
            continue
		
        case 3:
            let emprest = readline.questionInt(`Digite o numero do empréstimo: `)
            for (i=bancoDeEmprestimos.length-1; i>=-1; i--){
                if (i < 0){
                    console.log(`Numero de empréstimo inválido`)
                    break
                }
                if (bancoDeEmprestimos[i].NumeroEmprestimo==emprest){
                    console.log(bancoDeEmprestimos[i])
                    }
            }
                continue
    
        case 4:
            let localizar = readline.questionInt(`Digite o numero do instrumento à localizar: `)
            for (i=bancoDeEmprestimos.length-1; i>=-1; i--){
                if (i < 0){
                    console.log(`Instrumento não Localizado`)
                    break
                }
                if (bancoDeEmprestimos[i].idInstrumento==localizar){
                    console.log(bancoDeEmprestimos[i])
                    }
            }
                continue
		case 0:
			console.log(`Encerrando o programa`);
            continuar = false
			break;
		
		default:
			console.log('\nOpção inválida. Por favor, escolha uma opção válida.');
			break;
	}
};



