//Like een verhaal

// Roep de button aan waarvan ik de class wil veranderen
var hartje = document.querySelectorAll('article > button');

//Verander alle Classes van de button
for (var i = 0; i < hartje.length; i++) {
    hartje[i].addEventListener("click", function() {  this.classList.toggle('hartje2');
    });
}


var nav = document.querySelector('.heartnav');
var div = document.querySelectorAll('.heartdiv');
console.log('div', div);

var counter = 0;



function groeiNavDiv() {
    nav.classList.toggle('groeinav');
    this.classList.toggle('active');
    if (this.classList.contains('active')){
        // console.log(this.classList.contains('active'));
        counter++;
    } else {
        counter--;
    }

    console.log('counter', counter);
}

// div.addEventListener('click', function(){
//         groeiNavDiv(this)
//     });


for (i=0; i<div.length; i++) {
    div[i].addEventListener('click', groeiNavDiv);
    }
