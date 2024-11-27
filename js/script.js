const inicioPrograma = Number(prompt(`
    ===========Bem-Vindo==============
          O que deseja comprar?
       =============================
          Selecione uma opção
       _____________________________
[1] - Banana
[2] - Maçã
[3] - Manga
[4] - Laranja
[5] - Limão

`))

function comprarBanana(){
    alert("A unidade da banana é R$1,30 a partir de 12 é R$1,00 ")
    var qtdBanana = Number(prompt("Quantas bananas você deseja comprar?"))
    if(qtdBanana >= 12 ){
     resultado = qtdBanana * 1
     alert(`voce comprou ${qtdBanana} bananas e saiu por ${resultado}`)
    }else
    resultado = qtdBanana * 1.30
    alert(` voce comprou ${qtdBanana} bananas e saiu por ${resultado}`)
}


function comprarMaca(){
    alert("O Kg da maçã é ")
    var qtdMaca = Number(prompt("Quantas maçãs deseja comprar?"))
    if(qtdMaca >= ){
        resultado = qtdMaca *1
        alert(`voce comprou ${qtdMaca} maça e saiu por ${resultado}`)
    }else
    resultado = qtdMaca *
    alert(`voce comprou ${qtdMaca} maça e saiu por ${resultado}`)

}


switch(inicioPrograma) {
   case 1:
      comprarBanana()
       break;
   case 2:
    comprarMaca()
       break;


       case 3:
       alert("Manga")
       break;
       case 4:
           ("Laranja")
       break;
       case 5:
           ("Limão")
           break;
       default:
           alert("Não existe esta opção!")
  
}