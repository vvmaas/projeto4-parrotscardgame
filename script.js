
let cards = ["./fotos/bobrossparrot.gif", "./fotos/fiestaparrot.gif", "./fotos/explodyparrot.gif", "./fotos/metalparrot.gif","./fotos/revertitparrot.gif","./fotos/tripletsparrot.gif",  "./fotos/unicornparrot.gif"];
let c_i = [0, 1, 2, 3, 4, 5, 6];
let numeroJogadas = 0;
let numeroCartas;
let posicaoCarta = [];

const mesa = document.querySelector(".mesa");
let cartas_mesa;
let imagemCarta;

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

        mesa.innerHTML += `<div onclick="jogar(${i})" class="card" data-identifier="card">
        <div class="back-face card-face" data-identifier="back-face">
            <img src="./fotos/front.png" alt="">
        </div>

        <div class="front-face card-face" data-identifier="front-face">
            <img src="${cards[c_i_escolhido[i]]}" alt="">
        </div>`
    }
    cartas_mesa = document.querySelectorAll('.card');
    imagemCarta = document.querySelectorAll('.front-face img');
}
darCartas()

//

function repeticoes_array(array, elem){
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == elem){
            contador ++;
        }
    }
    return contador;
}

//

function iniciarJogo() {
    for(let i = 0; i < numeroCartas; i++) {
        posicaoCarta.push("facedown");
    }
}

//

function virarcarta(cardindex) {
    let back_face = cartas_mesa[cardindex].querySelector(".back-face");
    let front_face = cartas_mesa[cardindex].querySelector(".front-face");

    if (posicaoCarta[cardindex] == "facedown"){
    front_face.style.transform = "rotateY(0deg)"
    back_face.style.transform = "rotateY(-180deg)"
    posicaoCarta[cardindex] = "faceup_g"
    } else {
        front_face.style.transform = "rotateY(180deg)"
        back_face.style.transform = "rotateY(0deg)"
        posicaoCarta[cardindex] = "facedown"
    }
}

//

function jogar(cardindex) {

    if(posicaoCarta[cardindex] == "facedown"){
        numeroJogadas += 1
       
        if(repeticoes_array(posicaoCarta, "faceup_g") == 0){
            virarcarta(cardindex);
            posicaoCarta[cardindex] = "faceup_g"
        }
        else if (repeticoes_array(posicaoCarta, "faceup_g") == 1){

            let lastguess = posicaoCarta.indexOf("faceup_g")

            if (imagemCarta[cardindex].src == imagemCarta[lastguess].src){
                virarcarta(cardindex);
                posicaoCarta[lastguess] = "faceup_c";
                posicaoCarta[cardindex] = "faceup_c";
        }
        else{
            virarcarta(cardindex);
            posicaoCarta[cardindex] = "faceup_g";
            setTimeout(function(){
                virarcarta(lastguess);
                virarcarta(cardindex);
                posicaoCarta[lastguess] = "facedown";
                posicaoCarta[cardindex] = "facedown";
            }, 1000);
}
}
    setTimeout(function(){
    if (repeticoes_array(posicaoCarta, "faceup_c") == posicaoCarta.length){
            alert(`Voce ganhou em ${numeroJogadas} jogadas!`);
        }
    }, 500);
}
}
iniciarJogo()