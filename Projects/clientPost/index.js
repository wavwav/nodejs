let http = require('http');
let data ='Hello Wold '
let url = 'http://localhost:8000'
let options ={
  method: 'POST',
  headers:{
    // formでPOSTしたような状態を目指す
    'Content-Type':'application/x-www-form-urlencoded',
    // Byteの長さを取得できる
    'Content-Lengrh':Buffer.byteLength(data)
  }
}

let req = http.request(url, options, (res) =>{

  console.log(res);

})
req.on('error',(err) =>{
  console.log(err.message)
})

req.end(data);