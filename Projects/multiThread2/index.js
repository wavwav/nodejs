let {fork} = require('child_process');
let path = require('path');

let child = fork(path.join(__dirname,('child.js')),{execArgv:[]})

child.send({parent: 'hello from parent'});

child.on('message', (data) =>{
    console.log(data)
});

child.on('close',(code) =>{
  console.log(`now Done ${code}`)
})