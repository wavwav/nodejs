const { Writable } = require('stream');

let CustomWriter = class extends Writable {
  constructor(options){
    super(options || {decodeString:true});
  }

  _write(chunk ,encoding , done){

    let text;

    if(encoding === 'buffer'){
      // toString()でencodeを指定する必要がある
      // writable stateと呼ばれるオブジェクトの中にdefaultEncodingというプロパティがあるため、そちらを使う
      text = chunk.toString(this._writableState.defaultEncoding);
    }else{
      text = chunk;
    }

    // 基本の実装
    try {
    // consoleの部分は通常ファイルやDBになる
    console.log(text);

    }catch(err){

      done(err);
      return;

    }

    done();

  }

};

module.exports = CustomWriter;