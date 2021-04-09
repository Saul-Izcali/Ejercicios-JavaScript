
import menuHamburgesa from "./MenuHamburgesa.js";
import Seccion1 from "./Seccion1.js";

document.addEventListener("DOMContentLoaded", (e) => {
    menuHamburgesa("span#boton.hamburger-box"); //llamamos a nuestra funcion menuhamburgesas que se encuentra en otro archivo
                                                //con el parametro valido css del boton del menu
});

document.addEventListener("click", (e) => {

    if(e.target.matches(".botonSec1")){
        Seccion1(e);
    }


});





