let fs = require('fs');
let path = require('path');
let util = require('util');

const file = path.posix.join(__dirname,'sample.txt');

// const fileOutput =  fs.readFile(file,'utf-8',(err,data) => {
//   if(!err) {
//     fs.writeFile(file,'aaaaaa' ,'utf-8', (err)=>{
//       if(err){
//         console.log(err.message);
//         return;
//       }

//     })
//   }
//   else {
//     console.log(err.message)
//     return;
//   }
// });

// プロミス化されたオブジェクトが取得
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

// 非同期且つ即時実行
(async function(){
try{
  // 非同期で読み込んで非同期で書き込む
  let data = await readFile(file,'utf-8');
  await writeFile(path.posix.join(__dirname,'sample2.txt'),data, 'utf-8')
  console.log('200');
}
catch(err){
  console.log(err.message);
}
})();

// async / awaitなし版
// readFile(file,'utf-8').
// then((data) => {
//   return writeFile(path.posix.join(__dirname,'sample2.txt'),data, 'utf-8')
// }
//   ).then(() => console.log('200'))
//   // ここは書き込みと読み込みどちらのエラーもとる
//   .catch((err) => console.log(err.message))