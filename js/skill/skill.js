function function_name(argument) {
	// body...
}

/*
 *  把数组展开成参数
*/
function foo(a, b){
	console.log("a:"+ a + ", b:" + b);
};

foo.call(null, [2, 4]);
// var bar = foo.bind(null, 2);

/*
 * 	空对象
*/
var $o = Object.create(null);

/*
 * Array.prototype.slice.call(arguments, 1);
*/

var curried = [].slice.call([2, 3, 4, 5], 1);

/*
 * 软绑定
*/

if( !Function.prototype.softBind ){
	Function.prototype.softBind = function(obj){
		var fn = this;

		var curried = [].slice.call(arguments, 1);
		var bound = function(){
			return fn.apply(
					(!this || this == (window || global)) ?
					obj : this,
					curried.concat.apply(curried, arguments)
				);
		};
		bound.prototype = Object.create( fn.prototype );
		return bound;
	};
}