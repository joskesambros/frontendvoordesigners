/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/


function buildHTML(alleJson) {
    console.log(alleJson);

    var sectionMaken = document.createElement('section');
 document.querySelector('main').appendChild(sectionMaken);

    var sectioninfo = document.querySelectorAll('information');

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
        actors1.innerHTML = myJson[i].actors[i];
    }


fetch('https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json')
                .then(function (response) {
                    return response.json();
                })
                .then(function (json) {
                    console.log(json);
                    buildHTML(json);
                });










/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

var sectionMaken = document.querySelector('section');
var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';


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


// stap 1: maak de html elementen aan.
function buildHTML(alleJson) {
    var artikelMaken = document.createElement('article');
    var titelAanmaken = document.createElement('h1');
    var images = document.createElement('img');
    var plotMaken = document.createElement ('p');
//    var trailer1 = document.createElement('a');
    var genres1 = document.createElement('p');
    var acteurs = document.createElement('p');


// stap 2:
    titelAanmaken.innerHTML = alleJson[0].title;
    images.setAttribute('src', alleJson[0].cover);
    genres1.textContent = 'Genre' + alleJson[0].genres;
    plotMaken.innerHTML = alleJson[0].plot;
    acteurs.textContent = 'Actors: ' + alleJson[0].actor[0].actor_name + ',' + alleJson[0].actor[1].actor_name + ',' +
        alleJson[0].actor[2].actor_name + ',' ;


    sectionMaken.appendChild(genres1);
    sectionMaken.appendChild(artikelMaken);
    sectionMaken.appendChild(titelAanmaken);
    sectionMaken.appendChild(images);
    sectionMaken.appendChild(plotMaken);
    sectionMaken.appendChild(genres1);


}

function filter(f) {
    //document.getElementsByTagName('BODY')[0].style.backgroundColor = "yellow";
    sectionMaken.innerHTML = '';
    var films = request.response;
    for (var i = 0; i < films.length; i++) {
        console.log(films[i].genres);
        for (var j = 0; j < films[i].genres.length; j++) {
            if (films[i].genres[j] == f) {
                buildHTML(films[i]);
            }
        }
    }
}

//    for(var i = 0; i < alleJson.length; i++) {
//
//     titelAanmaken.textContent = alleJson.title;
//    images.src = alleJson.cover;
//
//    artikelMaken.appendChild(titelAanmaken);
//    artikelMaken.appendChild(images);
//
//    var actors1 = alleJson.actors;
//    for (var i = 0; i < actors1.length; i++) {
//
//        lijstMaken.textContent = actors1[i].name;
//        artikelMaken.appendChild(lijstMaken);
//    }
//
//
//
//
//        sectionMaken.appendChild(artikelMaken);
//        titelAanmaken.innerHTML = alleJson[i].title;
//        images.src = alleJson[i].cover;
//        document.querySelector('div').appendChild(plotMaken);
//        plotMaken.innerHTML=alleJson[i].plot;
//
//        artikelMaken.appendChild(trailer1);
//        trailer1.href = alleJson[i].trailer;
//        trailer1.innerHTML = 'Bekijk de trailer';        document.querySelector('div').appendChild(genres1);
//        document.querySelector('div').appendChild(genres1);
//        director.innerHTML = alleJson[i].directors;
//
//
//}


document.onkeypress = function (e) {
    console.log(e.keyCode);
    if (e.keyCode === 108) {

        document.body.style.backgroundColor = "blue";
        console.log('LASERS!!');
    }
}

