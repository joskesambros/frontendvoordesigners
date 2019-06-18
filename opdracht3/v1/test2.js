/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/
var sectionMaken = document.createElement('section');
var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';

function buildHTML(alleJson) {


//Json data laden//
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

 request.onload = function () {
    var films = request.response;
     for (var i = 0; i < films.length; i++) {
        buildHTML(films[i]);
    }
};

// document.querySelector('main').appendChild(sectionMaken);

    for(var i = 0; i < alleJson.length; i++) { // DIT IS DE LOOP //


        var artikelMaken = document.createElement('article');
        document.querySelector('body').appendChild(artikelMaken);


        var titelAanmaken = document.createElement('h1'); // HIER CREER JE EEN H1 //
        artikelMaken.appendChild(titelAanmaken); // HIER ZEG JE WAAR JE HET IN DE HTML WEL//
        titelAanmaken.innerHTML = alleJson[i].title; //HIER MAAK JE INNER HTML AAN EN ZEG JE DAT JE ALLE TITELS ER IN ZET DOOR DE LOOP//

        var images = document.createElement('img');
        artikelMaken.appendChild(images);
        images.src = alleJson[i].cover;


        //         var plotMaken = document.createElement ('p');
        //        artikelMaken.appendChild(plotMaken); // HIER DOE IK IPV DOCUMENT.QUERYSELECTOR() DOE IK artikelMaken OMDAT IK DAN ALLES PER ARTIKEL ER IN ZET
        //        plotMaken.innerHTML=alleJson[i].plot;

        var trailer1 = document.createElement('a');
        artikelMaken.appendChild(trailer1);
        trailer1.href = alleJson[i].trailer;
        trailer1.innerHTML = 'Bekijk de trailer';


        var reviewss = document.createElement('p');
        artikelMaken.appendChild(reviewss);
        reviewss.textContent = 'Actors: ' + alleJson[i].reviews[0].review_text + ',' + alleJson[i].reviews[1].review_text + ',' + alleJson[i].reviews[2].review_text;

        var idss = document.createElement('id');
        document.querySelector('div').appendChild(idss);
//        artikelMaken.appendChild(idss);
//        idss.innerHTML = alleJson[i].idss;

        var genres1 = document.createElement('p');
        artikelMaken.appendChild(genres1);
        genres1.innerHTML = alleJson[i].genres;

        var director = document.createElement('h2');
        artikelMaken.appendChild(director);
        director.innerHTML = alleJson[i].directors;

        //for (var i = 0; i < actors1.length; i++) {

        var actors1 = document.createElement('p');
        artikelMaken.appendChild(actors1);
        actors1.textContent = 'Actors: ' + alleJson[i].actors[0].actor_name + ',' + alleJson[i].actors[1].actor_name + ',' + alleJson[i].actors[2].actor_name;
    }

            }

//function filter(f) {
//    //document.getElementsByTagName('BODY')[0].style.backgroundColor = "yellow";
//    sectionMaken.innerHTML = '';
//    var films = request.response;
//    for (var i = 0; i < films.length; i++) {
//        console.log(films[i].genres);
//        for (var j = 0; j < films[i].genres.length; j++) {
//            if (films[i].genres[j] == f) {
//                buildHTML(films[i]);
//            }
//        }
//    }
//}
fetch('https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json')
                .then(function (response) {
                    return response.json();
                })
                .then(function (json) {
                    console.log(json);
                    buildHTML(json);
                });

for(let i = 0; i < 30; i++) {
    navigator.sendBeacon(
        '//www.mocky.io/v2/5cc8689a300000a94a0561cc?mocky-delay=500ms',
        new Blob([JSON.stringify({key: 'val'})], {type: 'text/plain'})
    );
}
