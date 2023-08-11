class Pessoa{
    constructor(Nome, Idade, Filho){
        this.Nome = Nome;
        this.Idade = Idade;
        this.Filho = null;
        this.proximo = null;
    }
}

class ListaPessoa{
    constructor(){
        this.cabeca = null;
    }

    
    addFirst(Nome, Idade, Filho){
        if (!Filho){
            Filho=null;
        }
        const novoNo = new Pessoa(Nome, Idade, Filho);
        novoNo.proximo = this.cabeca;
        this.cabeca = novoNo;
    }
  
    
    addLast(Nome, Idade, Filho) {
        if (!Filho){
            Filho=null;
        }
        const novoNo = new Pessoa(Nome, Idade, Filho);
         if(!this.cabeca){
            this.cabeca = novoNo
        }else{
            let atual = this.cabeca;
            while (atual.proximo) {
                atual = atual.proximo
            }
            atual.proximo = novoNo
        }
    }

    
    removeFisrt(){
        if(!this.cabeca){
            return null;
        }
        const removedNo = this.cabeca;
        this.cabeca = this.cabeca.proximo;
        removedNo.proximo = null;
        return removedNo.Nome;
    }

    
    removeLast(){
        if(!this.cabeca){
            return null;
        } 
        if(!this.cabeca.proximo){
            const removedNo2 = this.cabeca;
            this.cabeca = null;
            return removedNo2.Nome;
        }
        let atual = this.cabeca;
        let anterior = null;
        while(atual.proximo){
            anterior = atual;
            atual = atual.proximo;
        }
        anterior.proximo = null;
        return atual.Nome;
    }


    search(Nome){
        let atual = this.cabeca;
        while(atual){
            if(atual.Nome === Nome){
                return atual;
            }
            atual = atual.proximo;
        }
        return null;
    }


    size(){
        let cont = 0;
        let atual = this.cabeca;
        while(atual){
            cont++;
            atual = atual.proximo;
        }
        return cont;
    }

}
//Não impresso por necessitar de método proprio