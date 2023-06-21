const Car = require("./car");

let Lamb = class extends Car{
  constructor(name){
    super(name);
  }

  echo() {
    super.drive();
  }

  drive() {
    console.log(`fire ${this.name}`);
  }
}

module.exports = Lamb;