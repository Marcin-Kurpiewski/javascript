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
})


var tablicaObiektow = [{id: 1, name: 'test'}, {id: 2, name: 'test2'}];
var test3 = tablicaObiektow.map(function (item) {
    var object = {}
    object.id = item.id + 1;
    object.name = item.name + "A";
    return object;
});
/**

