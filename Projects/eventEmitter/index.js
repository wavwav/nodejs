let Clock = require('./clock')
let i =0
let clock = new Clock();
clock.on('tick', (msg) => {console.log(`${msg} tick now ${++i}`); if(i >5){clock.stop();}});
clock.start();