$(function(){


    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1250,
      responsive: true,
      infiniteLoop: true

    });

var posts= [

    {
        titulo : 'prueba de titulo 1',
        date : 'publicado el dia  '+ moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
        contenido : 'hflkbhvfkhnfcfhfruhbfkfanuduaxefekfhflkbhvfkhnfcfhfruhbfkfanuduaxefekfefefgawhflkbhvfkhnfcfhfruhbfkfanuduaxefekfefefgawhflkbhvfkhnfcfhfruhbfkfanuduaxefekfefefgawefefgaw'
    },

    {
        titulo : 'prueba de titulo 2',
        date : 'publicado el dia  '+ moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
        contenido :'hflkbhvfkhnfcfhfruhbfkfanuduaxefekfefehflkbhvfkhnfcfhfruhbfkfanuduaxefekfefefgawhflkbhvfkhnfcfhfruhbfkfanuduaxefekfefefgawhflkbhvfkhnfcfhfruhbfkfanuduaxefekfefefgawhflkbhvfkhnfcfhfruhbfkfanuduaxefekfefefgawfgaw'
    },

    {
        titulo : 'prueba de titulo 3',
        date : 'publicado el dia  '+ moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
        contenido : 'hflkbhvfkhnfcfhfruhbfkfanuduaxehflkbhvfkhnfcfhfruhbfkfanuduaxefekfefefgawhflkbhvfkhnfcfhfruhbfkfanuduaxefekfefefgawhflkbhvfkhnfcfhfruhbfkfanuduaxefekfefefgawfekfefefgaw'
    }

    


];

posts.forEach((item, index)=>{

    var post = `  
    <article class="post">
        <h2 class="azul">${item.titulo}</h2>
        <span class="date"> ${item.date}</span>
        <p id="parrafo">${item.contenido}</p>
    <a href="#">Leer Mas</a>
    </article>
    `;

$("#posts").append(post);
});

console.log(posts)

  });