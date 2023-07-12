let http = require('http');
let url = 'http://localhost:8000'
let options ={
  method: 'GET'
}

let req = http.request(url, options, (res) =>{

  //res.pipe(process.stdout);
  console.log(res)

})
req.end();