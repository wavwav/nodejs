let {fork} = require('child_process');
let path = require('path');

let child =  fork(path.join(__dirname,'child.js'), { execArgv: []});
child.on('close',(code) =>{
  console.log('child process is Done!')
})