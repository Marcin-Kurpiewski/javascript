// /**
//  * Created by kurus.mk on 04.06.2016.
//  */
// //
// // var a = 2;
// // var b = 3;
// // var c = a + b;
// //
// // console.log(c * a);
// var arr = new Array();
//
//
// // klasa na podstawie której tworzymy obiekty
// function NewCar(model, color, speed, year) {
//     this.carModel = model;
//     this.carColor = color;
//     this.carSpeed = speed;
//     this.carYear = year;
//     }
//
//
// NewCar.prototype.showColor = function () {
//     return 'car color is ' + this.carColor;
// };
//
//
// // na podstawie klasy tworzymy  nowa instacje - obiekt.
// //
// // konstruktor wywoluje sie wtedy kiedy tworzona jest nowa instancja
// var fiat = new NewCar('500', 'blue', 180, 1985);
// var bmw = new NewCar('535', 'red', 220, 2003);
// var volvo = new NewCar('s60', 'black', 199, 2000);
// var volkswagen = new NewCar('golf', 'green', 175, 1999);
// var audi = new NewCar('a6', 'silver', 235, 2016);
//
// var kawasaki = {
//     model: 'zx5',
//     color: 'orange',
//     speed: 310,
//     year: 2015
// };
// var suzuki = {
//     model: 'gsxr',
//     color: 'blue',
//     speed: 325,
//     year: 2003
// };
// var honda = {
//     model: 'hornet',
//     color: 'white',
//     speed: 198,
//     year: 2007
// };
// var yamaha =  {
//     model: 'fazer',
//     color: 'red',
//     speed: 215,
//     year: 2009
// };
//
// var motorBike = [kawasaki, suzuki, honda, yamaha];
// var motorCars = [fiat, bmw, volvo, volkswagen, audi];
// var license = ['kat A', 'kat B', 'kat C', 'Kat d'];
//
// // łączenie tablic concatcars
// var carsAndMotors = motorBike.concat(motorCars);
// var motorsAndLicense =motorBike.concat(license);
//
// function fastCars(car, index, array) {
//     if (car.speed > 200) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// var result = motorBike.filter(fastCars).map(function (car){
//     return car.color;
//
// });
//
// Array.prototype.map= function(f) {
//     var result=[];
//     for ( var i=0; i< this.length; i+=1) {
//         result.push(f(this[i]));
//     }
//         return result;
//     };


//// cwiczenia

var number1= 10;
var number2=20;
var firstName= 'Adam';
var lastName= 'Kowalski';
// tablice posiadaja pare klucz-wartos. Klucz to numer indeksu, wartosc to zawartasc danego indeksu.
// pobranie elementu z tablicy tablica1[0], tablica1[1], tablica1[2]
var tablica1=['Damian', 'Wojewodzki', 35, true, undefined, false,];
// obiekty - pzechwują klucz-wartosc. moga to byc własciwości(zmienne) lub metody (funkcje).
// dostep do wartosci odbywa sie przez klucz.
// Wlaściwości i metody obiektu sa notacji literału obiektu podawane w nawiasach klamrowych.
// uzyskanie dostepu do wlasciwosci lub metody biektu uzyskuje przez podanie nazwy obiektu i jego wlasciwosci.
// obiekt1.name; obiekt1.maxSpeed; obiekt2.price;
var obiekt1={ name:'Audi', model:'A6', maxSpeed: 250, price:10000};
var obiekt2= { name:'Honda', model:'civic', maxSpeed:190, price:15999};
// tablica z obiektami
var tablica2=[{firstName:'Adrian', lastName: 'Kaczynski' , age:35, car: true}];

//konstruktor - jest to szablon tworzenia obiekow, służy do tworzenia wielu obiektów na tej samej stronie.

function newCar(name, model, maxSpeed, price) {
    this.newCarName=name;
    this.newCarModel=model;
    this.newCarMaxSpeed=maxSpeed;
    this.newCarPrice=price;
}
//utworzenie nowego obiektu przez konstruktor  odbywa sie za pomoca slowa kluczowego new i wywolania konstruktora
// aby uzyskać dostęp do właściwości lub metod obiektu nalezy uzyć notacji z kropką.
// obiekt3.name; obiekt4.model; obiekt4.price;
var obiekt3= newCar('fiat','500',187, 29999);
var obiekt4= newCar('volvo','s60', 211, 39000);

//Funkcje - czasami porzebuja do wywołania pewnych parametrow(zmiennych)
function showPrice( firstPrice, secondPrice){
    return firstPrice + secondPrice;
}
// wywołanie funckji  - podczas wywoływania funkcji parametry(zmienne) stają się argumentami(dalej sa to zmienne)
showPrice(15,35);

//funkcja moze zwracac rozne wartosci, różnie zdeklarowane np zmienne.
// Interpreter bo użyciu polecnia return opuszcza funkcje i powraca do polecia funkcji ktore ja wywolało.
function showPrice1( firstPrice, secondPrice){
    var anotherPrice= firstPrice + secondPrice
    return anotherPrice;
}
// z funkcji mozna zwracac wiele wartosci np w formie tablicy
function showPrice2( firstPrice, secondPrice, thirdPrice) {
    var minPrice = firstPrice + secondPrice;
    var maxprice = firstPrice + secondPrice + thirdPrice;
    var averagePrice=maxprice/3;
    var allPrice=[minPrice, maxprice, averagePrice];
    return allPrice;
}
// czemu nie moge uzyc zmiennej z powyzeszej funckji ??? bo jest w obrebie fukcji i jest zmienna lokalna ?
