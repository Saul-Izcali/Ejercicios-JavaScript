    // INDICE
import menuHamburgesa from "./MenuHamburgesa.js";
import RegresarArriba from "./RegresarArriba.js";
import TemaOscuro from "./TemaOscuro.js";
import Seccion1 from "./Seccion1.js";
import Seccion2 from "./Seccion2.js";
import Seccion3 from "./Seccion3.js";

                        // "Mes día, año horas:minutos:segundos."
let fechaCountDown = new Date("June 20, 2021 13:30:15");  


document.addEventListener("DOMContentLoaded", (e) => {
    menuHamburgesa("span#boton.hamburger-box"); //llamamos a nuestra funcion menuhamburgesas que se encuentra en otro archivo
                                                //con el parametro valido css del boton del menu
    Seccion3(fechaCountDown);
});

document.addEventListener("click", (e) => {
    
    if(e.target.matches(".botonSec1")){
        Seccion1(e);
    }
    if(e.target.matches("#fondoCirculoSec2")){
        Seccion2(e);
    }
});

window.addEventListener("scroll",(e)=>{
    RegresarArriba();
});


TemaOscuro("#dark-ligth", "claseOscura");

