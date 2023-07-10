let crypto = require('crypto')

module.exports = randomString = () =>{
    const S="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const N=16;
    const rundomArray = Array.from(crypto.randomFillSync(new Uint32Array(N))).map((n)=>S[n%S.length]).join('');
    return rundomArray;
}