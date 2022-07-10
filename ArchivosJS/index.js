    // INDICE
import menuHamburgesa from "./MenuHamburgesa.js";
import RegresarArriba from "./RegresarArriba.js";
import TemaOscuro from "./TemaOscuro.js";
import Seccion1 from "./Seccion1.js";
import Seccion2 from "./Seccion2.js";
import Seccion3 from "./Seccion3.js";
import Seccion4 from "./Seccion4.js";
import Seccion5 from "./Seccion5.js";
import Seccion6 from "./Seccion6.js";
import Seccion7 from "./Seccion7.js";
import Seccion8 from "./Seccion8.js";
import Seccion9 from "./Seccion9.js";
import Conexion from "./OnOffLine.js";


                        // "Mes día, año horas:minutos:segundos."
let fechaCountDown = new Date("June 20, 2021 13:30:15");  


document.addEventListener("DOMContentLoaded", (e) => {
    menuHamburgesa("span#boton.hamburger-box"); //llamamos a nuestra funcion menuhamburgesas que se encuentra en otro archivo
                                                //con el parametro valido css del boton del menu
    Seccion3(fechaCountDown);
    Seccion4();
    Seccion5();
    Seccion6();
    Seccion7();
    Seccion8();
    Seccion9();
    Conexion();
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

