const abrirbtn = document.querySelector('#abrir-pantalla-completa');
const salirrbtn = document.querySelector('#salir-pantalla-completa');

abrirbtn.addEventListener('click', pantallaCompleta);
salirrbtn.addEventListener('click', cerrarpantallaCompleta);
function pantallaCompleta(){
document.documentElement.requestFullscreen();

}

function cerrarpantallaCompleta(){
document.exitFullscreen();
}
