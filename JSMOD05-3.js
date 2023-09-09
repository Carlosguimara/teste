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

const carro1= new Carro("Ford","Prata",4)
console.log(carro1)
let acelerar = true
let on = true
carro1.ligar(on)
carro1.mov(acelerar)
carro1.buzinar()
carro1.mov(!acelerar)
carro1.ligar(!on)

const noteb1= new Notebook("ACER","32GB","1TB")
console.log(noteb1)
noteb1.tampa("open")
noteb1.ligar()
noteb1.desligar()
noteb1.tampa("close")
