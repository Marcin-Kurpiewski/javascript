/**
 * Created by kurus.mk on 17.05.2016.
 */
//NAUKA ---
    // operatory matematyczne
// var number1= 2;
// var number2=4;
// var res1= number1 + number2;
//
// var res2= 2+"5";
//
// var res3= number1- number2;
//
// var res4= number1 * number2 *'1';
//
// var res5= 5* "asfd";
//
// var res6= number2 / number1;
//
// var res7= 6%2;
// var res8= 6%4;
//
// var res9= 2+2*4;
// var res10=(2+2) *4;
//
// number2= number2 + 2;
//



// OPERATORY PORÓWNANIA
//  var number = 20;
//
// if ( number ===20){
//     console.log('liczba jest rowna 20');
//
// }
//
// if(number !=20){
//     console.log("liczba nie jest rowna 20");
// } else {
//     console.log('liczba jest rowna 20');
// }
//
// var number2=6;
// var isEven=(number%2)===0;
//
//

//operatory logiczne

// var number = 10;
// console.log(number<20 && number >15 );



// var number1=0;
// var number2=5;
//
// console.log(number1++);
// console.log(--number1);
// console.log(number2++);
// console.log(--number2);
//
//





// var number=4, word="";
//
// if(number===1) {
//     word = "jeden";
// }else if(number===2) {
//     word = "dwa";
// }else if(number===3) {
//     word = "trzy";
// }else{
//     word="wartość nieznana"
// }
// console.log("wartość to " + word);
//
// var number =1;
// var word="";
// switch(number){
//     case 1:
//         word="jeden";
//         break;
//     case 2:
//         word="dwa";
//         break;
//     case 3:
//         word="trzy";
//         break;
//     default:
//         word="wartość nienznan";
// }
// console.log('wartość to ' + word +".");



//
//
// var number = 10;
// while (number >0){
//     console.log(number);
//     number--
// }
//----------prosta graaaa
// var secretNumber= Math.round(Math.random()*10);
//     while (prompt("Podaj liczbęz przedziału od 1 do 10")!=secretNumber){
//     alert("nie trafiłes, spróbuj ponownie ");
// }
// alert("brawo");

// petla do while
// var number = 20;
//
// do {
//     console.log(number);
//     number++
// } while (number>30);



// petla for in
// var person={ 'imię':'Maciej', 'nazwisko':'kowalski', 'wiek':32};
//
// // for(var key in person) {
// //     console.log(key + ': ' + person[key]);
// // }
// //
// //
//
// var person2={};
//
// for(var key in person) {
//   person2[key]=person[key];}
// console.log(person2);
// //


//przerywanie i kontynuacja petli

// for ( var i=0; i<=20; i++){
//     if((i%2)===0){
//         console.log(i);
//     }
}
// // var nick="";
// nick="komp";
// if(!nick){
//     console.log("nick nie został podany");
// } else {
//     console.log("nick został podany, twoj nick to" + ' ' + nick );
// }
//



// $(document).ready(function () {
//     var gallery = 0;
//     rotate();
//     function rotate() {
//         var adImages = [
//             "images/photo1.jpg",
//             "images/photo2.jpg",
//             "images/photo3.jpg",
//             "images/photo4.jpg",
//             "images/photo5.jpg",
//             "images/photo6.jpg"
//         ];
//
//         gallery++;
//         if (gallery == adImages.length) {
//             gallery = 0;
//         }
//        $('body').attr('src', galeria[1]);
//         setTimeout(rotate, 6 * 1000);
//     }
// });
//
//
//
//
//
//
//
//
//

// function carStore() {
//
//     var audi = {make: 'audi', model: 'a5', color: 'black', year: '2005', price: '12500', hp: '100', owners: '2'};
//     var bmw = {make: 'bmw', model: '5', color: 'red', year: '2010', price: '35000', hp: '125', owners: '3'};
//     var fiat = {make: 'fiat', model: '500', color: 'white', year: '2016', price: '50000', hp: '65', owners: '4'};
//     var ford = {make: 'ford', model: 'focus', color: 'blue', year: '1999', price: '5450', hp: '99', owners: '5'};
//     var honda = {make: 'honda', model: 'civic', color: 'green', year: '2003', price: '9999', hp: '125', owners: '1'};
// }
//
// var a=5;
// var b=10;
// console.log('wynik dzialania dodawania zmiennych to' +' '+ (a+b));
//
//  var isLoggedIn=false;
// if(isLoggedIn) {
//     console.log('zalogowano');
// } else {
//     console.log('nie zalogowano');
// }
//
// // Wartosci fałszywe
// // false,0, "", null, undefined, NaN
//
// var vaule="0";
// if(value) {
//     console.log('ta wartosci nie jest falszywa');
// }
// 07 dodawanie
// var number1=2;
// var number2=4;
//
// var res1= number1 + number2;
// // konkatenacja
// var res2= 2+"5";
//
// //odejmowanie
// var res3= number1-number2;
// // mnozenie
// var res4= number1 * number2;
// //dzielenie
// var res5= number2/number1;
// //modulo - reszta z dzielenia
// var res7 = 6%3;
// var res8= 6%4;
// // klejnosc dzialan
// var res9 = 2+2*4;
// var res10=(2+2)*4;
// // przypisywanie z obliczenia
// var number2= number2+2;
// number2+=2;
// var number2-=2;
// var number2 *=;
// var number2/=;
// var number2 %=;


//08 OPERATORY POROWNANIA
// var number=20;
// if (number =20){
//     console.log('liczba jest rowna 20')
// }