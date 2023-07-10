let fs = require('fs');
let path = require('path');

let reader = fs.createReadStream(path.join(__dirname,'sample.txt'),'utf-8')
let writer = fs.createWriteStream(path.join(__dirname, "sample-copy.txt"),'utf-8');

reader.pipe(writer);
reader.resume();
