var section = document.querySelector('section'); //Hier komt Json data//

var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';

//Json data laden//
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
console.log('request', request);

//Als data er is word onload aangeroepen//
request.onload = function () {
    //console.log("data onload?",request.response);
    showMovies(request.response);
};

/*
    deze functie verwerkt de json data
    en maakt html elementen aan
    en zet deze op de pagina (in de dom)
    argument: json van de request
*/

function showMovies(jsonObj) {
    console.log("function showmovies", jsonObj);

    //stap 1: maak html elementen aan
    var title1 = document.createElement('h2');
    var para1 = document.createElement('p');
    var img1 = document.createElement('img');
    var p1 = document.createElement('p');
    var actors = document.createElement('p');

    //stap 2: koppelen de json data aan de html elementen
    title1.textContent = jsonObj[0].title;
    para1.textContent = jsonObj[0].plot;
    img1.setAttribute ('src', jsonObj[0].cover);
    p1.textContent = 'Genre: ' + jsonObj[0].genres;
    actors.textContent = 'Actors: ' + jsonObj[0].actors[0].actor_name + ', ' + jsonObj[0].actors[1].actor_name + ', ' + jsonObj[0].actors[2].actor_name + ', ' + jsonObj[0].actors[3].actor_name;

    //stap 3: voeg de elemtenn toe aan de section (append)
    section.appendChild(title1);
    section.appendChild(img1);
    section.appendChild(p1);
    section.appendChild(actors);
    section.appendChild(para1);
}







///*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
///*eslint-env browser*/
///*eslint 'no-console': 0*/
//
//
//function buildHTML(alleJson) {
//    var sectionMaken = document.createElement('section');
//    var artikelMaken = document.createElement('article');
//    var titelAanmaken = document.createElement('h1');
//    var images = document.createElement('img');
//    artikelMaken.appendChild(images);
//    var plotMaken = document.createElement ('p');
//    var trailer1 = document.createElement('a');
//    var genres1 = document.createElement('p');
//    var lijstMaken = document.createElement('section');
//
//
// document.querySelector('main').appendChild(sectionMaken);
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
//    for(var i = 0; i < alleJson.length; i++) { // DIT IS DE LOOP //
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
//
//    request.onload = function () {
//    var films = request.response;
//    for (var i = 0; i < films.length; i++) {
//        buildHTML(films[i]);
//    }
//
//fetch('https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json')
//                .then(function (response) {
//                    return response.json();
//                })
//                .then(function (json) {
//                    console.log(json);
//                    buildHTML(json);
//                });
//            //.catch(function (err)) {
//            // console.log(err);
