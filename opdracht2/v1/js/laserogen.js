var bril = document.querySelectorAll('div');
//var key = event.keyCode == 76;


document.onkeypress = function (e) {
    console.log(e.keyCode);
    if (e.keyCode === 108) {

        bril.classList.toggle('oog');
        console.log('LASERS!!');
    }
}
