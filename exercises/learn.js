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


// //CWICZENIA
// var number1= 10;
// var number2=20;
// var firstName= 'Adam';
// var lastName= 'Kowalski';
// // tablice posiadaja pare klucz-wartos. Klucz to numer indeksu, wartosc to zawartasc danego indeksu.
// // pobranie elementu z tablicy tablica1[0], tablica1[1], tablica1[2]
// var tablica1=['Damian', 'Wojewodzki', 35, true, undefined, false,];
//
// // obiekty - pzechwują klucz-wartosc. moga to byc własciwości(zmienne) lub metody (funkcje).
// //W OBIEKCIE ZMIENNA STAJE SIE WLASCIWOSCIĄ A FUNKCJA METODĄ.
// // dostep do wartosci odbywa sie przez klucz.
// // Wlaściwości i metody obiektu sa w notacji literału obiektu podawane w nawiasach klamrowych.
// // uzyskanie dostepu do wlasciwosci lub metody biektu uzyskuje przez podanie nazwy obiektu i jego wlasciwosci.
// // obiekt1.name; obiekt1.maxSpeed; obiekt2.price;
// //
// var obiekt1={ name:'Audi', model:'A6', maxSpeed: 250, price:10000};
// var obiekt2= { name:'Honda', model:'civic', maxSpeed:190, price:15999};
// var obiekt1Name= obiekt1.name;
// var obiekt2Model= obiekt2['model']; // tak mozna pobierac tylko wlassciwosci(wczesniej nazywane zmienne) obiektu - NIE METODY(funkcje)
// // jeżeli w obiekcie znajdowałaby się funkcja to dostep do niej mamy poprzez zmienna wyglada nastepujaco
// // var dowolnaNazwaZmiennej=obiekt1.nazwaFunkcjiZobiektu();
// // tablica z obiektami
// var tablica2=[{firstName:'Adrian', lastName: 'Kaczynski' , age:35, car: true}];
// // poniżej utworzenie obiektu za pomocą notacji z użyciem konstruktora.
// var hotel=new hotel();
// hotel.name="Grand"; // 3 właściwości
// hotel.rooms=40;
// hotel.booked=20;
// hotel.checkAvailability=function(){ // jedna metoda
//     return this.rooms - this.booked;
//     };
// // utworzenie pustego obiektu za pomoca notacji literału
// var hotel1={};
// //uaktualnienie wlasciwosci obiektu w tym przypaku hotelu
// hotel1.name="Crystal";
// // dodawanie nowej wlasciwosci do obiektu
// hotel1.adress="ulica";
// //właściwość można uaktualnić również za pomocą nawiasów kwadratowych
// hotel1['name']='Sobieski';
// // usunięcie wartości właściwości ( czyli nazwy hotelu) robimy przez podanie pustego ciagu tekstowego
// hotel1.name='';
// //usuniecie całej właściwości
// delete hotel1.name;
// //utworzenie obiektu za pomoca notacji z użyciem konstruktora.
// var obiektA= new Object(); // pusty obiekt
// // konstruktor - jest to szablon tworzenia obiekow, służy do tworzenia wielu obiektów na tej samej stronie.
// // nawa funkcji konstruktora zwykle jest rozpoczynana duza litera.
//
// function Car(model, maxSpeed, price) {
//     this.carModel=model;   // właściwośći
//     this.carMaxSpeed=maxSpeed;
//     this.carPrice=price;
//
//     this.sumPriceAndSpeed= function(){ // metoda w obiekcie
//         return this.price + this.maxSpeed;
//     };
// }
// //utworzenie nowego obiektu przez konstruktor  odbywa sie za pomoca slowa kluczowego new i wywolania konstruktora
// // aby uzyskać dostęp do właściwości lub metod obiektu nalezy uzyć notacji z kropką.
// // fiat.model; volvo.price;
// // tworzymy dwa nowe obiekty za pomoca oknstuktora
// var fiat= new Car('500',187, 29999);
// var volvo= new Car('s60', 211, 39000);
//
// //Funkcje - czasami porzebuja do wywołania pewnych parametrow(zmiennych)
// function showPrice( firstPrice, secondPrice){
//     return firstPrice + secondPrice;
// }
// // wywołanie funckji  - podczas wywoływania funkcji parametry(zmienne) stają się argumentami(dalej sa to zmienne)
// showPrice(15,35);
//
// //funkcja moze zwracac rozne wartosci, różnie zdeklarowane np zmienne.
// // Interpreter bo użyciu polecnia return opuszcza funkcje i powraca do polecia funkcji ktore ja wywolało.
// function showPrice1( firstPrice, secondPrice){
//     var anotherPrice= firstPrice + secondPrice
//     return anotherPrice;
// }
// // z funkcji mozna zwracac wiele wartosci np w formie tablicy
// function showPrice2( firstPrice, secondPrice, thirdPrice) {
//     var minPrice = firstPrice + secondPrice;
//     var maxprice = firstPrice + secondPrice + thirdPrice;
//     var averagePrice=maxprice/3;
//     var allPrice=[minPrice, maxprice, averagePrice];
//     return allPrice;
// }
// var showNewFunction=showPrice2(5,10,15);
// // czemu nie moge uzyc zmiennej z powyzszej funkcji ??? bo jest w obrebie fukcji i jest zmienna lokalna ?
//
// //Deklaracja funkcji powouje jej utworzenie a pozniej mozemy ją wywołać. funkcje mozna wywoływać za pomocą jej nazwy np showPrice2()
// // interpreter najpierwsz wyszukuje zmienne i funkcje pozniej intrpretunej nastepne wiersze skryptu.
// // dlatego funkcja utworzona za pomocą deklaracji funkcji moze byc wywołana przed miejscem jej deklaracji.
// function suma(zmiennaA, zmiennaB) {
//     return zmiennaA * zmiennaB;
// };
// var zmiennaZpowyzszejfunkcji= suma(5,5);
//
// // Funkcja wyrażenia - zwana inaczej anonimową - funkcja przechowywana w zmiennej ( anonimowa dlatego ze zazwyczaj nie podajemy jej nazwy)
// // funkcja wyrażenia nie ma możliwości wywołania przed wykrciem. tzn zostaje uruchomina dopiero wtedy jak interpreter dotrze do danego wyrazenia w tym oprzypak do zminnej.
//
// var area= function (width, height){
//     return width * height;
// };
// var area2=area(5,10);
//
// // IIFE - funkcja wyrażenia wykonywana natychmiast - nie ma nazwy, jest wykonywana zaraz po jej wykryciu przez interpreter
// // ponizej zmienna przechowuje wartosc funkcji a nie funkcje ktora moze byc pozniej uruchomiona.
// //IIFE funkcja mzoe byc uzyta tylko jeden raz w danym skrypcie.
// var are3=(function (){
//     var width1=5;
//     var height2=10;
//     return width1*height2;
// }()); // ostatnia para nawiasow informuje interpreter o natychmiastowym wywolaniu funkcji,
// // zas nawiasy pierwszy i ostatni (operatory grupowania) gwarantuja potraktowanie calosci jako wyrażenie.
//
// // Zmienna lokalna zwana inaczej zmienna na poziomie funkcji. deklaruje sie ja za pomoca var i tworzy wewnatrz funkcji. przechowywana jest w pamieci w momencie wywolywania funkcji.
// // Zmienna globalna. jest przechowywana w pamiec az do momentu dzialania przegladarki. zmiennych tych uzywa sie sporadycznie.
//
//
//
// //// cwiczenia operatory porownania i logiczne
//
//
// var a=10;
// var b=20;
// var c=10;
// var d=40;
//
// var nameZ='10';
// var nameA= 'damian';
// var nameB = 'karol';
// var nameC= true;
// var nameD=false;
// var nameE;
// // OPERATORY PORÓWNANIA
// // == rowny z
// // === identyczny, typ i wartosc
// // != różny !== nieidentyczny z
// // > wiekszy niż
// // < mniejszy niż
// // >= wiekszy niż lub równy
// // <= mniejszy niż lub równy
//
// console.log(nameA==nameB);
// console.log(nameA===nameB);
// console.log(a==b);
// console.log(a==c);
// console.log(a===c);
// console.log(nameZ==a);
// console.log(nameZ===a);
// //
// // //OPERATORY LOGICZNE - boolowskie
// // // && logiczne and - oba musza byc spelnione
// // // || logiczne or  - conajmniej jeden musi być spełniony
// // // ! logiczne not - pobiera pojedyncza wartosc boolowska i ja odwraca z true robi false
// // console.log((2>1)&&(5>3));
// // console.log((10>5)&&(5<10)||!(5<4));
// // // Zmiany zmiennych po wykonaniu - w tym przykladzie zawsze odnosze sie do glownej zmiennej n
// // var n = 10;
// // // n-- oznacza n = 10-1
// // // n++ oznacza n = 10+1
// // // n+=5  oznacza n =10+5
// // // n-=5 oznacza n= 10-5
// // // n*=5 oznaza n = 10*5
// //
// //
// //
// // //polecenie if
// // var score=34;
// // if ( score>=50){
// //     console.log('50 jest mniejsze');
// // }



function args(){ return arguments;}
// powyzsza funkcja zwraca tablice ze wszystkim podanymi w niej argumentami)


function sumaNasterydach(){
    var i, res=0;
    var liczba_parametrow=arguments.length;
    for (i=0; i<liczba_parametrow; ++i){
        res+=arguments[i];}
    return res;}


function f5(){return 5;}
var f6= function(){return 10;}

function suma_dwoch_funkcji (a,b){
    return funkcja1() + funkcja2();
}

function funkcja1(){ return 5;}
function funkcja2() {return 10;}


// function pomnozRazyDwa(a, b, c) {
//     var i, ar = [];
//     for(i = 0; i < 3; i++) {
//         ar[i] = arguments[i] * 2;
//     }
//     return ar;
// // }
// function dodajJeden(a) {
//     return a + 1;
// }
//
// function pomnozRazyDwa(a, b, c, callback) {
//     var i, ar = [];
//     for(i = 0; i < 3; i++) {
//         ar[i] = callback(arguments[i] * 2);
//     }
//     return ar;
// }

// ( function(damian) {
//     alert('czesc ' + damian + '!!!');
// }
// )('kolego')
//
//
// function a(param) {
//     function b(theinput) {
//         return theinput * 2;
//     };
//     return 'Wynik wynosi ' + b(param);
// };

//
var res = '\n';
for(var i = 0; i < 10; i++) {
    for(var j = 0; j < 10; j++) {
        res *= j;
    }
    res= i*j;
}


// var a = ['a', 'b', 'c', 'x', 'y', 'z'];
// var result = '\n';
// for (var i in a) {
//     wynik += 'indeks: ' + i + ', wartość: ' + a[i] + '\n';
// }


