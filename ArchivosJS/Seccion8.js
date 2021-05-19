let $longitud = document.getElementById("lon"), $latitud = document.getElementById("lat"), $precision = document.getElementById("pre");
let url;

export default function Seccion8(){
    if(!navigator.geolocation){
        alert("No se puede obtener la Geolocalización");
    }else{
        // console.log(navigator.geolocation);
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
          };
          
        navigator.geolocation.getCurrentPosition(
            (pos) =>{//este metodo recibe 3 parametros,dos metodos y un objeto
                let coordenadas = pos.coords;
                $latitud.innerText += coordenadas.latitude.toString();
                $longitud.innerText += coordenadas.longitude.toString();
                $precision.innerText += coordenadas.accuracy.toString().slice(-3) + " metros";
            }, 
            (err) =>{
                console.warn('ERROR(' + err.code + '): ' + err.message);
            },  
            options);
    }

    document.addEventListener("click", (e) =>{
        //url de maps con la latitud y longitud que obtuvo el metodo getCurrentPosition
        url = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5226.318260046686!2d${$longitud.innerText}!3d${$latitud.innerText}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1620937007414!5m2!1ses!2smx`; 
        if(e.target.matches("a#ubicacionDispositivo")){
            window.open(url, "Prueba", `width=720,` + `height=480,` + "scrollbars=NO,resizable=NO");
        }
    });

}