define(function(require, exports, module){

	var u = navigator.userAgent;

	var check_navigator = {

		isAndroid : function(){
			return u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
		},

		isiOS : function(){
			return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
		}	
	};

	module.exports = check_navigator;
});