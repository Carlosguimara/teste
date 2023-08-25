/*
//1-Suponha que você está desenvolvendo um aplicativo de agendamento e precisa representar os dias da semana. 
//  Como você usaria enums para isso e qual seria o benefício?

const DiasDaSemana = {
    DOMINGO: 1,
    SEGUNDA: 2,
    TERCA: 3,
    QUARTA: 4,
    QUINTA: 5,
    SEXTA: 6,
    SABADO: 7
  };
  
  console.log(DiasDaSemana.QUARTA); // Saída: 4

  /*
  // O benefício é poder armazenar um numero para cada dia da semana em um banco de dados, e ao
  // necessitar imprimir por extenso, acessar o enumerate, econoimizando espaço no ImageBitmapRenderingContext.

/*
//2-Você está construindo um jogo e precisa representar os diferentes tipos de inimigos. 
//  Como você usaria enums para essa situação?

  const InimigoAtributos = {
    CORINGA: [1,5],
    MAGO: [2,4],
    ARQUEIRO: [3,1]
    
  };
  console.log(InimigoAtributos.CORINGA[1])
// [0] - força
// [1] - feiura
//Usaria um Enumerate, onde cada item(inimigo), teria seus atributos
//   definidos em uma lista (nivel)
*/

/*
//3-Você está criando um aplicativo de reserva de passagens aéreas e precisa 
//  representar os diferentes tipos de classe (Econômica, Executiva, Primeira Classe). 
//  Como você usaria enums para isso ?

const Classes = {
  ECONOMICA: ["C",0], //Area "C" do avião, franquia de bagagem despachada - 0
  EXECUTIVA: ["B",1], //Area "B" do avião, franquia de bagagem despachada - 1
  PRIMEIRA: ["A",2]   //Area "A" do avião, franquia de bagagem despachada - 2
 };
console.log(Classes)
*/

/*
//4-Imagine que você está desenvolvendo um aplicativo de tarefas e deseja categorizar as 
//  tarefas em "Trabalho", "Estudo" e "Lazer". Como você usaria enums para esse cenário?

const Tarefas = {
  1: "Trabalho",
  2: "Estudo",
  3: "Lazer"
 };
 let tar=2
 
console.log(Tarefas[tar])
*/

/*
//5-Em um aplicativo de e-commerce, você precisa definir os diferentes status 
// de um pedido: "Em processamento", "Enviado" e "Entregue". Como você usaria enums para isso?

const Status = {
  1: "Em processamento",
  2: "Enviado",
  3: "Entregue"
 };
 let sta=3
 
console.log(Status[sta])
*/