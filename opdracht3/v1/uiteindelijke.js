/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/




// Code verkregen uit de tutorial:
var sectionMaken = document.querySelector('section'); // Hier komt alle JSON data te staan
var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';

//json data wordt ingeladen
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
console.log('request', request);

//De functie van de load/GIF wordt hier aangemaakt
request.onload = function () {
    buildHTML(request.response);

}


//de functie van de films wordt hier aangemaakt
function buildHTML(json0bj) {
    console.log("function buildHTML", json0bj);

    //stap 1: maak elementen aan, deze komen uit de Json data en worden gekoppeld aan de html

    var titelAanmaken = document.createElement('h1');
    var images = document.createElement('img');
    var plot = document.createElement('p');



    //stap 2: Json koppelen aan html,  de films worden hier uit de Array gehaald
    titelAanmaken.textContent = json0bj[0].title;
    images.setAttribute("src", json0bj[0].cover);


    titel1.textContent = json0bj[1].title;
    plot1.textContent = 'Plot: ' + json0bj[1].simple_plot;

    titel2.textContent = json0bj[2].title;
    plot2.textContent = 'Plot: ' + json0bj[2].simple_plot;

    //stap 3: voeg de gemaakte elementen aan de section toe. Dit is een HTML element. De Json data wordt hier ingeladen.

    sectionMaken.appendChild(titelAanmaken);
    sectionMaken.appendChild(images);
    sectionMaken.appendChild(plot);

    sectionMaken.appendChild(titel1);
    sectionMaken.appendChild(plot1);

    sectionMaken.appendChild(titel2);
    sectionMaken.appendChild(plot2);

}
