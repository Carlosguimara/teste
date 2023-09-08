const Banco = {
    agencia : "0765" ,
    conta : "0001" ,
    saldo : 100.5 ,
    tipo : "Conta Corrente",
    MostrarSaldo : function(){
        console.log(this.saldo)
    },
    DepositarSacar : function(valor){
        this.saldo += valor
    },
    NumeroDaConta : function(){
        console.log(`Agência: ${this.agencia} conta: ${this.conta}`)
    }
}
console.log(Banco)
Banco.NumeroDaConta()
Banco.DepositarSacar(-10.0)
Banco.MostrarSaldo()
