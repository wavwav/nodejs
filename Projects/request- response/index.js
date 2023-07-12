let http = require('http')
let fs = require('fs');
let path = require('path');

let server = http.createServer((req,res) => {

console.log(`[${((new Date()).toISOString())}]` + `${req.method} ${req.url}` + `${req.headers["X-header"]}`)
const method = req.method;
if( method === 'POST'){
req.pipe(res)
}else{
var reader = fs.createReadStream(path.join(__dirname,'sample.txt'), 'utf-8')
reader.pipe(res);
}


})

server.listen(8000);