/**
 * Created by kurus.mk on 17.06.2016.
 */
var fruit=['sliwka', 'banan', 'jablko', 'gruszka'];

console.log(fruit);

fruit.sort();
console.log(fruit);

var newFruit= fruit.map(function(addA){
    return addA + "A";
});
console.log(newFruit);
var kvArray = [{key:1, value:10}, {key:2, value:20}, {key:3, value: 30}];

var newKvArray= kvArray.map( function(obj){

    var newAdd={};

    newAdd[obj.key]=obj.value;
    console.log(newAdd);
    return newAdd;


});


var table1= [10,20,30,40,50];

var table2= table1.map(function(parametr){
    return parametr *2;
});

/* push, pop, shift unshift */
console.log('Tablica do testów ' +table1);
console.log('Tablica do testów ' +table2);
console.log('1. Dodanie do tablicy jako kolejny element cyfry 5 - push');
table2.push(5);
console.log(table2);
console.log('2. Usuniecie z tablicy ostatniego elementu - pop');
table2.pop();
console.log(table2);
console.log('3. Usuniecie z tablicy pierwszego elementu - shift');
table2.shift();
console.log(table2);
console.log('4. Dodanie do tablicy kilku elementów -  unshift');
table2.unshift(99, 15);
console.log(table2);
console.log('5. Dodanie do tabblicy, nowej tablicy - unshift ');
table2.unshift([[5]]); // nie dziala nie wiem czemu



function sumMul(n,m){
    if (n >= m) return "INVALID";

    var sum = 0;
    for (var i = n; i < m; i+=n) {
        console.log(i);
        sum += i;
    }

    return sum;
}
sumMul(2,9);
sumMul(3,13);
sumMul(4,123);


var str = 'asdfghjkl';
var strReverse = str.split('');


function doubleChar(str) {
    return str.split("").map(function (c) {
        return c + c;
    }).join("");
}

var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var regexp = /[a-e]/g;
var matches_array = str.match(regexp);

console.log(matches_array);


var table3= [10,20,30,40,50];

console.log(table3.slice(0,3));

/**/

function pickIt(arr){
    var odd=[],even=[];

    for ( var i=0; i<arr.length; i++){
        if ( arr[i] %2==0 ) even.push(arr[i]);
        else odd.push(arr[i]);
    }
    return [odd,even];
}


var marks = [10,20,30];

function getAverage(marks) {

    var aver = [];
    for (var i = 0; i <= marks.length; i++) {
        aver.push[i];

    }

    return aver;
}