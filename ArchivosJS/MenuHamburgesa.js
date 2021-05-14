

export default function menuHamburgesa(boton){    
    let activo = false;
    //se esta utilizando delegacion de eventos
    // se asigna el click a todo el documento de la pagina
    // y si este click coincide con unos de los elementos que buscamos entonces se hace lo que queremos
    document.addEventListener("click", (e) => {
        // el if dice que si el elemento en el que se hizo el click es el boton del menu de una de estas 
        // etiquetas a dentro del panel del menu entonces entra
        // el metodo matches recibe como parametro cualquier elemento css valido
        // `${boton} *` es para hacer que cualquier hijo del boton tambien funcione, en este caso los span
        // que hacen las lineas
        if(e.target.matches( boton) || e.target.matches( `${boton} *`) || e.target.matches(".anclaMenu")){
            if(activo){
                document.getElementById("panelMenu").className = "menuCerrado";
                // document.getElementById("abrirMenu").className = "hamburger botonMenu is-active";
                activo = false;
            }else{
                document.getElementById("panelMenu").className = "menuAbierto";
                // document.getElementById("abrirMenu").className = "hamburger botonMenu";
                activo = true;
            }
        }
     });
}


// necesito checar bien la delegacion de eventos                        done
// hacer que no se pierda la imagen del menu                            done
// hacer que al presionar una seccion del menu este se cierre           done    
// cambiar la imagen a una crucesita cuando se abre el menu

