/**
 * Created by kurus.mk on 04.06.2016.
 */

var a=2;
var b= 3;
var c = a + b;

console.log(c*a);
var arr= new Array();


// klasa na podstawie której tworzymy obiekty
function NewCar (model, color, speed, year){
    this.carModel=model;
    this.carColor=color;
    this.carSpeed=speed;
    this.carYear=year;
}


NewCar.prototype.showColor= function(){
    return 'car color is ' + this.carColor;
};


// na podstawie klasy tworzymy  nowa instacje - obiekt.
//
// konstruktor wywoluje sie wtedy kiedy tworzona jest nowa instancja
var fiat = new NewCar('500','blue',180,1985);
var bmw= new NewCar('535','red',220,2003);
var volvo= new NewCar('s60','black',199,2000);
var volkswagen=new NewCar('golf','green', 175,1999);
var audi=new NewCar('a6','silver', 235, 2016);



var garage=[{fiat,bmw, volvo, volkswagen, audi}];



