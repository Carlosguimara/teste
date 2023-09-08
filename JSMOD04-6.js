const pessoa1 = {
    nome: "Waldeck",
    idade: 40,
    profissao: "Professor",
    cidade: "Recife"
}

const pessoa2 = {
    nome: "Carlos",
    idade: 62,
    profissao: "Aluno",
    cidade: "Recife"
}

const pessoa3 = {
    nome: "Egito",
    idade: 55,
    profissao: "Coordenador",
    cidade: "Olinda"
}

const pessoa4 = {
    nome: "Francis",
    idade: 25,
    profissao: "aluna",
    cidade: "Jaboatão"
}

const pessoas= [pessoa1,pessoa2,pessoa3,pessoa4]
          
for (const a of pessoas){
    console.log(a)
}
for (const b in pessoas){
    console.log(pessoas[b])
}
