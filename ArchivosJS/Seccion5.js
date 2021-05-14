//responsive tester

let $url = document.getElementById("url"), $alto = document.getElementById("alto"), $ancho = document.getElementById("ancho"),
    ventanaAbierta = false;

export default function Seccion5(){
    let nuevaVentana;
    document.addEventListener("click", (e) =>{
        if(e.target.matches("input#probar.botonesResponsive"))
            if($url.value != "" && $alto.value != "" && $ancho.value != ""){ // si todos los campos estan llenos abre ventana
                nuevaVentana = window.open($url.value, "Prueba", `width=${$ancho.value},` + `height=${$alto.value},` + "scrollbars=NO,resizable=NO");
                ventanaAbierta = true;
            }else{
                alert("falta llenar algun campo"); // en caso de que falte algun documento manda esta alerta
            }
        if(e.target.matches("input#cerrar.botonesResponsive"))
            if(ventanaAbierta == true){  // si hay una ventana abierta la cierrra
                nuevaVentana.close("Prueba");
            }else{  // caso contrario manda la alerta
                alert("No hay ninguna ventana para abrir");
            }
        if(e.target.matches("input#limpiar.botonesResponsive")){ //limpia todos los campos
            $url.value = "";
            $alto.value = "";
            $ancho.value = "";
        }
    });

}