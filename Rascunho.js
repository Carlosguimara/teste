
let continuar = true
// MENU INICIAL
while (continuar) {
	console.log('\n*** REGISTRO DE EMPRESTIMO DE INSTRUMENTO ***');
	console.log('\nOPÇÃO:');
	console.log('1. Emprestar Instrumento');
	console.log('2. Devolver Instrumento');
	console.log('3. Listar Emprestimo');
	console.log('0. Sair');
	console.log('**********************************************');
	const opcao = readline.questionInt('Escolha uma opção: ');

	switch (opcao) {
		case 1:
			const novoemprestimo = new emprestimo(sequencial);
            if (novoemprestimo.idInstrumento=="*"){
                console.log(`Empréstimo não efetuado`)
            }else {
                bancoDeEmprestimos.push(novoemprestimo)
                sequencial=novoemprestimo.NumeroEmprestimo
                }
		case 2:
            let devolver = readline.questionInt(`Digite o numero do empréstimo: `)
            for (i=bancoDeEmprestimos.length-1; i>-2; i--){
                if (i=-1){
                    console.log(`Numero de empréstimo inválido`)
                    break
                }
                if (bancoDeEmprestimos[i].NumeroEmprestimo==devolver){
                    if (bancoDeEmprestimos[i].datadev==0){
                        bancoDeEmprestimos[i].datadev= new Date()
                    }else {
                        console.log(`Instrumento já devolvido em ${bancoDeEmprestimos[i].datadev} pelo aluno ${bancoDeEmprestimos[i].aluno}`)
                    }
                    break
                }
            }

		
		case 3:
            let emprest = readline.questionInt(`Digite o numero do empréstimo: `)
            for (i=bancoDeEmprestimos.length-1; i>-2; i--){
                if (i=-1){
                    console.log(`Numero de empréstimo inválido`)
                    break
                }
                if (bancoDeEmprestimos[i].NumeroEmprestimo==emprest){
                    console.log(bancoDeEmprestimos[i])
                    }
                }
		case 0:
			console.log(`Encerrando o programa`);
            continuar = false
			break;
		
		default:
			console.log('\nOpção inválida. Por favor, escolha uma opção válida.');
			break;
	}
};

