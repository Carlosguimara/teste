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
const inst3 = new instrumento(3,"Agogo","jhasdbkkadbx jsjsh",true,false)
const inst4 = new instrumento(4,"Caixa","liudhknwxkkhdaxkxmbwdjh",true,false)
const inst5 = new instrumento(5,"Timbau","podhpdbjgol   dlb gdl",true,false)
const inst6 = new instrumento(6,"Timbau","liCHI DJ  QKHCL   BDI",true,false) 

let bancoDeInstrumentos = [inst1,inst2,inst3,inst4,inst5,inst6]
for (const c of bancoDeInstrumentos) {
    if (c.id == 2) {
        c.emprestado=true
        console.log(c)
        console.log(bancoDeInstrumentos[1])}
        c.emprestado=false
}
console.log(bancoDeInstrumentos[1])

   