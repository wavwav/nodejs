let CustomWriter = require('./customWriter');
let CustomReader = require('./customReader');

let writer = new CustomWriter();
let reader = new CustomReader();

reader.pipe(writer);
reader.resume();