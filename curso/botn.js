'use strict'

var boton = document.querySelector("#btn");

function cambiarColor(){

    var bg = boton.style.background;

    if(bg == "green"){
        boton.style.background = "red";
    }else{
        boton.style.background = "green";
    }

    return true;

}