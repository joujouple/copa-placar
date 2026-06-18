let brasil = 0;
let argentina = 0;

function atualizarPlacar() {
    document.getElementById("golsBrasil").textContent = brasil;
    document.getElementById("golsArgentina").textContent = argentina;
}

function golBrasil() {
    brasil++;
    atualizarPlacar();
}

function golArgentina() {
    argentina++;
    atualizarPlacar();
}function resetar() {
    brasil = 0;
    argentina = 0;
    atualizarPlacar();
}
