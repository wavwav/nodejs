let EventEmitter = require('events');
let ee = new EventEmitter();

let ontick = function(){
  console.log('now tick');
 //ee.off('event',ontick);
};

// ee.on('event', ontick);

// ee.once('event', ontick)


ee.on('event', function(){
 console.log('function:\r\n', this);
})

ee.on('event', () => {
console.log('arrow:\r\n', this);
})

ee.emit('event');
ee.emit('event');
// ee.emit('event');
