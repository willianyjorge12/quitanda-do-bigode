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

function comprarBanana() {
    var resultado = 0
    alert("Preço da banana é R$1,30 a unidade, a partir de 12 unidades o preço sai a R$1,00")

    var qtdBanana = Number(prompt("Quantas bananas deseja comprar?"))
    if (qtdBanana >= 12) {
        resultado = qtdBanana * 1
        alert(`Voce comprou ${qtdBanana} bananas e saiu por ${resultado}`)
    } else {
        resultado = qtdBanana * 1.30
        alert(`voce comprou ${qtdBanana}bananas e sau por ${resultado.toLocaleString(`pt-br`, {
            style: `currency`,
            currency: `BRL`,
        })}`)
    }
}

function comprarMaca() {
    var resultado = 0
    alert("O KG da maçã é R$8,55 a partir de 2KG sai por R$6,99")

    var qtdMaca = Number(prompt("Quantos kilos de Maçã deseja comprar?"))
    if (qtdMaca >= 2) {
        resultado = qtdMaca * 6.99
        alert(`Voce comprou ${qtdMaca} Maçãs e saiu por ${resultado}`)
    } else {
        resultado = qtdMaca * 8.55
        alert(`voce comprou ${qtdMaca} Maçãs e sau por ${resultado.toLocaleString(`pt-br`, {
            style: `currency`,
            currency: `BRL`,
        })}`)
    }
}


function comprarManga() {
   

    var compra = 0
    alert("O KG da manga Palmer é R$5,49 o KG da manga Rosa R$10,00 e o KG da manga Tommy R$2,99")

    var opcaoManga = Number(prompt("Qual tipo de  Manga deseja comprar?    [1] Manga Palmer, [2] Manga Rosa, [3] Manga Tommy"))



    switch (opcaoManga) {

        case 1:
            alert("Manga Palmer")
            var kgManga = Number(prompt("Quantos quilos voce deseja comprar"))
            compra = kgManga * 5.49
            alert(`Voce comprou ${kgManga} Kg de manga e saiu por R$${compra.toFixed(2)}`)
            break;
        case 2:
            alert("Manga Rosa")
            var kgManga = Number(prompt("Quantos quilos voce deseja comprar"))
            compra = kgManga * 10.00
            alert(`Voce comprou ${kgManga} Kg de manga e saiu por R$${compra.toFixed(2)}`)
            break;
        case 3:
            alert("Manga Tommy")
            var kgManga = Number(prompt("Quantos quilos voce deseja comprar"))
            compra = kgManga * 2.99
            alert(`Voce comprou ${kgManga} Kg de manga e saiu por R$${compra.toFixed(2)}`)
            break;
        default:
            alert("NAO EXISTE ESTA OPCAO")
    }
 
 
}

function comprarLaranja(){
var resultadoLaranja = 0
alert("[1] Laranja Pera R$ 5,99 acima de 2kg valor Promocional R$ 5,00, [2] Laranja Lima R$ 3,00 acima de 3 kg valor Promocional R$ 2,00, [3] Laranja Bahia R$ 4,00 acima de 4Kg valor Promocional R$ 3,50")
var opcaoLaranja = Number(prompt("selecione a opção desejada: [1] Laranja Pera, [2] Laranja Lima,  [3] Laranja Bahia"))

switch (opcaoLaranja) {
    case 1:
        alert("Laranja Pera R$ 5,99 acima de 2kg valor Promocional R$ 5,00")
        var pera = Number(prompt("Quantos quilos deseja?"))
        if(pera > 2){
            resultadoLaranja = pera * 5
           alert(`Voce selecionou ${pera}Kg no valor de R$ ${resultadoLaranja}`)
        }else{
            resultadoLaranja = pera * 5.99
            alert(`Voce selecionou ${pera}Kg no valor de R$ ${resultadoLaranja}`)
        }
 break;

    default:
        break;
    case 2:
        alert("Laranja Lima R$ 3,00 acima de 3 kg valor Promocional R$ 2,00")
        var lima = Number(prompt("Quantos quilos deseja?"))
        if(lima > 3){
            resultadoLaranja = lima * 2
            alert(`Voce selecionou ${lima}Kg no valor de R$ ${resultadoLaranja}`)
        }else{
            resultadoLaranja = lima * 3
            alert(`Voce selecionou ${lima}Kg no valor de R$ ${resultadoLaranja}`)
        }
        case 3:
            alert(`Laranja Bahia R$ 4,00 acima de 4Kg valor Promocional R$ 3,50`)
            var bahia = Number(prompt("Quantos quilos deseja?"))
            if(bahia > 4){
                resultadoLaranja = bahia * 3.50
                alert(`Voce selecionou ${bahia}kg no valor de R$ ${resultadoLaranja}`)
            }else{
                resultadoLaranja = bahia * 4
                alert(`Voce selecionou ${bahia}Kg no valor de R$ ${resultadoLaranja}`)
            }
}
}

function comprarLimao(){

}


switch (inicioPrograma) {
    case 1:
        comprarBanana()


        break;
    case 2:
        comprarMaca()

        break;
    case 3:
        comprarManga()
        break;
    case 4:
        comprarLaranja()
        break;
    case 5:
        (comprarLimao)
        break;
    default:
        alert("Não existe esta opção!")

}