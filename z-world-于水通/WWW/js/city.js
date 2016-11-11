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

define(['app/index-nav','app/city-show'],function(nav,show){
	var root1 = document.querySelector(".nav-ul");
    nav(root1);
    var root2 = document.querySelector(".show-div");
    show(root2);
})


