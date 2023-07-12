let http = require('http');
let server = http.createServer((req,res) => {
console.log(req);
});

server.listen(8080)