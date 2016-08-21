function foo(){
	console.log( a );
}

function bar(){
	var a = 3;
	foo();
}

var a = 2;
bar();

