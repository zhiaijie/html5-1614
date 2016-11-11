define(['myutil','app/myfn1','jquery'],function (x, url,$) {
	function getMainData(root4){
		var xhr = x();  //创建ajax对象
        xhr.open('get',url.getBaseUrl() + '/main');
        xhr.send(null);
        xhr.onreadystatechange = function (e) {
        	if(xhr.readyState === 4){
        		showOn(xhr.responseText);
        	}
        }
	}
	return getMainData;
	
	function showOn(data1){
		var mains = JSON.parse(data1);
        mains.forEach(function (elem, index) {
			$('.main-top-ul li:eq('+ index+') a').html(elem.title);
			
			var datas = mains[0].data;
        	datas.forEach(function(elem1,index1){
//	            console.log(elem1.imgUrl[index1]);
        		$('.main-zyx-pics:eq('+index1+') img').attr('src',  elem1.imgUrl);
        		$('.main-zyx-price:eq('+index1+') span').html(elem1.price);
        		$('.main-zyx-titles:eq('+index1+') h3').html(elem1.title);
        		$('.main-zyx-titles:eq('+index1+') p').html(elem1.time);
        	})
        	
        	//事件
	    	$('.main-top-ul li:eq('+ index +')').mouseenter(showLi);
        	function showLi(e){
	        	var datas = mains[index].data;
	        	datas.forEach(function(elem1,index1){
	//	            console.log(elem1.imgUrl[index1]);
	        		$('.main-zyx-pics:eq('+index1+') img').attr('src',  elem1.imgUrl);
	        		$('.main-zyx-price:eq('+index1+') span').html(elem1.price);
	        		$('.main-zyx-titles:eq('+index1+') h3').html(elem1.title);
	        		$('.main-zyx-titles:eq('+index1+') p').html(elem1.time);
	        	}) 
        	}
		})
	}
})
