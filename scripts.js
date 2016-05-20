/**
 * Created by kurus.mk on 17.05.2016.
 */
//function carList() {
//
//    var audi = {make: 'audi', model: 'a5', color: 'black', year: '2005', price: '12500', hp: '100', owners: '2'};
//    var bmw = {make: 'bmw', model: '5', color: 'red', year: '2010', price: '35000', hp: '125', owners: '3'};
//    var fiat = {make: 'fiat', model: '500', color: 'white', year: '2016', price: '50000', hp: '65', owners: '4'};
//    var ford = {make: 'ford', model: 'focus', color: 'blue', year: '1999', price: '5450', hp: '99', owners: '5'};
//    var honda = {make: 'honda', model: 'civic', color: 'green', year: '2003', price: '9999', hp: '125', owners: '1'};
//
//

$(document).ready(function () {
    var gallery = 0;
    rotate();
    function rotate() {
        var adImages = [
            "images/photo1.jpg",
            "images/photo2.jpg",
            "images/photo3.jpg",
            "images/photo4.jpg",
            "images/photo5.jpg",
            "images/photo6.jpg"
        ];

        gallery++;
        if (gallery == adImages.length) {
            gallery = 0;
        }
       $('#adSlider').attr('src', adImages[gallery]);
        setTimeout(rotate, 4 * 1000);
    }
});




