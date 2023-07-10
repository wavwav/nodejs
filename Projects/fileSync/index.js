let fs = require('fs');
let path = require('path');

// 一度読み込んだものはそのまま保存される
const fsRead = fs.readFileSync(path.posix.basename('Projects/fileSync/sample.txt'),'utf-8');
console.log(fsRead);

fs.writeFileSync(path.posix.basename('Projects/fileSync/sample2.txt'),'update now','utf-8')

console.log(fsRead);