define({
	baseUrl: 'http://localhost',
	port: 9000,
	getBaseUrl: function(){
		return this.baseUrl + ':' + this.port;
	}
})