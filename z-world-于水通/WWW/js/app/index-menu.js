define(['myutil','app/myfn1','jquery'],function (x, url,$) {
    function getMenuData(root3) {
        var xhr = x();  //创建ajax对象
        xhr.open('get',url.getBaseUrl() + '/menu');
        xhr.send(null);
        xhr.onreadystatechange = function (e) {
            if(xhr.readyState === 4){
//              console.log(xhr.responseText);
                var menus = JSON.parse(xhr.responseText);
                menus.forEach(function (elem, index) {
                    var menuUl = document.createElement("ul");
                    var li = document.createElement("li");
	                var h2 = document.createElement('h2');
	                
                    root3.appendChild(menuUl);
                    menuUl.appendChild(li);
                    li.appendChild(h2);
                    menuUl.setAttribute('class','banner-ul');
                    li.setAttribute('class','banner-li');
                    
                    h2.innerHTML = elem["title"];
                    
                    
                	var divShow = document.createElement('div');
                	divShow.setAttribute('class','divShow');
                    li.appendChild(divShow);
                	for (var i = 0; i < menus[index].mainCity.length; i++) {
		                var a1 = document.createElement('a');
	                    divShow.appendChild(a1);
                    	a1.innerHTML = menus[index].mainCity[i];
                	}
                	
                	$('.banner-ul').css('position','relative');
                    $('.banner-li').css({
                    	'height': '57px',
						'border-bottom': '1px solid #59462a',
                    	'padding-left': '52px',
                    	'padding-top': '10px'
                    });
                    $('.banner-li h2').css({
                    	'font-size': '18px',
                    	'color': '#fff'
                    });
                    $('.banner-li div a').css({
                    	'font-size': '16px',
                    	'padding': '5px 4px 0 0',
                    });
                    $('.banner-li:first').css({
                    	'height': '67px',
                    });
					$('.banner-li:last').css({
						'border': 'none'
                   });
					$('.banner-ul:eq(0)').css('background', 'url(images/banner-02.gif) no-repeat 10px 10px');
					$('.banner-ul:eq(1)').css('background', 'url(images/banner-03.gif) no-repeat 10px 10px');
					$('.banner-ul:eq(2)').css('background', 'url(images/banner-04.gif) no-repeat 10px 10px');
					$('.banner-ul:eq(3)').css('background', 'url(images/banner-05.gif) no-repeat 10px 10px');
					$('.banner-ul:eq(4)').css('background', 'url(images/banner-06.gif) no-repeat 10px 10px');
					$('.banner-ul:eq(5)').css('background', 'url(images/banner-07.gif) no-repeat 10px 10px');
                	$('.banner-ul:eq(6)').css('background', 'url(images/banner-08.gif) no-repeat 10px 10px');
                	
					var divHide = document.createElement('div');
					divHide.setAttribute('class','divHide');
	                li.appendChild(divHide);
					
					var moreCity = menus[index].moreCity;
					for (var j = 0; j < moreCity.length; j++) {
						var hideH3 = document.createElement('h3');
						hideH3.setAttribute('class','hideH3');
	                	divHide.appendChild(hideH3);	                	
						hideH3.setAttribute('class','hideH3');
						hideH3.innerHTML = moreCity[j].cityName;
						
						var divHideNr = document.createElement('div');
						divHideNr.setAttribute('class','divHideNr');
	                	divHide.appendChild(divHideNr);
						
						var items = moreCity[j].items;
						for (var k = 0; k < items.length; k++) {
								var hideA = document.createElement('a');
								hideA.setAttribute('class','hideA');
								hideA.setAttribute('href','#');
								hideA.innerHTML = items[k];
	                			divHideNr.appendChild(hideA);
								
//								var hideImg = document.createElement('img');
//								hideImg.src = menus[index].moreCityImg;
//	                			$('.divHideNr:eq(2)').append(hideImg);
						}
					}
					
					$('.divHide').css({
						'width': '700px',
						'height': '420px',
						'display': 'none',
						'overflow': 'hidden',
//						'background': 'red'
					});
					$('.divHide:eq(0)').css({
						'position': 'absolute',
						'left': '280px',
						'top': '0px'
					})
					$('.divHide:eq(1)').css({
						'position': 'absolute',
						'left': '280px',
						'top': '-67px'
					})
					$('.divHide:eq(2)').css({
						'position': 'absolute',
						'left': '280px',
						'top': '-124px'
					})
					$('.divHide:eq(3)').css({
						'position': 'absolute',
						'left': '280px',
						'top': '-181px'
					})
					$('.divHide:eq(4)').css({
						'position': 'absolute',
						'left': '280px',
						'top': '-238px'
					})
					$('.divHide:eq(5)').css({
						'position': 'absolute',
						'left': '280px',
						'top': '-295px'
					})
					$('.divHide:eq(6)').css({
						'position': 'absolute',
						'left': '280px',
						'top': '-352px'
					})
					$('.hideH3').css({
						'width': '300px',
						'font-size': '24px',
						'border-bottom': '1px solid #ccc',
						'line-height': '36px',
						'padding-left': '10px'
					})
					$('.divHideNr').css({
						'display': 'inline-block',
						'width': '300px',
						'float': 'left'
//						'margin': '10px 10px'						
					})
					$('.hideA').css({
						'display': 'inline-block',
						'padding': '5px 2px'
					})
//					
//					
					$('.banner-li')[index].onmouseenter = function(e){
						$('.divHide')[index].style.display = 'block';
						$('.divHide')[index].style.background = '#fff';
						$('.banner-li')[index].style.background = '#fff';
						$('.banner-li h2')[index].style.color = '#000';
					}
					$('.banner-li')[index].onmouseleave = function(e){
						$('.divHide')[index].style.display = 'none';
						$('.banner-li')[index].style.background = '#442c11';
						$('.banner-li h2')[index].style.color = '#fff';
						
					}


 
                })
            }
        }
    }
    return getMenuData;
    
});