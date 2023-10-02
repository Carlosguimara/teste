/*
let nome: string = "Carlos";
let numero: number = 62;
let nulo: null = null
let boleano: boolean = true;
let arraynum: number[] = [1,4,3];
let arraystr: string[] = ['a','1','c'];
interface Objeto {
    nome: string,
    idade: number,
    acordado: boolean
}
//let meuobjeto: Objeto = {nome: 'Carlos', idade: 62, acordado: true}
//console.log(nome, numero,nulo,boleano,arraynum,arraystr,meuobjeto)

let numteste= 10.128456
let numstr="10.128456"
console.log(`digitado: ${numteste}, toFixed(2): ${numteste.toFixed(2)}, toPrecision(7):${numteste.toPrecision(7)}, toString: ${numteste}`)
console.log(`toString: ${numteste.toString}`) 
let num1: string ="9.798"
let num2 = "10"
console.log(`digitado: ${num1}, parseInt: ${parseInt(num1)}, parseFloat(10): ${parseFloat(num2).toFixed(2)}`)
*/

let meuarray: number[] =[1,2,3,4,5,6]
// meuarray.push(7,8)
// console.log(meuarray)
// let a = meuarray.pop()
// console.log(`pop ${a}`)
// console.log(meuarray)
// let b = meuarray.shift()
// console.log(`shift ${b}`)
// console.log(meuarray)
// meuarray.unshift(9)
// console.log(meuarray)

// let arrayteste: number[] = [10,20,30]
// console.log(meuarray.concat(arrayteste.concat(meuarray)))
// console.log(meuarray.join("-->"))
// console.log(meuarray.slice(1,4))
// console.log(meuarray)
// console.log(meuarray.splice(2,1,9))
// console.log(meuarray)

enum TipoDeUsuario {
    Administrador,
    UsuarioComum,
    Convidado,
  }
  function verificarPermissao(usuario: TipoDeUsuario): void {
    if (usuario === TipoDeUsuario.Administrador) {
      console.log('Realizar ações administrativas')
    } else {
       console.log('Acesso restrito para outros tipos de usuário')
    }
  }
  
  verificarPermissao(0)
  verificarPermissao(2)
  
