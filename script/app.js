var button = document.getElementById('button');
let counting = 1;


button.addEventListener("click", function ()  {
    counting++;
    if (counting === 1 ) {
        document.getElementById("img1").style.display = "block";
        document.getElementById("img3").style.display = "none";   
        addParagraph('comme souvent, cette histoire commence dans une auberge... \n Celle-ci est miteuse, inquiètante, perdue au fin fond du marais sans retour, pas de quoi effrayer de vaillants aventuriers');        
    } else if (counting === 2) {
        document.getElementById("img1").style.display = "none";
        document.getElementById("img2").style.display = "block";
        addParagraph('lorem ipsum dolor sit amet');
    } else {
        counting = 0;
        document.getElementById("img2").style.display = "none";
        document.getElementById("img3").style.display = "block";  
        addParagraph('lorem ipsum dolor sit amet bla bla bla');
    }

})


function addParagraph(texte) {
    document.getElementById("texteDesc").innerHTML = '';
    var p = document.createElement('p');
    p.innerText = texte ;
    document.getElementById("texteDesc").appendChild(p);
}
