let EventEmitter = require('events');
let Clock = class extends EventEmitter{
  constructor(){
    super();
    this.interval = 2000;
    this.timer = null;
  }
  start(){
    if(this.timer){
      this.stop();
    }
    this.timer = global.setInterval(()=> {
      this.emit('tick', 'こんにちは');
    },this.interval)
  }
  stop(){
    if(!this.timer) return;
    global.clearInterval(this.timer);
    this.timer = null;
  }
};

module.exports = Clock;