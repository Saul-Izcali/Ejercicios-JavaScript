let $video = document.getElementById("webcam");
let $micro = document.getElementById("mic"), $cam = document.getElementById("camara");
let cam = false, mic = false, activo = true, objStream;

export default function Seccion7(){

    document.addEventListener("click", (e) =>{
        if(e.target.matches("img#camara")){
            if(!cam){   // Pasa a prenderse
                cam = true;
                $cam.setAttribute("src", "https://image.flaticon.com/icons/png/128/711/711245.png");
            }else{      // Pasa a apagarse 
                cam = false;
                $cam.setAttribute("src", "https://image.flaticon.com/icons/png/128/61/61042.png");
                $video.srcObject = null;
                // activo = false;
            }
            cambioCam();
        }
        if(e.target.matches("img#mic")){
            if(!mic){
                mic = true;
                $micro.setAttribute("src", "https://image.flaticon.com/icons/png/128/25/25682.png");
            }else{
                mic = false;
                $micro.setAttribute("src", "https://image.flaticon.com/icons/png/128/25/25632.png");
            }
            cambioCam();
        }
    });


    function cambioCam(){
        if(navigator.mediaDevices.getUserMedia){
            objStream = navigator.mediaDevices
            .getUserMedia({video: cam, audio: mic})
            .then((stream) => {
                // if(activo == false)  stream.active = false;
                console.log(stream);
                $video.srcObject = stream;
                $video.play();
            })
            .catch((error)=> {
                console.log(error);
            });
        }
    }

}


// Hacer que los botones se vean chidos
// desactivar la camara (El stream se termina pero la camara sigue prendida, el le prendido)