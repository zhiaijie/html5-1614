var express = require('express');
var fs = require('fs');
var app = express();


//存储从文件读取的数据
var navData = null;
var bannerData = null;
var menuData = null;
var mainData = null;
var cityData = null;

//读取文件中的数据
fs.readFile('data/nav.json',function(err1,data1){
	if(err1)
		throw new Error('读取数据出错1!');
	navData = data1;
	fs.readFile('data/banner.json',function(err2,data2){
		if(err2)
			throw new Error('读取数据出错2!');
		bannerData = data2;
		fs.readFile('data/menu.json',function(err3,data3){
			if(err3)
				throw new Error('读取数据出错3!');
			menuData = data3;
			fs.readFile('data/freeWalk.json',function(err4,data4){
				if(err4)
					throw new Error('读取数据出错4!');
				mainData = data4;
				fs.readFile('data/cityWalkList.json',function(err5,data5){
					if(err5)
						throw new Error('读取数据出错5!');
					cityData = data5;
					app.listen(9000);
					console.log('服务器已启动。。。');
				})
			})
		})
	})	
})

//定义了一个静态页面的web服务
app.use(express.static('public'));

//跨域访问里的cross方法
app.all('/*', function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'X-Requested-With');
	res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
	next();
});

app.get("/nav",function(req,res){
    res.header("Content-type","application/json");
	res.send(navData);
});

app.get("/banner",function(req,res){
    res.header("Content-type","application/json");
	res.send(bannerData);
});

app.get("/menu",function(req,res){
    res.header("Content-type","application/json");
	res.send(menuData);
});

app.get("/main",function(req,res){
    res.header("Content-type","application/json");
	res.send(mainData);
});

app.get("/city",function(req,res){
    res.header("Content-type","application/json");
	res.send(cityData);
});

var http = require('http');

//方式一
//suggest组件
app.get('/sitesearch/:keyword' , function (req , res) {
	var url = req.params.keyword;
	// console.log(url)
// 查询本机ip    //http://z.qyer.com/qcross/home/ajax?action=sitesearch&keyword=b&timer=1478686648677&_=1478678019964
    var sreq = http.request({
        host:     'z.qyer.com', // 请求发送到目标主机的IP地址
        path:     '/qcross/home/ajax?action=sitesearch&keyword='+url, //请求的目标路径
        method:   'get' // 请求方式
    }, function(sres){
        sres.pipe(res); //响应本地服务器的响应
        sres.on('end', function(){
            console.log('done');
        });
    });
    if (/POST|PUT/i.test(req.method)) {
        req.pipe(sreq);
    } else {
        sreq.end();
    }
})

/*
//方式二
//suggest组件
app.get('/sitesearch',function(req,res){

    //获取用户传递过来的参数
    var arg = req.query['kw'];
    httpSearch(arg,function(info){
        res.send(JSON.parse(info));
    });
    console.log(req.query['kw']);
});

function httpSearch(kwVal,callback){
    http.get('http://z.qyer.com/qcross/home/ajax?action=sitesearch&keyword=' + kwVal, function(httpRes) {
        var buffers = [];
        httpRes.on('data', function(chunk) {
            buffers.push(chunk);
        });
        httpRes.on('end', function(chunk) {
            var wholeData = Buffer.concat(buffers);
            var dataStr = wholeData.toString('utf8');
            callback(wholeData);
        });
    }).on('error', function(e) {
        console.log(e);
    });
}
*/

