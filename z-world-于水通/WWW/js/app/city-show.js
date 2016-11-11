define(['jquery','myutil','app/myfn1'],function($,x,url){
	function getCityData(root2){
		var xhr = x();
		xhr.open('get',url.getBaseUrl()+'/city');
		xhr.send(null);
		xhr.onreadystatechange = function(e){
			if(xhr.readyState === 4){
				showCity(xhr.responseText);
			}
		}
	}
	return getCityData;
	
	function showCity(data){
		var citys = JSON.parse(data);
		
		citys.forEach(function(elem,index){
			$('.show-img:eq('+ index+') img').attr('src',elem.imgurl);
			$('.show-p-p1:eq('+ index+')').html(elem.address);
			$('.show-p-span1:eq('+ index+')').html(elem.browseCount);
			$('.show-p-span2:eq('+ index+')').html(elem.soldCount);
			$('.show-h1 a h1:eq('+ index+')').html(elem.title);
			$('.show-pp-span1:eq('+ index+')').html(elem.oldPrice);
			$('.show-pp-span2:eq('+ index+')').html(elem.newPrice);
			$('.show-pp-p1:eq('+ index+')').html(elem.introduce[0]);
			$('.show-pp-p2:eq('+ index+')').html(elem.introduce[1]);
			$('.show-pp-p3:eq('+ index+')').html(elem.introduce[2]);
			
			
			var indexs = index + 1;
			var btnPage = $('<button>'+indexs+'</button>');
			$('.page').append(btnPage);
			
			//添加事件
			btnPage.on('click',function(e){
//				citys.forEach(function(elem,index){
					console.log(index)
//					$('.show-img:eq('+ index+') img').attr('src',elem.imgurl);
//					$('.show-p-p1:eq('+ index+')').html(elem.address);
//					$('.show-p-span1:eq('+ index+')').html(elem.browseCount);
//					$('.show-p-span2:eq('+ index+')').html(elem.soldCount);
//					$('.show-h1 a h1:eq('+ index+')').html(elem.title);
//					$('.show-pp-span1:eq('+ index+')').html(elem.oldPrice);
//					$('.show-pp-span2:eq('+ index+')').html(elem.newPrice);
//					$('.show-pp-p1:eq('+ index+')').html(elem.introduce[0]);
//					$('.show-pp-p2:eq('+ index+')').html(elem.introduce[1]);
//					$('.show-pp-p3:eq('+ index+')').html(elem.introduce[2]);
					$('.show-img img').attr('src',elem.imgurl);
					$('.show-p-p1').html(elem.address);
					$('.show-p-span1').html(elem.browseCount);
					$('.show-p-span2').html(elem.soldCount);
					$('.show-h1 a h1').html(elem.title);
					$('.show-pp-span1').html(elem.oldPrice);
					$('.show-pp-span2').html(elem.newPrice);
					$('.show-pp-p1').html(elem.introduce[0]);
					$('.show-pp-p2').html(elem.introduce[1]);
					$('.show-pp-p3').html(elem.introduce[2]);
//				})
			})
//			$('.show-box').clone().appendTo($('.show-div'));
			
			
			
		});
		
	}
})