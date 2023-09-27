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
let meuobjeto: Objeto = {nome: 'Carlos', idade: 62, acordado: true}

console.log(nome, numero,nulo,boleano,arraynum,arraystr,meuobjeto)