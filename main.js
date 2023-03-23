// PARA TOCAR UM ITEM SÓ

/* function tocarSomPom() {
    document.querySelector('#som_tecla_pom').play();
}

function tocarSomClap() {
    document.querySelector('#som_tecla_clap').play();
}

document.querySelector('.tecla_pom').onclick = tocarSomPom;
document.querySelector('.tecla_clap').onclick = tocarSomClap;

 */

function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;


for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio)
    }
}
