/**
 * Created by kurus.mk on 19.06.2016.
 */
'use strict'


// fizz buzz  
//  
function wypiszDoTablicy() {
    var tablica = [];
    for (var i = 1; i <= 100; i++) {
        if (i % 5 === 0) {
            tablica.push("buzz");
        } else if (i % 3 === 0) {
            tablica.push("fizz");
        } else {
            tablica.push(i);
        }
    }
    return tablica;
}


function wypiszDoTablicy2(array) {
    var tablica = array;
    for (var i = 1; i <= 10; i++) {
        if (i % 5 === 0) {
            tablica.push("buzz");
        } else if (i % 3 === 0) {
            tablica.push("fizz");
        } else {
            tablica.push(i);
        }
    }
    return tablica;
}

function wypiszDoTablicy3(array, punktStartowy, punktKoncowy) {
    var tablica = array;
    for (punktStartowy; punktStartowy <= punktKoncowy; punktStartowy++) {
        if (punktStartowy % 5 === 0) {
            tablica.push("buzz");
        } else if (punktStartowy % 3 === 0) {
            tablica.push("fizz");
        } else {
            tablica.push(punktStartowy);
        }
    }
    return tablica;
}

function wypiszDoTablicy4(array, punktStartowy, punktKoncowy) {
    var tablica = array;
    for (punktStartowy; punktStartowy <= punktKoncowy; punktStartowy++) {
        if (punktStartowy % 5 === 0) {
            break;
        } else if (punktStartowy % 3 === 0) {
            tablica.push("fizz");
        } else {
            tablica.push(punktStartowy);
        }
    }
    console.log("jestem poza petla")

    return tablica;
}


function wypiszDoTablicy5() {
    var tablica = [];
    for (var i = 1; i <= 10; i++) {
        if (i % 5 === 0) {
            continue;
        } else if (i % 3 === 0) {
            tablica.push("fizz");
        } else {
            tablica.push(i);
        }
    }
    return tablica;
}


var tablica = [1, 2, 3, 4, 5];
function mapTest(tablica) {  //tworzy nowa tablice 
    return tablica.map(function (element, index) {
        return element + 5;
    })
        ;
}


var tablica2 = mapTest(tablica);
var tablica3 = mapTest(tablica);
var tablica4 = mapTest(tablica);
var tablica5 = tablica4;

//referencja  
//
function filterTest(tablica) {         // tworzy nowa tablice

    return tablica.filter(function (element) {
        return element % 2 === 0;            //zwraca wszystkie elementy ktore spelnia warunek 

    });
}


function findTest(tablica) {
    return tablica.find(function (element) {
        return element % 2 === 0;         //zwraca pierwszy element ktory zwroci warunek 


    });
}

var tablica2 = [10, 20, 30, 40, 50];

function reduceTest(array) {
    return array.reduce(function (curr, prev) {
        return curr + prev;
    }, 100);
}


var nowaZmienna = reduceTest(tablica2);
var test = tablica.map(function (item) {
    return item + 5;
}).reduce(function (curr, prev) {
    return curr + prev;
});

var tablicaObiektow = [{id: 1, name: 'test'}, {id: 2, name: 'test2'}];
var test3 = tablicaObiektow.map(function (item) {
    var object = {};
    object.id = item.id + 1;
    object.name = item.name + "A";
    return object;
});


var tablica6 = [ {nameClub: 'Dream Club', city: 'Sopot', position: {lat: 54.444478, lng: 18.566645}, name: 'Dance Time', photo:'img/foto-event-mini/24.jpg',date: '2016-7-20'},
 {nameClub: 'Bunkier', city: 'Gdansk', position: {lat: 54.354750, lng: 18.654678}, name: 'Festiwal trafik', photo: 'img/foto-event-mini/25.jpg',date: '2016-7-9'},
 {nameClub: "B90", city: "Gdansk", position: {lat: 54.354750, lng: 18.654678}, name: 'Garden party', photo: 'img/foto-event-mini/26.jpg',date: '2016-7-10'},
 {nameClub: 'Czekoladowa', city: 'Sopot', position: {lat: 54.454168, lng: 18.554595}, name: 'Wieczor piwa ', photo: 'img/foto-event-mini/27.jpg',date: '2016-7-12'},
 {nameClub: 'SPATiF', city: 'Sopot', position: {lat: 54.444402, lng: 18.567747}, name: 'Techno Night', photo: 'img/foto-event-mini/28.jpg',date: '2016-7-14'},
 {nameClub: 'Protokultura', city: 'Gdansk', position: {lat: 54.443701, lng: 18.567403}, name: 'House Time', photo: 'img/foto-event-mini/29.jpg',date: '2016-7-16'},
 {nameClub: 'Atelier', city: 'Sopot', position: {lat: 54.448602, lng: 18.568387}, name: 'Muzyka elektroniczna', photo: 'img/foto-event-mini/30.jpg',date: '2016-7-18'},
 {nameClub: 'HAH', city: 'Sopot', position: {lat: 54.453064, lng: 18.564116}, name: 'Techno Night', photo: 'img/foto-event-mini/31.jpg',date: '2016-7-13'},
 {nameClub: 'Wtedy', city: 'Sopot', position: {lat: 54.441044, lng: 18.563498}, name: 'House Time', photo: 'img/foto-event-mini/32.jpg',date: '2016-7-15'},
 {nameClub: 'Dwie zmiany', city: 'Sopot', position: {lat: 54.443651, lng: 18.5643276}, name: 'Muzyka elektroniczna', photo: 'img/foto-event-mini/33.jpg',date: '2016-7-17'},
 {nameClub: 'Scena', city: 'Sopot', position: {lat: 54.448498, lng: 18.568309}, name: 'Destroy music', photo: 'img/foto-event-mini/343.jpg',date: '2016-7-19'},
 {nameClub: 'TAN', city: 'Sopot', position: {lat: 54.445276, lng: 18.567748}, name: 'Rozpoczecie seonu', photo: 'img/foto-event-mini/35.jpg',date: '2016-7-20'},
 {nameClub: 'Libation ', city: 'Sopot', position: {lat: 54.444583, lng: 18.568565}, name: 'Zmiana miejsc', photo: 'img/foto-event-mini/36.jpg',date: '2016-7-21'},
 {nameClub: "Bunkier", city: "Gdansk", position: {lat: 54.354750, lng: 18.654678}, name: 'Wystywa Fotografi', photo: 'img/foto-event-mini/37.jpg',date: '2016-7-23'},
 {nameClub: 'Mewa Towarzyska', city: 'Sopot', position: {lat: 54.443701, lng: 18.567403}, name: 'Koncert na dachu', photo: 'img/foto-event-mini/38.jpg',date: '2016-7-25'},
 {nameClub: 'Absinthe', city: 'Gdansk', position: {lat: 54.351231, lng: 18.648594}, name: 'Scena odkryć', photo: 'img/foto-event-mini/39.jpg',date: '2016-7-27'},
 {nameClub: 'Sfinks 700', city: 'Sopot', position: {lat: 54.448606, lng: 18.567710}, name: 'VHS HELL', photo: 'img/foto-event-mini/40.jpg',date: '2016-7-29'},
 {nameClub: 'Kwadratowa', city: 'Gdansk', position: {lat: 54.370941, lng: 18.615147}, name: 'CD HEAVEN', photo: 'img/foto-event-mini/41.jpg',date: '2016-7-30'},
 {nameClub: 'Dream Club', city: 'Sopot', position: {lat: 54.444478, lng: 18.566645}, name: 'Wieczór', photo: 'img/foto-event-mini/42.jpg',date: '2016-7-10'},
 {nameClub: 'Bunkier', city: 'Gdansk', position: {lat: 54.354750, lng: 18.654678}, name: 'Boat Party', photo: 'img/foto-event-mini/43.jpg',date: '2016-7-12'},
 {nameClub: "B90", city: "Gdansk", position: {lat: 54.354750, lng: 18.654678}, name: 'Disco 80', photo: 'img/foto-event-mini/44.jpg',date: '2016-7-14'},
 {nameClub: 'Czekoladowa', city: 'Sopot', position: {lat: 54.454168, lng: 18.554595}, name: 'Dance Time', photo:'img/foto-event-mini/45.jpg',date: '2016-7-20'},
 {nameClub: 'SPATiF', city: 'Sopot', position: {lat: 54.444402, lng: 18.567747}, name: 'Festiwal trafik', photo: 'img/foto-event-mini/46.jpg',date: '2016-7-9'},
 {nameClub: 'Protokultura', city: 'Gdansk', position: {lat: 54.443701, lng: 18.567403}, name: 'Garden party', photo: 'img/foto-event-mini/47.jpg',date: '2016-7-10'},
 {nameClub: 'Atelier', city: 'Sopot', position: {lat: 54.448602, lng: 18.568387}, name: 'Wieczor piwa ', photo: 'img/foto-event-mini/48.jpg',date: '2016-7-12'},
 {nameClub: 'Libation ', city: 'Sopot', position: {lat: 54.444583, lng: 18.568565}, name: 'Techno Night', photo: 'img/foto-event-mini/49.jpg',date: '2016-7-14'},
 {nameClub: 'Absinthe', city: 'Gdansk', position: {lat: 54.351231, lng: 18.648594}, name: 'House Time', photo: 'img/foto-event-mini/50.jpg',date: '2016-7-16'}
    ];

tablica6.map(function(item){
    var object={};
    object.nameClub=item.nameClub + "A";
    object.city=item.city.toUpperCase();
    return object;
});


var newFunction= function() {
    return arguments + {};
};

tablica6.forEach(newFunction);

var allClubs = [
    {nameClub: "Bunkier", city: "Gdansk", photoClub:"", position: {lat: 54.354750, lng: 18.654678}},
    {nameClub: 'Mewa Towarzyska', city: 'Sopot', photoClub:"", position: {lat: 54.443701, lng: 18.567403}},
    {nameClub: 'Absinthe', city: 'Gdansk', photoClub:"", position: {lat: 54.351231, lng: 18.648594}},
    {nameClub: 'Sfinks 700', city: 'Sopot', photoClub:"", position: {lat: 54.448606, lng: 18.567710}},
    {nameClub: 'Kwadratowa', city: 'Gdansk', photoClub:"", position: {lat: 54.370941, lng: 18.615147}},
    {nameClub: 'Dream Club', city: 'Sopot', photoClub:"", position: {lat: 54.444478, lng: 18.566645}},
    {nameClub: 'Bunkier', city: 'Gdansk', photoClub:"" , position: {lat: 54.354750, lng: 18.654678}},
    {nameClub: "B90", city: "Gdansk", photoClub:"" , position: {lat: 54.354750, lng: 18.654678}},
    {nameClub: 'Czekoladowa', city: 'Sopot', photoClub:"" , position: {lat: 54.454168, lng: 18.554595}},
    {nameClub: 'SPATiF', city: 'Sopot', photoClub:"", position: {lat: 54.444402, lng: 18.567747}},
    {nameClub: 'Protokultura', city: 'Gdansk', photoClub:"", position: {lat: 54.443701, lng: 18.567403}},
    {nameClub: 'Atelier', city: 'Sopot', photoClub:"", position: {lat: 54.448602, lng: 18.568387}},
    {nameClub: 'HAH', city: 'Sopot', photoClub:"" , position: {lat: 54.453064, lng: 18.564116}},
    {nameClub: 'Wtedy', city: 'Sopot', photoClub:"" , position: {lat: 54.441044, lng: 18.563498}},
    {nameClub: 'Dwie zmiany', city: 'Sopot', photoClub:"" , position: {lat: 54.443651, lng: 18.5643276}},
    {nameClub: 'Scena', city: 'Sopot', photoClub:"", position: {lat: 54.448498, lng: 18.568309}},
    {nameClub: 'TAN', city: 'Sopot', photoClub:"", position: {lat: 54.445276, lng: 18.567748}},
    {nameClub: 'Libation ', city: 'Sopot', photoClub:"", position: {lat: 54.444583, lng: 18.568565}}
];
var allEvents = [
    {nameEvent: 'Ludzie ulicy', photoEventEvent: 'img/foto-event-mini/1.jpg',date: '2016-7-1'},
    {nameEvent: 'Otwarcie ogródka', photoEvent: 'img/foto-event-mini/2.jpg',date: '2016-7-2'},
    {nameEvent: 'Zaćmienie', photoEvent: 'img/foto-event-mini/3.jpg',date: '2016-7-3'},
    {nameEvent: 'Cudawianki', photoEvent: 'img/foto-event-mini/4.jpg',date: '2016-7-4'},
    {nameEvent: 'Pozytwynie', photoEvent: 'img/foto-event-mini/5.jpg',date:'2016-7-5'},
    {nameEvent: 'Ziemia to za mało', photoEvent: 'img/foto-event-mini/6.jpg',date: '2016-7-6'},
    {nameEvent: 'Festiwal trafik', photoEvent: 'img/foto-event-mini/7.jpg',date: '2016-7-7'},
    {nameEvent: 'Garden party', photoEvent: 'img/foto-event-mini/8.jpg',date: '2016-7-8'},
    {nameEvent: 'Wieczor piwa ', photoEvent: 'img/foto-event-mini/9.jpg',date: '2016-7-11'},
    {nameEvent: 'Techno Night', photoEvent: 'img/foto-event-mini/10.jpg',date: '2016-7-13'},
    {nameEvent: 'House Time', photoEvent: 'img/foto-event-mini/11.jpg',date: '2016-7-15'},
    {nameEvent: 'Muzyka elektroniczna', photoEvent: 'img/foto-event-mini/12.jpg',date: '2016-7-17'},
    {nameEvent: 'Destroy music', photoEvent: 'img/foto-event-mini/13.jpg',date: '2016-7-19'},
    {nameEvent: 'Rozpoczecie seonu', photoEvent: 'img/foto-event-mini/14.jpg',date: '2016-7-20'},
    {nameEvent: 'Zmiana miejsc', photoEvent: 'img/foto-event-mini/15.jpg',date: '2016-7-21'},
    {nameEvent: 'Wystywa Fotografi', photoEvent: 'img/foto-event-mini/16.jpg',date: '2016-7-23'},
    {nameEvent: 'Koncert na dachu', photoEvent: 'img/foto-event-mini/17.jpg',date: '2016-7-25'},
    {nameEvent: 'Scena odkryć', photoEvent: 'img/foto-event-mini/18.jpg',date: '2016-7-27'},
    {nameEvent: 'VHS HELL', photoEvent: 'img/foto-event-mini/19.jpg',date: '2016-7-29'},
    {nameEvent: 'CD HEAVEN', photoEvent: 'img/foto-event-mini/12.jpg',date: '2016-7-30'},
    {nameEvent: 'Wieczór', photoEvent: 'img/foto-event-mini/21.jpg',date: '2016-7-10'},
    {nameEvent: 'Boat Party', photoEvent: 'img/foto-event-mini/22.jpg',date: '2016-7-12'},
    {nameEvent: 'Disco 80', photoEvent: 'img/foto-event-mini/23.jpg',date: '2016-7-14'},
    {nameEvent: 'Dance Time', photoEvent:'img/foto-event-mini/24.jpg',date: '2016-7-20'},
    {nameEvent: 'Festiwal trafik', photoEvent: 'img/foto-event-mini/25.jpg',date: '2016-7-9'},
    {nameEvent: 'Garden party', photoEvent: 'img/foto-event-mini/26.jpg',date: '2016-7-10'},
    {nameEvent: 'Wieczor piwa ', photoEvent: 'img/foto-event-mini/27.jpg',date: '2016-7-12'},
    {nameEvent: 'Techno Night', photoEvent: 'img/foto-event-mini/28.jpg',date: '2016-7-14'},
    {nameEvent: 'House Time', photoEvent: 'img/foto-event-mini/29.jpg',date: '2016-7-16'},
    {nameEvent: 'Muzyka elektroniczna', photoEvent: 'img/foto-event-mini/30.jpg',date: '2016-7-18'},
    {nameEvent: 'Techno Night', photoEvent: 'img/foto-event-mini/31.jpg',date: '2016-7-13'},
    {nameEvent: 'House Time', photoEvent: 'img/foto-event-mini/32.jpg',date: '2016-7-15'},
    {nameEvent: 'Muzyka elektroniczna', photoEvent: 'img/foto-event-mini/33.jpg',date: '2016-7-17'},
    {nameEvent: 'Destroy music', photoEvent: 'img/foto-event-mini/343.jpg',date: '2016-7-19'},
    {nameEvent: 'Rozpoczecie seonu', photoEvent: 'img/foto-event-mini/35.jpg',date: '2016-7-20'},
    {nameEvent: 'Zmiana miejsc', photoEvent: 'img/foto-event-mini/36.jpg',date: '2016-7-21'},
    {nameEvent: 'Wystywa Fotografi', photoEvent: 'img/foto-event-mini/37.jpg',date: '2016-7-23'},
    {nameEvent: 'Koncert na dachu', photoEvent: 'img/foto-event-mini/38.jpg',date: '2016-7-25'},
    {nameEvent: 'Scena odkryć', photoEvent: 'img/foto-event-mini/39.jpg',date: '2016-7-27'},
    {nameEvent: 'VHS HELL', photoEvent: 'img/foto-event-mini/40.jpg',date: '2016-7-29'},
    {nameEvent: 'CD HEAVEN', photoEvent: 'img/foto-event-mini/41.jpg',date: '2016-7-30'},
    {nameEvent: 'Wieczór', photoEvent: 'img/foto-event-mini/42.jpg',date: '2016-7-10'},
    {nameEvent: 'Boat Party', photoEvent: 'img/foto-event-mini/43.jpg',date: '2016-7-12'},
    {nameEvent: 'Disco 80', photoEvent: 'img/foto-event-mini/44.jpg',date: '2016-7-14'},
    {nameEvent: 'Dance Time', photoEvent:'img/foto-event-mini/45.jpg',date: '2016-7-20'},
    {nameEvent: 'Festiwal trafik', photoEvent: 'img/foto-event-mini/46.jpg',date: '2016-7-9'},
    {nameEvent: 'Garden party', photoEvent: 'img/foto-event-mini/47.jpg',date: '2016-7-10'},
    {nameEvent: 'Wieczor piwa ', photoEvent: 'img/foto-event-mini/48.jpg',date: '2016-7-12'},
    {nameEvent: 'Techno Night', photoEvent: 'img/foto-event-mini/49.jpg',date: '2016-7-14'},
    {nameEvent: 'House Time', photoEvent: 'img/foto-event-mini/50.jpg',date: '2016-7-16'},
];





