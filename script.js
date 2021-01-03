
"use strict"


let buttonClick = document.getElementById('buttonId');
if(buttonClick){
    buttonClick.addEventListener('click', onClick1, false);
}
let domElements =
    {
        docX1: document.getElementById('text1'),
        docX2: document.getElementById('text2'),
        docX3: document.getElementById('text3'),
        docImage: document.getElementById('image'),
    }

function onClick1 ()
    {
        domElements.docImage.innerHTML = '<img title="Только не нажимай на нее" height="200" src="images/onTap.gif">';
        domElements.docX1.innerHTML = 'Не кликай';
        setTimeout(onLoaded, 2000);
    }

function onLoaded ()
    {
        domElements.docImage.innerHTML = '<img title="Только не нажимай на нее" height="200" src="images/start.gif">';
        domElements.docX1.innerHTML = 'Привет я тут новенькая ;0';
    }


