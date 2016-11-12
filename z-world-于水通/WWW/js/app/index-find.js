define(['jquery','myutil','app/myfn1'],function($,x,url){
	function getFindData(root5){
		var input = $('.header-nav-sousu input');
		var hideUl = $('.header-nav-sousu .hideUl');
		
//		$('.header-nav-sousu>a').on('mouseenter',function(){
//			input.css('display','block');
//			input.animate({'left':'0px'},100);
////			imgBg.attr('src','img/seach-bg.gif')
//		}).on('mouseleave',function(){
//			input.animate({'left':'180px'},100);
//			input.css('display','none');
////			imgBg.attr('src','img/logo-bg4.gif')
//		})
		var flag = false;
		
		input.focus(function(e){
			var flag = true;
			var arr = '';
			
			hideUl.css('display','block');
			
			$(this).keyup(function(e){
				if (input.val() == '') {
					arr ='';
				};
				//判断按下的键是否是0-9或a-z或退格键
				if ((e.keyCode <= 57 && e.keyCode >= 48) || (e.keyCode >= 65 && e.keyCode <= 90) || e.keyCode == 8) {
					if (e.keyCode == 8) {
						arr = arr.substring(0 , arr.length - 1);
					}else{
						arr += e.key;//写入的数据,字符串拼接
					}
				}
				console.log(arr);
				
				var xhr = x();
				xhr.open('get',url.getBaseUrl() + '/sitesearch/:' + arr);
				xhr.send(null);
				xhr.onreadystatechange = function(e){
					if(xhr.readyState === 4){
						handle(xhr.responseText);
					}
				}
				function handle(arr){
					var arry = JSON.parse(arr).data.list;
					arry.forEach(function(elem,index){
						var hideLi = $('<li></li>');
						var hideA = $('<a></a>');
						hideA.css({
							'font-size': '20px'
						})
						hideUl.append(hideLi);
						hideLi.append(hideA);
						hideA.html(elem.word);
						hideA.attr('href',elem.url);
						var handleIn = function (e){
							hideLi.css('background','#ccc')
						}
						var handleOut = function (e){
							hideLi.css('background','#fff')
						}
						hideLi.hover(handleIn,handleOut);
						// hideLi.bind('mouseenter mouseleave',handleInOut);
//						console.log(arry);
						console.log(elem.url)
					})
				}
			})
			input.blur(function(e){
				hideUl.html('');
				input.val('')
				hideUl.css('display','none');
			})
		})
		
	}
	return getFindData;
})