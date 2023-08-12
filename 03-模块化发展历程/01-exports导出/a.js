const bar = require("./b.js");
console.log(bar.name);
//新增代码
setTimeout(() => {
  bar.name = "kobe"; //在引用的地方修改值，看源文件会不会被修改
}, 2000);
