function print(msg){
	//2016-10-11 11:13:50
	var now = new Date();
	var result = now.getFullYear() + "-" +
	 (now.getMonth() + 1) + "-" +  now.getDate();
	console.log("时间："+result + "，打印内容：" +msg);
}
exports.print = print;//对外开放