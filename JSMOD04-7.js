/* Exercicio Javascript no JOY modulo quatro - Trilha 7
   objetivo: Conseguir conectar o banco de dados no seu programa

   como o projeto com o banco está no meu notebbok e ainda nao subi para 
   o Github, anexei no Joy, juntamente com o link deste codogo, uma foto 
   com o resultado da execuçao 
*/   

const produto = require('./models/produtosModels.js');

(async () => {

    try {
        // 1- CREATE
        const produtoCriado = await produto.create({
            descricao: 'Produto D',
            quantidade: 12,
            preco: 9.56,
            observacao: 'Detalhes do Produto D',
            unidade: "UN",
        })
        console.log('Produto Criado: com sucesso!');
    } catch (error) {
        console.log('ERRO\n', error);

        // ao finalizar o script, finaliza a conexão com o banco de dados
    } finally {
        // await Produto.close();

    }
})();

