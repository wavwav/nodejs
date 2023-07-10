let fs = require('fs');
let path = require('path');

let data ='';

let reader = fs.createReadStream(path.join(__dirname,'sample.txt'),'utf-8');

reader.on('data',(chunk) => {
    data += chunk;
});

reader.on('end',(chunk) => {
  console.log(data);
})

reader.resume();