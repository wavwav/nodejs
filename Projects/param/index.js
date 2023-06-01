// console.log(JSON.stringify(process.env,null,2))

// 配列
// ０番目はNode、1番目は指定した実行ファイル
// node index.jsで実行しているため
console.log(process.argv)

console.log(process.cwd())
console.log(__dirname)

console.log(process.platform)

console.log('aa %j',{a:1})
