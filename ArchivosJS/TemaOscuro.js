
export default function TemaOscuro(boton, claseOscura){
    let $botonModo = document.querySelector(boton), $selector = document.querySelectorAll("[claseOscura]");
    let luna = "🌙", sol = "☀️", ls = localStorage;
                                //variable del localStorage, parece objeto, pero creo que se maneja mas como archivo
    let dia = () =>{
        $selector.forEach((el) => el.classList.add(claseOscura))
        $botonModo.textContent = sol;
        ls.setItem("tema", "dia");
    }
    let noche = () =>{
        $selector.forEach((el) => el.classList.remove(claseOscura))
        $botonModo.textContent = luna;
        ls.setItem("tema", "noche");
    }

    document.addEventListener("click", (e)=>{
        if(e.target.matches(boton)){
            if($botonModo.textContent == luna){
                dia();
            }else{
                noche();
            }
        }
    });


            // Para localStorage

    document.addEventListener("DOMContentLoaded", (e) =>{
        // ls.setItem("tema", null);
        if(ls.getItem("tema") === null ) ls.setItem("tema", "dia");   // crea variable y asigna su valor
        if(ls.getItem("tema")  === "dia")   dia();
        if(ls.getItem("tema") === "noche")  noche();
    });

}