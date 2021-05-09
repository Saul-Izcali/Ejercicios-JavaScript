
let $circulo = document.getElementById("circulo");
let horizontal = 0, vertical = 0;

export default function Seccion2(elemento){
    // console.log("It works");
    
    document.addEventListener("keypress", (e) => {
        if(e.keyCode === 100){  // d     // No me funciono con el metodo key, tuve que utilizar el keycode
            // console.log("d");
            if(horizontal < 1040)   $circulo.style.marginLeft = `${horizontal += 10}px`;
        }
        if(e.keyCode === 97){   // a
            if(horizontal > 5)  $circulo.style.marginLeft = `${horizontal -= 10}px`;
        }

        if(e.keyCode === 119){  // w   
            if(vertical > 0)    $circulo.style.top = `${vertical -= 5}px`;
        }
        if(e.keyCode === 115){  // s
            if(vertical < 200)    $circulo.style.top = `${vertical += 5}px`;
        }
            
        // console.log(e);
    });
    
}