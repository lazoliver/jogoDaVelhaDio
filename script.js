let jogador = null;

function escolherQuadrado(id) {
    
    let quadrado = document.getElementById(id);

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

}

function mudarJogador(valor) {
    jogador = valor;
}