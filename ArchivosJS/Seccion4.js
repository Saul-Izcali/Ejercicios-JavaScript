

export default function Seccion4(){
  
    window.addEventListener("resize",(e)=>{
        responsive();
    });

    responsive();

    function responsive(){
        if(window.innerHeight < 600 && window.innerWidth < 360){
            // si es menor entonces poner el html con las dos anclas
            document.getElementById("contVM").innerHTML = "<a id='video' class='mapa_video' href='#seccion4'>Ver video</a>"+"<a id='mapa' class='mapa_video' href='#seccion4'>Ver mapa</a>";
    
            document.addEventListener("click", (e)=>{
                if(e.target.matches("a#video.mapa_video")){
                    window.open("https://www.youtube.com/embed/Q0rsdXZTBx0", "VideoMigala", "width=720,height=480,scrollbars=NO");
                }
                if(e.target.matches("a#mapa.mapa_video")){
                    window.open("https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5226.318260046686!2d-103.35819808069023!3d20.523416597805447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1620937007414!5m2!1ses!2smx", "Valle Dorado", "width=720,height=720,scrollbars=NO");
            }
        });
        }else{
            // si es mayor poner el mapa y el video
            document.getElementById("contVM").innerHTML =  "<iframe id='video' width='560' height='315' src='https://www.youtube.com/embed/Q0rsdXZTBx0' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
            + "<iframe id='mapa' src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5226.318260046686!2d-103.35819808069023!3d20.523416597805447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1620937007414!5m2!1ses!2smx' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy'></iframe>";
        }
    }
}






