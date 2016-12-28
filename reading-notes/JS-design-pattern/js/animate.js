// 缓动算法
var tween = {
	linear: function(t, b, c, d){
		return c*t/d + b;
	},
	easeIn: function(t, b, c, d){
		return c * (t/=d) * t + b;
	},
	strongEaseIn: function(t, b, c, d){
		return c * (t/=d)*t*t*t*t + b;
	},
	strongEaseOut: function(t, b, c, d){
		return c * ((t=t/d -1)*t*t*t*t+1)+b;
	},
	sineaseIn: function(t, b, c, d){
		return c*(t/=d)*t*t +b;
	},
	sineaseOut: function(t, b, c, d){
		return c*((t=t/d-1)*t*t+1)+b;
	}
};

var Animate = function(dom, tween){
	this.dom = dom;
	this.startTime = 0;
	this.startPos = 0;
	this.endPos = 0;
	this.propertyName = null; // 需要修改的css属性
	this.tween = tween;
	this.easing = null;
	this.duration = null;
};

Animate.prototype.start = function(propertyName, endPos, duration, easing){
	this.startTime = +new Date();
	this.startPos = this.dom.getBoundingClientRect()[propertyName];
	this.endPos = endPos;
	this.propertyName = propertyName;
	this.easing =  this.tween[easing];
	this.duration = duration;

	var self = this;
	var timeId = setInterval(function(){
		if(self.step() == false){
			clearInterval(timeId);
		}
	}, 19);
};

Animate.prototype.step = function(){
	var t = +new Date();
	if(t >= this.startTime + this.duration){
		this.update(this.endPos);
		return false;
	}

	// 缓动算法参数 
	var pos = this.easing(t-this.startTime, this.startPos, 
		this.endPos - this.startPos, this.duration);

	this.update(pos);
};

Animate.prototype.update = function(pos){
	this.dom.style[this.propertyName] = pos + 'px';
};