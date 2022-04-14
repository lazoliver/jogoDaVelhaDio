let jogador = null;

let jogadorSelecionado = document.getElementById('jogador-selecionado');

mudarJogador('X');

function escolherQuadrado(id) {
    
    let quadrado = document.getElementById(id);
    if(quadrado.innerHTML !== '') {
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if(jogador === 'X') {
        jogador = 'O';
    } else {
        jogador = 'X';
    }

    mudarJogador(jogador);
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}