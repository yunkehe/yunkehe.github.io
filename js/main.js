Function.prototype.method = function(name, func){
	if( this.prototype[name] ){
		return;
	}else{
		this.prototype[name] = func;

		return this;
	}
}