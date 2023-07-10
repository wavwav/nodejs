let EventEmitter = require('events');
let ee = new EventEmitter();
ee.on('_event', ()=>{console.log('first event')});
ee.on('_event', ()=>{console.log('second event')});
ee.on('_event', ()=>{console.log('third event')});

ee.emit('_event');