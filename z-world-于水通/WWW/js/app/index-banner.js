define(['myutil','app/myfn1','jquery'],function (x, url,$) {
    function getBannerData(root2) {
        var xhr = x();  //创建ajax对象
        xhr.open('get',url.getBaseUrl() + '/banner');
        xhr.send(null);
        xhr.onreadystatechange = function (e) {
            if(xhr.readyState === 4){
//              console.log(xhr.responseText);
                var banners = JSON.parse(xhr.responseText);
                
                banners.forEach(function (elem, index) {
                    var li = document.createElement("li");
                    var a = document.createElement("a");

                    a.href = elem['href'];
                    a.setAttribute('class','banner-lb-a')
                    li.setAttribute('class','banner-lb-li');
                    li.style.background = 'url(' + elem['imgUrl'] + ')';
                    root2.appendChild(li);
	                li.appendChild(a);
					
					var bannerLbDiv = $('.banner-lb');
					var bannerLbUl = $('.banner-lb-ul');
					var bannerLbLi = $('.banner-lb-li');
					
					$('.banner-lb-a').css({
						'width': '1583px',
						'height': '420px',
						'display': 'inline-block'
					})
					bannerLbDiv.css({
						'width': '1583px',
						'height': '420px',
						'overflow': 'hidden',
						'position': 'relative'
					})
					bannerLbUl.css({
						'width': '6332px',
						'height': '420px',
						'position': 'absolute',
						'left': '0px',
						'top': '0px',
						'transition': 'all 1s'//让轮播图滑动
					})
					bannerLbLi.css({
						'width': '1583px',
						'height': '420px',
						'float': 'left'
					})					
					
					var left = bannerLbUl[0].offsetLeft;
//					console.log(left);
					
					//定时器
					var timer = setInterval(lbt,2000);
					function lbt(){
						left-=1583;
						bannerLbUl.css('left',left + "px");
						if (left<= -6332) {
							left=0;
							bannerLbUl.css('left',left + 'px');
						}	
//						console.log(left);
					}	
					
					//添加鼠标事件
	                var btn1 = $('.banner-left');
	                var btn2 = $('.banner-right');
	                bannerLbDiv.on('mouseenter',function(e){
	                	clearInterval(timer);	             						btn1.show(1000);
						btn2.show(1000);
	                })
	                 bannerLbDiv.on('mouseleave',function(e){
						timer = setInterval(lbt,2000);
	                	btn1.hide(1000);
	                	btn2.hide(1000);
	                })
	                  
	                btn1.on('click',function(e){
	                	left -=1583;
						bannerLbUl.css('left',left + "px");
						if(left <= -6332){
							left = 0;
							bannerLbUl.css('left',left +'px');
						}
	                })
	                btn2.on('click',function(e){
						if(left >= 0){
							left = -6332;
							bannerLbUl.css('left',left +'px');
						}
	                	left +=1583;
						bannerLbUl.css('left',left + "px");
	                })
	                
	                $('.banner-lb-ol li:eq('+ index +')').on('click',function(){
	                	console.log($('.banner-lb-li:eq('+ index +')'))
	                })
                })
            }
        }
    }
    return getBannerData;
});