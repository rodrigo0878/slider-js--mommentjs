


var peliculas = [
    {
        titulo : "superman",
        year  : 2004,
        empresa : "dc"
    },
    {
        titulo : " iron man",
        year : 2009,
        empresa : "marvel"
    },

    
];

var listado = document.querySelector("#peliculas");
var index;
for (index in peliculas){
    var p = document.createElement('p');
    p.append(peliculas[index].titulo + "  "+ peliculas[index].year);
    listado.append(p);
}