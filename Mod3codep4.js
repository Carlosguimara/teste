class Pessoas{
}
class PessoasComFilhos{
}

class ListaPessoas{
    constructor(){
        this.prim = null;
    }

    addFirst(Nome, Idade){
        const newNo = new Pessoas(Nome, Idade);
        newNo.prox = this.prim;
        this.prim = newNo;
    }

    addFirstFilho(Nome, Idade, Filho){
        const newNo = new PessoasComFilhos(Nome, Idade, Filho);
        newNo.prox = this.prim;
        this.prim = newNo;
    }

    addLast(Nome, Idade) {
        const newNo = new Pessoas(Nome, Idade);
        if(!this.prim){
            this.prim = newNo
        }else{
            let current = this.prim;
            while (current.prox) {
                current = current.prox
            }
            current.prox = newNo
        }
    }
    
    addLastFilho(Nome, Idade, Filho) {
        const newNo = new PessoasComFilhos(Nome, Idade, Filho);
        if(!this.prim){
            this.prim = newNo
        }else{
            let current = this.prim;
            while (current.prox) {
                current = current.prox
            }
            current.prox = newNo
        }
    }

    removeFisrt(){
        if(!this.prim){
            return null;
        }
        const removedNo = this.prim;
        this.prim = this.prim.prox;
        removedNo.prox = null;
        return removedNo.Nome;
    }
    
    removeLast(){
        if(!this.prim){
            return null;
        } 
        if(!this.prim.prox){
            const removedNo2 = this.prim;
            this.prim = null;
            return removedNo2.Nome;
        }
        let current = this.prim;
        let previous = null;
        while(current.prox){
            previous = current;
            current = current.prox;
        }
        previous.prox = null;
        return current.Nome;
    }

    search(Nome){
        let current = this.prim;
        while(current){
            if(current.Nome === Nome){
                return current;
            }
            current = current.prox;
        }
        return null;
    }

    size(){
        let count = 0;
        let current = this.prim;
        while(current){
            count++;
            current = current.prox;
        }
        return count;
    }

}
//pra listar teria que ter um metodo para passar por todos os objetos e ir fazendo o console.log