

// // 現在のディレクトリパスを表示
// console.log(__dirname)

// // 現在のファイルパスを表示する
// console.log(__filename)

// // setTimeout()を試す
// setTimeout(()=> console.log('kitayo'), 100)

// console.log('mada?')

// // 重い処理を入れると処理が止まること
// // シングルスレッドが新しい処理を立ち上げるわけではない

// var end = (new Date()).getTime() + 300;
// while ((new Date()).getTime() < end) {}

// 遅延実行メソッドを利用して実行順を確認
// Timersのところに来たタイミングでは100ms立ってないため、checkのImmediateが先に実行
setTimeout(()=> console.log('setTimeout'),1)
// 意図的に直近のタイマーで実行したい場合はsetImmediateを利用する子が推奨される￥
setImmediate(()=> console.log('setImmediate'))
// 処理開始時にキューを確認されるため、最初に実行
process.nextTick(()=> console.log('nextTick'))
Promise.resolve().then(()=> console.log('Promise'))