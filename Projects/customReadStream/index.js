let CustomReader = require('./customReader');

const reader = new CustomReader();

reader.on('data',chunk => {
console.log(chunk)
});

reader.resume();