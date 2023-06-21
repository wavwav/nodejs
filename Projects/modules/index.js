let Car =require('./car');
let Lamb = require('./lamb');
let {echo,area} = require('./methods');
let obj = require('./config');

echo('Hello');
area(100000000000,10);

let car = new Car('demio');
car.drive();
let lamb = new Lamb('tesla');
lamb.drive();
lamb.echo();

console.log(JSON.stringify(obj))