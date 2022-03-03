'use strict'
window.addEventListener('load', function(){

    console.log("dom cargado");

    var formulario = document.querySelector("#form")
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";



    formulario.addEventListener('submit', function(){
            console.log("evento submit capturado");

            var nombre = document.querySelector("#nombre").value;
            var apellido = document.querySelector("#apellido").value;
            var edad = parseInt(document.querySelector("#edad").value);

            if(nombre.trim() == null || nombre.trim().length == 0 ){
                alert("el nombre esta malo hijo la perra");
                return false
            }

            if(apellido.trim() == null || apellido.trim().length == 0 ){
                alert("el apellido esta malo hijo la perra");
                return false
            }

            if(edad == null || edad <= 0 || isNaN(edad)){
                alert("la edad esta mala");
                return false
            }

            box_dashed.style.display = "block";
            var datos_usuarios = [nombre, apellido,edad];
            var indice;
            for(indice in datos_usuarios){
                var parrafo = document.createElement("p");


                parrafo.append(datos_usuarios[indice])
                box_dashed.append(parrafo)
            }


          



            console.log(nombre, apellido, edad)

    });
});


