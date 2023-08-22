const leitor = require('readline-sync')
var ind=0, nome='*', pessoa = []

while (nome!=""){
    pessoa[ind]={ nome: leitor.question('Digite o nome, ou enter para encerrar ')}
    if (pessoa[ind].nome !=""){
        pessoa[ind]={ idade: leitor.questionInt('Digite a idade '),
                      salario: leitor.questionInt("Digite o salário sem centavos ").toFixed(2),
                      diploma: leitor.question("É diplomado ? (Digite Sim, ou enter para NÃO) ").toUpperCase()}
        if (pessoa[ind].diploma=='SIM'){
            pessoa[ind].diploma=true
        }   else {
                pessoa[ind].diploma=false
             }   
      } else {
          pessoa.pop()
          break
        }
    nome=pessoa[ind].nome
    ind = ind+1
}
console.log(pessoa)


/* console (teste de execução)

Digite o nome, ou enter para encerrar carlos
Digite a idade 10
Digite o salário sem centavos 100
É diplomado ? (Digite Sim, ou enter para NÃO) sim
Digite o nome, ou enter para encerrar maria
Digite a idade 15
Digite o salário sem centavos 150
É diplomado ? (Digite Sim, ou enter para NÃO) 
Digite o nome, ou enter para encerrar joao
Digite a idade 20
Digite o salário sem centavos 200
É diplomado ? (Digite Sim, ou enter para NÃO) nao
Digite o nome, ou enter para encerrar josefa
Digite a idade 30
Digite o salário sem centavos 300
É diplomado ? (Digite Sim, ou enter para NÃO) sim
Digite o nome, ou enter para encerrar 
[
  { idade: 10, salario: '100.00', diploma: true },
  { idade: 15, salario: '150.00', diploma: false },
  { idade: 20, salario: '200.00', diploma: false },
  { idade: 30, salario: '300.00', diploma: true }
]

*/    