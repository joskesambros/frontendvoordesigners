/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/


function buildHTML(alleJson) {
    console.log(alleJson);

    // section waar alle artikelen inzitten
    var sectionMaken = document.createElement('section');
    document.querySelector('main').appendChild(sectionMaken);

    //De event load wordt aan het html element met class "loader" toegepast
    window.addEventListener("load", function () {
        const loader = document.querySelector(".loader");
        loader.className += " hidden";
    });

//    // Div met extra info over de films
//    var divMaken = document.createElement('div');
//        divMaken.classList.add('hide');

// De loop, waardoor
    for (var i = 0; i < alleJson.length; i++) {


        var artikelMaken = document.createElement('article');
        sectionMaken.appendChild(artikelMaken);

        var titelAanmaken = document.createElement('h1');
        artikelMaken.appendChild(titelAanmaken);
        titelAanmaken.innerHTML = alleJson[i].title;

        var images = document.createElement('img');
        artikelMaken.appendChild(images);
        images.src = alleJson[i].cover;

        var trailer1 = document.createElement('a');
        artikelMaken.appendChild(trailer1);
        trailer1.href = alleJson[i].trailer;
        trailer1.innerHTML = 'Bekijk de trailer';

        // DIV MET INFO
//        var director = document.createElement('h2');
//        divMaken.appendChild(director);
//        director.innerHTML = alleJson[i].directors;
//
//        var reviewss = document.createElement('p');
//        divMaken.appendChild(reviewss);
//        reviewss.innerHTML = alleJson[i].reviews;
//
//        var idss = document.createElement('id');
//        divMaken.appendChild(idss);
//        idss.innerHTML = alleJson[i].idss;
//
//        var genres1 = document.createElement('p');
//        divMaken.appendChild(genres1);
//        genres1.innerHTML = alleJson[i].genres;
//
//        var actors1 = document.createElement('p');
//        divMaken.appendChild(actors1);
//        actors1.textContent = 'Actors: ' + alleJson[i].actors[0].actor_name + ',' + alleJson[i].actors[1].actor_name + ',' + alleJson[i].actors[2].actor_name;
    }
}

// Veranderd de titel van de pagina. Maakt het groter en roder.
document.onkeypress = function (e) {
    console.log(e.keyCode);
    if (e.keyCode === 108) {
        document.getElementById('kleur').style.color = "red";
        document.getElementById('kleur').style.transform = 'scale(2)';
    }
};

// Javascript van Koop
fetch('https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        console.log(json);
        buildHTML(json);
    });
