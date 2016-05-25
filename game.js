/**
 * Created by kurus.mk on 24.05.2016.
 */
window.onload = choosePic;

var adImages = new Array("images/star.png","images/cherries.png","images/7.png");
var thisAd = 0;

function choosePic() {
    thisAd = Math.floor((Math.random() * adImages.length));
    document.getElementById("first").src = adImages[thisAd];

    rotate();
}

function rotate() {
    thisAd++;
    if (thisAd == adImages.length) {
        thisAd = 0;
    }
    document.getElementById("first").src = adImages[thisAd];
    document.getElementById("second").src = adImages[thisAd];
    document.getElementById("third").src = adImages[thisAd];

    setTimeout(rotate, 3 * 50);
}
