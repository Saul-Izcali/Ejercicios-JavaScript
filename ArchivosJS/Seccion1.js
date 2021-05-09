
let $tiempo = document.getElementById("contadorDeTiempo"), tiempoCorriendo = false, seg = 0, min = 0, hora = 0,
contador, alarma;
const $elementoAlarma = document.createElement("audio");


export default function Seccion1(elemento){  

    if(elemento.target.matches("button#iniciarReloj.botonSec1")){
        $tiempo.style.marginTop = "40px";
        $tiempo.style.marginBottom = "40px";
        $tiempo.style.fontSize = "35px";

        // elemento.target.disabled = true;
        contador = setInterval(() =>{
            let clockHour = new Date().toLocaleTimeString();
            $tiempo.textContent = clockHour;
        }, 1000);

        // ------------ Este de abajo es un cronometro------------------

        // contador = setInterval( function(){
            //     if(seg < 10){
        //         $tiempo.textContent = `0${hora}:0${min}:0${seg}`;
        //     }else{
            //         $tiempo.textContent = `0${hora}:0${min}:${seg}`;
        //     }
        //     seg++;
        //     if(seg == 60){
            //         min++;
        //         seg = 0;
        //     }
        //     if(min == 60){
            //         hora++;
            //         min = 0;
        //     }
        // }, 1000);
    }
    
    if(elemento.target.matches("button#pararReloj.botonSec1")){
        clearInterval(contador);
        // elemento.target.disabled = false;
    }

    if(elemento.target.matches("button#iniciarAlarma.botonSec1")){
        // console.log("si")
        $elementoAlarma.src = "../ArchivosExtra/alarma.mp3";
        $elementoAlarma.play();
        // elemento.target.disabled = true;
        
        // alarma = setTimeout(() => {
            // $elementoAlarma.play();
        // }, 1000);
    }
    
    if(elemento.target.matches("button#pararAlarma.botonSec1")){
        // clearTimeout(alarma);
        $elementoAlarma.pause();
        $elementoAlarma.currentTime = 0;
        // elemento.target.disabled = true;
    }

}
