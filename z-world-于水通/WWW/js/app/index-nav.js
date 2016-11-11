
define(['myutil','app/myfn1','jquery'],function (x, url,$) {
    function getNavData(root1) {
        var xhr = x();  //创建ajax对象
        xhr.open('get',url.getBaseUrl() + '/nav');
        xhr.send(null);
        xhr.onreadystatechange = function (e) {
            if(xhr.readyState === 4){
//              console.log(xhr.responseText);
                var navs = JSON.parse(xhr.responseText);
                navs.forEach(function (elem, index) {
                    var li = document.createElement("li");
                    var a = document.createElement("a");
	                var img = document.createElement('img');
//	                img.setAttribute('src',elem["img"])
                    a.innerHTML = elem["name"];
                    a.href = elem['url'];
//	                img.src = elem['img'];
                    root1.appendChild(li);
                    li.appendChild(a);
	                a.appendChild(img);
    				$('.nav .nav-ul li:eq(2) img').attr('src','images/nav-01.gif');
                })
            }
        }
    }
    return getNavData;
});