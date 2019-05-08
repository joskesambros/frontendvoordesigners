/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/


// Roep de button aan waarvan ik de class wil veranderen
var hartje = document.querySelectorAll('article > button');
var nummers = document.querySelector('#aantalHartjes');
var aantalHartjes = 0;

function hoeveelHartjeszijner() {

    aantalHartjes = document.querySelectorAll('.hartje2').length;
    nummers.textContent = ' (' + aantalHartjes + ')';
}

//Verander alle Classes van de button
for (var i = 0; i < hartje.length; i++) {
    hartje[i].addEventListener("click", function () {
        this.classList.toggle('hartje2');
    hoeveelHartjeszijner();
    });

}




