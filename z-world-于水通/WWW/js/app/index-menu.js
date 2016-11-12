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
                	for (var i = 0; i < elem.mainCity.length; i++) {
		                var a1 = document.createElement('a');
		                a1.setAttribute('href','#')
	                    divShow.appendChild(a1);
                    	a1.innerHTML = elem.mainCity[i];
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
                    	'color': '#ccc'
                    });
                    $('.banner-li:first').css({
                    	'height': '67px'
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
					
					var moreCity = elem.moreCity;
					for (var j = 0; j < moreCity.length; j++) {
						var hideHideBox = document.createElement('div');
						hideHideBox.setAttribute('class','hideHideBox');
		                divHide.appendChild(hideHideBox);
						var hideH3 = document.createElement('h3');
	                	hideHideBox.appendChild(hideH3);	                	
						hideH3.setAttribute('class','hideH3');
						var divHideNr = document.createElement('div');
						divHideNr.setAttribute('class','divHideNr');
	                	hideHideBox.appendChild(divHideNr);

	                	
	                	

						hideH3.innerHTML = moreCity[j].cityName;
//						console.log(moreCity.length)
						
						
						var divImg = document.createElement('div');
						divImg.setAttribute('class','divImg');
	                	hideHideBox.appendChild(divImg);
						for (var k = 0; k < moreCity[j].items.length; k++) {
							if(moreCity[j].items[k].length>30){
								var hideImg = document.createElement('img');
								hideImg.src = moreCity[j].items[k];
	               	 			divImg.appendChild(hideImg);
								hideImg.style.height = '120px';
								hideImg.style.width = '160px';

							}else{
								var hideA = document.createElement('a');
								hideA.setAttribute('class','hideA');
								hideA.setAttribute('href','#');
								hideA.innerHTML = moreCity[j].items[k];
	                			divHideNr.appendChild(hideA);
							}
							
						}
					}
					var hideImg1 = document.createElement('img');
	                var divImg1 = document.createElement('div');
					hideImg1.src = elem.moreCityImg;
	               	divImg1.appendChild(hideImg1);
	               	hideHideBox.appendChild(divImg1);

	               	hideImg1.style.width = '300px';
					
					$('.divHide').css({
						'width': '700px',
						'height': '420px',
						'display': 'none',
						'overflow': 'hidden'
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
						'padding-left': '20px'
					})
					$('.divHideNr').css({
						'display': 'inline-block',
						'width': '300px',
						'margin': '10px 10px'						
					})
					$('.hideHideBox').css({
						'width': '350px',
						'float': 'left'
					})
					$('.divImg').css({
						'display': 'inline-block',
						'width': '600px',
						'margin': '10px 100px'						
					})
					$('.hideA').css({
						'font-size': '16px',
						'display': 'inline-block',
						'padding': '5px 2px',
						'color': '#ccc'
					})
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