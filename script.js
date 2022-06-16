let cards = ["./fotos/bobrossparrot.gif", "./fotos/fiestaparrot.gif", "./fotos/explodyparrot.gif", "./fotos/metalparrot.gif","./fotos/revertitparrot.gif","./fotos/tripletsparrot.gif",  "./fotos/unicornparrot.gif"]
let c_i = [0, 1, 2, 3, 4, 5, 6]

let mesa = document.querySelector(".mesajogo")
let numeroCartas
//

function getNmrCards(){
    numeroCartas = Number(prompt("Com quantas cartas quer jogar?"));

while (numeroCartas % 2 != 0 || numeroCartas < 4 || numeroCartas > 14) {
    alert('Regras do Jogo \nO numero de cartas deve ser:\n1) Par.\n2) No mínimo 4.\n3) No máximo 14.')
    numeroCartas = Number(prompt("Com quantas cartas quer jogar?"));
}
return numeroCartas
}
getNmrCards()


//

function comparador() {
    return Math.random() - 0.5;
}

//

function darCartas() {

    
    let c_i_aleatorio = []
    let c_i_escolhido = []

    for(let indice = 0; indice < c_i.length; indice++){
        c_i_aleatorio.push(c_i[indice])
    }

    c_i_aleatorio.sort(comparador)

    for (let index = 0; numeroCartas/2 > index; index++){
        c_i_escolhido.push(c_i_aleatorio[index])
        c_i_escolhido.push(c_i_aleatorio[index])
    }

    c_i_escolhido.sort(comparador)

    for(let i = 0; numeroCartas > i; i++){

        mesa.innerHTML += `<div class="card" data-identifier="card">
        <div class="back-face" data-identifier="back-face">
            <img src="./fotos/front.png" alt="">
        </div>

        <div class="front-face escondido" data-identifier="front-face">
            <img src="${cards[c_i_escolhido[i]]}" alt="">
        </div>`
    }
}
darCartas()


