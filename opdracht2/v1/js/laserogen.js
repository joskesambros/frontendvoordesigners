var bril = document.querySelectorAll('div');
//var key = event.keyCode == 76;


document.onkeypress = function (e) {
    console.log(e.keyCode);
    if (e.keyCode === 108) {

        //document.bril.classList.toggle('oog');
        document.body.style.backgroundColor = "blue";
        console.log('LASERS!!');
    }
}
