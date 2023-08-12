let name = 'bar'
exports.name = name
//新增代码
setTimeout(() => {
	console.log(exports.name) //会被修改
},4000)