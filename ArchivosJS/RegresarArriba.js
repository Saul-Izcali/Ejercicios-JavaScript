

export default function RegresarArriba(){
    if(window.scrollY > 250){   // Si la  barra de scroll esta a mas de 250px se muestra el circulo
        document.getElementById("getTop").className = "regresaArriba";
    }else{
        document.getElementById("getTop").className = "regresaArribaDesaparecer";
    }

    document.addEventListener("click", (e)=>{
        if(e.target.matches("#getTop")){
            window.scrollTo(0,0);   //  Scrollea hasta la posicion (x,y) -> (0,0) de la pantalla
        }
    });
}


