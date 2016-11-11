//依赖简单的对值
requirejs.config({
	baseUrl: 'js/lib',
	paths: {
		'app': '../app',
		'jquery': 'jquery-3.1.1',
		'myutil': '../app/myutil'
	},
	shim: {
		'myutil': {
			exports: 'createXHR'
		}
	}
});

//作用：1、定义模块2、也可以在模块里定义依赖
//define([字符串数组]//(用来描述依赖),回调函数)
define(['app/index-nav','app/index-banner','app/index-menu','app/index-main','app/index-find'],function(nav,banner,menu,main,find){
    //调用nav模块的方法
    var root1 = document.querySelector(".nav-ul");
    nav(root1);
    var root2 = document.querySelector(".banner-lb-ul");
    banner(root2);
    var root3 = document.querySelector(".banner-div");
    menu(root3); 
    var root4 = document.querySelector(".main-zyx");
    main(root4);
    var root5 = document.querySelector(".header-nav-sousu");
    find(root5);
});