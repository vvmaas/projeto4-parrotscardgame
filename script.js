let numeroCartas = Number(prompt("Com quantas cartas quer jogar?"));

while (numeroCartas % 2 != 0 || numeroCartas < 4 || numeroCartas > 14) {
    alert('Regras do Jogo \nO numero de cartas deve ser:\n1) Par.\n2) No mínimo 4.\n3) No máximo 14.')
    numeroCartas = Number(prompt("Com quantas cartas quer jogar?"));
}





