const pessoa1 = {nome: "Ana", idade: 20, profissão: "estudante"}
const pessoa2 = {nome: "Maria", idade: 29, profissão: "medica"}
const pessoas = [pessoa1,pessoa2]
for (let  i in pessoa1){
    console.log(i + "- " +pessoa1[i])
}

for (let n in pessoas){
    console.log(n)
}

for (let n of pessoas){
    console.log(n)
}

for (let n of pessoas){
    console.log(n.nome)
}