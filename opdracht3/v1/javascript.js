/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/


function buildHTML(alleJson) {
    console.log(alleJson);

    for (var i = 0; i < alleJson.length; i++) {// DIT IS DE LOOP //

        var sectionMaken = document.createElement ('section');
        document.querySelector('body h1').appendChild(sectionMaken);

        var artikelMaken = document.createElement ('article');
        document.querySelector('section').appendChild(artikelMaken);

         var plotMaken = document.createElement ('p');
        artikelMaken.appendChild(plotMaken); // HIER DOE IK IPV DOCUMENT.QUERYSELECTOR() DOE IK artikelMaken OMDAT IK DAN ALLES PER ARTIKEL ER IN ZET
        plotMaken.innerHTML=alleJson[i].plot;

        var images = document.createElement ('img');
        artikelMaken.appendChild(images);
        images.src=alleJson[i].cover;

        var director = document.createElement ('h2');
        artikelMaken.appendChild(director);
        director.href=alleJson[i].directors;

         var actors1 = document.createElement ('p');
        artikelMaken.appendChild(actors1);
        actors1.href=alleJson[i].actors;

        var reviewss = document.createElement ('p');
        artikelMaken.appendChild(reviewss);
        reviewss.href=alleJson[i].reviews;

        var idss = document.createElement ('id');
        artikelMaken.appendChild(idss);
        idss.href=alleJson[i].idss;





        var titelAanmaken = document.createElement ('h1'); // HIER CREER JE EEN H1 //
        artikelMaken.appendChild(titelAanmaken); // HIER ZEG JE WAAR JE HET IN DE HTML WEL//
        titelAanmaken.innerHTML = alleJson[i].title; //HIER MAAK JE INNER HTML AAN EN ZEG JE DAT JE ALLE TITELS ER IN ZET DOOR DE LOOP//

        var trailer1 = document.createElement ('a');
        artikelMaken.appendChild(trailer1);
        trailer1.href=alleJson[i].trailer;
        trailer1.innerHTML = 'Bekijk de trailer';
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

