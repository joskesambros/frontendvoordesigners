/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/


function buildHTML(Titels) {
    console.log(Titels);

    for (var i = 0; i < Titels.length; i++) { // DIT IS DE LOOP //
        var titelAanmaken = document.createElement ('h1'); // HIER CREER JE EEN H1 //
        document.querySelector('body').appendChild(titelAanmaken); // HIER ZEG JE WAAR JE HET IN DE HTML WEL//
        titelAanmaken.innerHTML = Titels[i].title; //HIER MAAK JE INNER HTML AAN EN ZEG JE DAT JE ALLE TITELS ER IN ZET DOOR DE LOOP//
    }
}
fetch('movies.json')
    .then(function (response) {
    console.log('hallp');
    return response.json();
    })
    .then(function (json) {
    console.log(json);
    //buildHTML(json);
    });
//.catch(function (err)) {
      // console.log(err);

