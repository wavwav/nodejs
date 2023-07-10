const iconv = require('iconv-lite');
const fs = require('fs');
const path = require('path');


fs.readFile(path.join(__dirname, 'sample.txt'),(err,data)=>{

  console.log(iconv.decode(data,'shiftjis'));

})

fs.writeFile(path.join(__dirname, 'test.txt'),
iconv.encode('こんにちは村','shiftjis'),
(err) => console.log('ok')
)

let reader = fs.createReadStream(path.join(__dirname,'sample.txt'));
let decoder = iconv.decodeStream('shiftjis');

reader.pipe(decoder);
decoder.on('data', (chunk) =>{
  console.log(chunk)
})

reader.resume();

let encoder = iconv.encodeStream('shiftjis')
let writer = fs.createWriteStream(path.join(__dirname, 'test2.txt'))
encoder.pipe(writer);
encoder.write('こん');
encoder.end();