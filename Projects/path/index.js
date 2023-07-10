var path = require('path');

// 課題①
console.log(path.dirname('Projects/path/index.js'));
console.log(path.basename('Projects/path/index.js'));
console.log(path.extname('Projects/path/index.js'));
// 課題②
console.log(path.join('Projects/path','index.js'));
// 課題③
console.log(path.posix.normalize('/sample/lib/../index.html'));