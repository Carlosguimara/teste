/*
Considere o array [3, 7, 9, 1, 0].

O primeiro elemento inserido foi o 3, o segundo foi o 7 e assim por diante, seguindo a ordem.

Levando em conta as três estruturas de dados (fila, lista e pilha) e as suas regras de operações,
qual seria a sequência dos números removidos em cada uma delas para esvaziá-las completamente
utilizando o array mencionado?

********* RESPOSTA EXPLANATIVA UMA VEZ QUE NÂO FOI SOLICITADO UM ALGORITMO.

array [3,7,9,1,0]

A sequêcia de remoção seria:

Se for uma FILA  ===> sairiam nesta ordem (FIFO)---> 3,7,9,1,0 
                    [3,7,9,1,0] --> [7,9,1,0] --> [9,1,0] --> [1,0] --> [0] --> []

Se for uma PILHA ===> sairiam nesta ordem (LIFO)---> 0,1,9,7,3
                    [3,7,9,1,0] --> [3,7,9,1] --> [3,7,9] --> [3,7] --> [3] --> []

Se for uma LISTA ===> Por permitir o acesso por indice, a ordem de remoção será definida
                      de acordo com os parametros passados pelo usuário/programador através
                      do metodo splice(x,y) onde x é a posição do item a ser excluido, e y 
                      a quantidade de itens que serão excluidos a partir dele (inclusive).

Realize essa atividade, suba esse arquivo em um drive com link público e compartilhe o link
no campo ao lado para que outros desenvolvedores possam analisá-lo.

*/