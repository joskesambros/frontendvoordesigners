/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

var uri = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";


    //De event load wordt aan het html element met class "loader" toegepast
    window.addEventListener("load", function () {
        const loader = document.querySelector(".loader");
        loader.className += " hidden";
    });

function buildHTML(alleJson) {
console.log(alleJson);
    // De loop, waardoor alle tekst in de sections komt
    for (var i = 0; i < alleJson.length; i++) {


        var artikelMaken = document.createElement('article');
        var images = document.createElement('img');
        var trailerMaken = document.createElement('a');
        var plotMaken = document.createElement ('p');
        var titelMaken = document.createElement('h2');
        var genreMaken = document.createElement('p');
        var reviewsMaken = document.createElement('p');
        var ActeursMaken = document.createElement('p');
        var myButton = document.createElement('button');
        var trailer1 = document.createElement('a');

        myButton.addEventListener('click', function () {
 this.parentElement.querySelector('p').textContent = alleJson[1].plot;

        });



        // locaties waar de HTML aan wordt gemaakt
        document.querySelector('main section').appendChild(artikelMaken);
        artikelMaken.appendChild(images);
        artikelMaken.appendChild(trailerMaken);
        artikelMaken.appendChild(plotMaken);
        artikelMaken.appendChild(titelMaken);
        artikelMaken.appendChild(genreMaken);
        artikelMaken.appendChild(reviewsMaken);
        artikelMaken.appendChild(ActeursMaken);
        artikelMaken.appendChild(myButton);
        artikelMaken.appendChild(trailer1);


        // zet JSON in de aangemaakte HTML
        images.src = alleJson[i].cover;
        trailerMaken.src = alleJson[i].trailer;
        plotMaken.innerHTML = alleJson[i].simple_plot;
        titelMaken.innerHTML = alleJson[i].title;
        genreMaken.innerHTML = alleJson[i].genres;
        reviewsMaken.innerHTML = alleJson[i].reviews[i].score;
        ActeursMaken.innerHTML = alleJson[i].actors[1].actor_name + ", " + alleJson[i].actors[2].actor_name + ", " + alleJson[i].actors[i].actor_name;
        myButton.textContent = 'Read more';
        trailer1.href = alleJson[i].trailer;
        trailer1.innerHTML = 'Bekijk de trailer';

    }
    }

// Veranderd de titel van de pagina. Maakt het groter en roder.
document.onkeypress = function (e) {
    console.log(e.keyCode);
    if (e.keyCode === 108) {
        document.getElementById('kleur').style.color = "red";
        document.getElementById('kleur').style.transform = 'scale(1.5)';
    }
};



// Javascript van Koop
fetch(uri)
    .then(function (response) {
        return response.json();
    })
    .then(function (alleJson) {
        console.log(alleJson.length);
        buildHTML(alleJson);
    });
