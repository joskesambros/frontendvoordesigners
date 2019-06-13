/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/


function buildHTML(alleJson) {
    console.log(alleJson);

    var sectionMaken = document.createElement ('section');

    document.querySelector('main').appendChild(sectionMaken);

    for (var i = 0; i < alleJson.length; i++) {// DIT IS DE LOOP //


        var artikelMaken = document.createElement ('article');
        sectionMaken.appendChild(artikelMaken);

        var divMaken = document.createElement ('div');
        document.querySelector('section').appendChild(artikelMaken);

        var titelAanmaken = document.createElement ('h1'); // HIER CREER JE EEN H1 //
        artikelMaken.appendChild(titelAanmaken); // HIER ZEG JE WAAR JE HET IN DE HTML WEL//
        titelAanmaken.innerHTML = alleJson[i].title; //HIER MAAK JE INNER HTML AAN EN ZEG JE DAT JE ALLE TITELS ER IN ZET DOOR DE LOOP//

        var images = document.createElement ('img');
        artikelMaken.appendChild(images);
        images.src=alleJson[i].cover;


//         var plotMaken = document.createElement ('p');
//        artikelMaken.appendChild(plotMaken); // HIER DOE IK IPV DOCUMENT.QUERYSELECTOR() DOE IK artikelMaken OMDAT IK DAN ALLES PER ARTIKEL ER IN ZET
//        plotMaken.innerHTML=alleJson[i].plot;

        var trailer1 = document.createElement ('a');
        artikelMaken.appendChild(trailer1);
        trailer1.href=alleJson[i].trailer;
        trailer1.innerHTML = 'Bekijk de trailer';

        var director = document.createElement ('h2');
        divMaken.appendChild(director);
        director.innerHTML=alleJson[i].directors;

        var reviewss = document.createElement ('p');
        divMaken.appendChild(reviewss);
        reviewss.innerHTML=alleJson[i].reviews;

        var idss = document.createElement ('id');
        divMaken.appendChild(idss);
        idss.innerHTML=alleJson[i].idss;

        var genres1 = document.createElement ('p');
        artikelMaken.appendChild(genres1);
        genres1.innerHTML=alleJson[i].genres;

        var director = document.createElement ('h2');
        divMaken.appendChild(director);
        director.innerHTML=alleJson[i].directors;

//for (var i = 0; i < actors1.length; i++) {

        var actors1 = document.createElement ('p');
        artikelMaken.appendChild(actors1);
        actors1.textContent = 'Actors: ' + alleJson[i].actors[0].actor_name + ',' + alleJson[i].actors[1].actor_name + ',' + alleJson[i].actors[2].actor_name;
    }

}
fetch('https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json')
    .then(function (response) {
    return response.json();
    })
    .then(function (json) {
    console.log(json);
    buildHTML(json);
    });
//.catch(function (err)) {
      // console.log(err);

