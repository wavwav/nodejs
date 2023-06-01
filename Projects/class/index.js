const { utimes } = require('fs')

let Car = class{
constructor(value){
  this.name = value
}
driva(){
  console.log('class car')
}
}

let Ram = class extends Car{
  constructor(value){
    super(value)
  }
  echo(){
    super.driva();
  }
driva(){
  console.log('class ram')
}
}

const car = new Car('car');
const ram = new Ram('ram');

car.driva();
ram.echo();
ram.driva();

var util = require('util');

let Cars = function(name){
  this.name = name
}

Cars.prototype.driva = function(){
    console.log('functino car')
}

let Rams = function(name){
  Rams.super_.call(this,name)
}

util.inherits(Rams,Cars)

Rams.prototype.echo = function(){
  Rams.super_.prototype.driva.call(this);
};

Rams.prototype.driva = function(){
    console.log('functino Ram')
};

const cars = new Cars('cars');
const rams = new Rams('rams');
cars.driva()
rams.echo()
rams.driva()
