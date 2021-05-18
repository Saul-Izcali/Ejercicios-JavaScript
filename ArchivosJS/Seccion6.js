let userA = document.getElementById("UA");
let sistema = navigator.oscpu.split(' '), navegador = navigator.userAgent.split(' ');

export default function Seccion6(){

    userA.innerHTML += `<p>${navigator.userAgent}</p>`;
    userA.innerHTML += `<a href="">Descarga la versión para ${sistema[0]}</a>`;
    userA.innerHTML += `<p>Navegador: ${navegador[navegador.length - 1]}</p>`;


}
