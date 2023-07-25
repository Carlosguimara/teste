// instalar no node npm install readline-sync para usar question (prompt)

var cj1, cj2, somaj, cb1,cb2,cb3,cb4,somab;
cj1=9;
cj2=10;
somaj=cj1+cj2;
cb1=3;
cb2=13;
cb3=1;
cb4=7;
somab=cb1+cb2+cb3+cb4;
if (somaj>21 || somab>21 ){
    switch( somaj>21)
    case true;
       console.log(`A soma de suas cartas foi ${somaj}, VOCÊ PERDEU !!!`)
       break;
    default:
       console.log(`A soma do banco foi ${somab}, BANCO PERDEU !!!`)}
elseif (somaj > somab){
    console.log(`Você ${somaj}, Banco ${somab}, VOCÊ GANHOU !!!`)}
else{
    console.log(`Você ${somaj}, Banco ${somab}, BANCO GANHOU !!!`)}
}






