    // COUNTDOWN
    // "December 25, 1995 13:30:00";  

let $cronometro = document.getElementById("tiempo");
let tiempo, seg, min, hora;

export default function Seccio32(fecha){
    // tiempo = Date.now();
    // console.log(tiempo);
    // console.log(fecha.getTime());
    // console.log(fecha);

    seg = fecha.getSeconds();
    min = fecha.getMinutes();
    hora = fecha.getHours();

    let segundero = setInterval( ()=>{
        $cronometro.textContent = `${("0" + hora).slice(-2)}:${("0" + min).slice(-2)}:${("0" + seg--).slice(-2)}`;
        if(seg == 0){
            if(min == 0){
                if(hora == 0 && min == 0 && seg == 0){
                    $cronometro.textContent = "Cuenta terminada";
                    clearInterval(segundero);
                }

                min = 59;
                hora--;
            }
            seg = 59;
            min--;
        }
    }, 1000)


}