/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/


//function buildHTML(Titels) {
//    console.log(Titels);
//
//    for (var i = 0; i < Titels.length; i++) {
//        var titelAanmaken = document.createElement ('h1');
//        document.querySelector('body').appendChild(titelAanmaken);
//        titelAanmaken.innerHTML = Titels[i].title;
//    }
//}
fetch('https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json')
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

