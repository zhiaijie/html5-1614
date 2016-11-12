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
		var n = 3;//一页有几个showBox
		
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
			

			if((index+1)%n == 0){
				index = index+1;
				var btnPage = $('<button>'+index/n+'</button>');
				$('.page').append(btnPage);
			}
		});
		
		//添加事件
		$('.page button:eq(0)').on('click',function(e){
			
			citys.forEach(function(elem,index){
				if(index < n){
					$('.show-box:eq('+index+')').css('display','block');
					
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
				}else{
					$('.show-box:eq('+index+')').css('display','none');
					
				}
			})
		})
		$('.page button:eq(1)').on('click',function(e){
			
			citys.forEach(function(elem,index){
				if(index < n){
//					console.log($('.show-box:eq('+index+')'));
					$('.show-box:eq('+index+')').css('display','none');
				}else{
//					console.log(index)
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
					$('.show-box:eq('+index+')').css('display','block');
//					console.log($('.show-box:eq(3) img'))
					
				}
			})
		})
		
	}
})



// define(['jquery','app/url','ajax'],function($,url,xhr){
// 	function content(){
// 		$.ajax({
// 			type:"get",
// 			url:url.getBaseURL()+'/cityWalkList',
// 			async:true,
// 			success:callback
// 		});
// 		var i=0;
// 		function callback(data){
// 			var dj=$('.fy li');
// 			var xyy=$('.xyy');
// 			var box=$('.cw-main-content');
// 			var arr=data.slice(0,3);
// 			creatElem();
// 			function creatElem(){
// 				var arr=data.slice(3*i,3*i+3);
// 				arr.forEach(function(elem,index){
// 					var li=$('<li></li>');
// 					var img=$('<img />').attr('src',elem.imgurl);
// 					li.append(img);
// 					var div1=$('<div><button>'+elem.address+'</button><span class="flright"><span class="ff">'+elem.browseCount+'</span>次浏览<span class="ff">'+elem.soldCount+'</span>件已售</span></div>');
// 					li.append(div1);
// 					var h3=$("<h3><a href='#'>"+elem.title+"</a></h3>");
// 					li.append(h3);
// 					var p1=$('<p>'+elem.introduce[0]+'</p>');
// 					li.append(p1);
// 					var p2=$('<p>'+elem.introduce[1]+'</p>');
// 					li.append(p2);
// 					var p3=$('<p>'+elem.introduce[2]+'<span class="flright"><span class="old">'+elem.oldPrice+'元</span><span class="dz">'+elem.newPrice+'</span>元起</span></p>');
// 					li.append(p3);
// 					var div2=$('<div><a href="#" class="flright">立即订购</a></div>');
// 					li.append(div2);
// 					box.append(li);
// 				});
// 			}
// 			dj.each(function(index1,elem1){
// 				$(this).on('click',function(){
// 					box.html('');
// 					dj.css('background','none');
// 					$(this).css('background','#16CBB3');
// 					i=index1;
// 					creatElem();
// 				});
// 			});	
// 			xyy.on('click',function(){
// 				i++;
// 				box.html('');
// 				dj.css('background','none');
// 				dj.eq(i).css('background','#16CBB3');
// 				creatElem();
				
// 				if(!box.html()){
// 					var li1=$('<li></li>').html('已经是最后一页');
// 					box.append(li1);
// 				}
// 			})
// 		}
// 	}
// 	return content;
// });