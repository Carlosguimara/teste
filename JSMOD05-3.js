/* Classe carro, com alguns atributos e métodos (funções para) ligar, andar/parar e buzinar */

class Carro {
    constructor (marca,cor,portas){
        this.Marca = marca
        this.Cor= cor
        this.Portas= portas
    }
    mov(andar){
        if (andar){
            console.log(`andando`)
        }else{
            console.log(`parando`)
        }
        return
    }
    buzinar(){
        console.log(`beep beep`)
    }
    ligar(on){
        if (on){
            console.log(`ligando o carro`)
        }else{
            console.log(`desligando o carro`)
        }
        return
    }
}
console.log()
const carro1= new Carro("Ford","Prata",4)
console.log(carro1)
let acelerar = true
let on = true
carro1.ligar(on)
carro1.mov(acelerar)
carro1.buzinar()
carro1.mov(!acelerar)
carro1.ligar(!on)


/* Classe Notebook, com alguns atributos e métodos (funções para) Abrir/Fechar a tampa, ligar e desligar*/

class Notebook {
    constructor (marca,core,ssd){
        this.Marca = marca
        this.Core = core
        this.SSd = ssd
    }
    tampa(abrir){
        if (abrir=="open"){
            console.log(`abrindo o notebbok`)
        }else{
            if (abrir=="close"){
                console.log(`fechando a tampa do notebook`)
            }
        }
        return
    }
    ligar(){
        console.log(`ligando o notebook`)
        return
    }
    desligar(){
        console.log(`desligando o notebook`)
        return
    }
}

console.log()
const noteb1= new Notebook("ACER","32GB","1TB")
console.log(noteb1)
noteb1.tampa("open")
noteb1.ligar()
noteb1.desligar()
noteb1.tampa("close")


/* Classe Banco, com atributos da conta e métodos (funções para) Imprimir saldo, sacar e depositar*/

class Banco {
    constructor (agencia,conta,tipo,saldo){
        this.Agencia = agencia
        this.Conta = conta
        this.Tipo = tipo
        this.Saldo = saldo
    }
    saldo(){
        console.log(`Agência (${this.Agencia}) - Conta Nº ${this.Conta} - Tipo - ${this.Tipo} - Saldo - R$${this.Saldo}`)
        return
    }
    depositar(valor){
        let saldoant=this.Saldo
        this.Saldo += valor
        console.log(`Agência (${this.Agencia}) - Conta Nº ${this.Conta} - Tipo - ${this.Tipo} - Saldo Anterior- R$${saldoant.toFixed(2)} - Depósito- R$${valor.toFixed(2)} - Saldo Atual- R$${(this.Saldo).toFixed(2)}`)
        return
    }
    sacar(valor){
        let saldoant=this.Saldo
        this.Saldo -= valor
        console.log(`Agência (${this.Agencia}) - Conta Nº ${this.Conta} - Tipo - ${this.Tipo} - Saldo Anterior- R$${saldoant.toFixed(2)} - Saque- R$${valor.toFixed(2)} - Saldo Atual- R$${this.Saldo.toFixed(2)}`)
        return
    }
}

console.log()
const banco1= new Banco("1254-3","00768-3","C/C",12327.65)
banco1.saldo()
banco1.depositar(0.35)
banco1.sacar(10)


/* Classe Musica, com alguns atributos e métodos (funções para) Tocar, pausar e definir volume*/

class Musica {
    constructor (nome,autor,ano){
        this.Nome = nome
        this.Autor = autor
        this.Ano = ano
    }
    tocar(){
        console.log(`Tocando ${this.Nome}`)
        return
    }
    pausar(){
        console.log(`pausando ${this.Nome}`)
        return
    }
    volume(n){
        console.log(`Tocando ${this.Nome} no volume ${n}`)
        return
    }
}

console.log()
const musica1= new Musica("TEMPO PERDIDO","Renato Russo","1986")
console.log(musica1)
musica1.tocar()
musica1.volume(4)
musica1.pausar()
