
const { setUncaughtExceptionCaptureCallback } = require('process');
const {Readable} = require('stream')
let randomString = require('./randomString')

const data = randomString();

let CustomReader = class extends Readable{
  constructor(options){
    super(options || {encoding: 'utf-8'});

    // startは前回読み込んだ場所を保存して置く必要があり、classの変数として保存しておく
    this._current = 0;
  }

  // sizeに指定された文字列をdataから取得してpush
  _read(size){

    let start  = this._current;
    let end = start + size < data.length ? start + size : data.length;
    let chunk;

    try{
    chunk = data.slice(start,end);
    }catch(err){
      process.nextTick(() => {this.emit('error',err)});
      return;
    }

    this.push(chunk)

    if(start + size < data.length){
      this._current = end;
    }else{
      this.push(null);
    }
  }



};

module.exports = CustomReader
