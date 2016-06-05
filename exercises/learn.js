/**
 * Created by kurus.mk on 04.06.2016.
 */

var a=2;
var b= 3;
var c = a + b;

console.log(c*a);


function newCars (model, color, speed, year){
    this.model=model;
    this.color=color;
    this.speed=speed;
    this.year=year;
}

var fiat= new newCars('500','blue',180,1985);
var bmw= new newCars('535','red',220,2003);
var volvo= new newCars('s60','black',199,2000);
var volkswagen= new newCars('golf','green', 175,1999);
var audi= new newCars('a6','silver', 235, 2016);

var allCars = [fiat, volkswagen, bmw, volvo,audi];



