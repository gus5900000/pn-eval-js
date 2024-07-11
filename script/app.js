
function changeImageSrc(src) {
    var image = document.getElementsByClassName("img-fluid");
    image.src = "./image/image3.png";
}

var button = document.getElementById('button');

button.addEventListener("click", function ()  {
    console.log("Button clicked");
    changeImageSrc("./asset/image/image2.png");
})