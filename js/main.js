/* 关于 作品链接 联系 */
// 项目链接
function init(id) {
	// {

	// 	'name': 'nodejs博客',
	// 	'href': 'http://yunheke.tk:9000/'
	// }
	    projects = [{
		'name': '诺亚教育平台教师PC端',
		'href': 'http://e.anoah.com'
	},{
		'name': '诺亚教育平台学生PC端',
		'href': 'http://e.anoah.com/ebags'
	}];

	var proList = document.getElementById(id);

	for(var i=0, length=projects.length; i<length; i++){
		var a = document.createElement('a'),
		    li = document.createElement('li');
		
		a.href = projects[i].href;
		a.target = '_blank';
		a.innerText = projects[i].name;
	
		li.appendChild(a);
		proList.appendChild(li);
	}

	// tab切换...
	var tabContent = document.querySelectorAll('.tab-content'),
		jumpBtn = document.querySelectorAll('.jump-btn');

	function handler(e){
		var target = e.currentTarget;
		var flag = target.getAttribute('flag');

		for(var i=0; i<tabContent.length;i++){
			tabContent[i].style.display = 'none';
		}

		document.querySelector('.tab-content.'+flag).style.display = 'block';

		if(flag == 'about' ){
			if( domCache.Dabout.getAttribute('flag') == 1 ){
				return;
			}
			domCache.Dabout.setAttribute('flag', 1);
			domCache.Daudio.play();
			canvasObj.wrapper.style.display = 'none';
			// editingObj.initEditContent(false);
			// startEdit(0, 0);
			startEdit(0, 0);
		}else{
			domCache.Dabout.setAttribute('flag', 0);
			domCache.Daudio.pause();
			canvasObj.wrapper.style.display = 'block';
		}

		editingObj.initEditContent(false);
	}

	for(var i=0; i<jumpBtn.length; i++){
		jumpBtn[i].addEventListener('click', handler);
	}

};

// 初始化
init('pro-list');

function createCanvas(){

	var canvasWrapper = document.getElementById('canvas-wrapper'),
		bRect = canvasWrapper.getBoundingClientRect();

		// console.log('params', bRect)

	var myCanvas = document.createElement("canvas");
		myCanvas.setAttribute("width", bRect.width - 17 );
		myCanvas.setAttribute("height", bRect.height - 17);
		myCanvas.setAttribute("id", "myCanvas");
		canvasWrapper.appendChild(myCanvas);	

	var mycanvas = document.getElementById("myCanvas");

	return 	{
		wrapper: canvasWrapper,
		mycanvas: mycanvas,
		ctx: mycanvas.getContext('2d'),
		maxWidth: mycanvas.width,
		maxHeight: mycanvas.height
	};
}
var colors = ["#33B5E5", "#0099CC", "#AA66CC", "#9933CC", "#99CC00", "#669900", "#FFBB33", "#FF8800", "#FF4444", "#CC0000"];

// 动态创建canvas;
var canvasObj = createCanvas();

function drawCircle(x, y, radius, color){
	var ctx = canvasObj.ctx;
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI*2);
	ctx.fillStyle = color;
	ctx.fill();
	ctx.closePath();
}

// 返回max到min之间的整随机数
function getRandom(max, min){
	return Math.floor( Math.random()*(max-min)+min );
}


function Ball(){
	this.forwardX = true;
	this.forwardY = true;

	this.x = 400;
	this.y = 300;
	this.radius = getRandom(30, 10);
	this.color = colors[getRandom(colors.length, 0)];

	var speed = getRandom(8, 3);

	// 根据角度计算随机方向
	var direction = Math.random()*Math.PI*2;

	this.moveX = Math.cos(direction)*speed;
	this.moveY = Math.sin(direction)*speed;

}

Ball.prototype.move = function(){
	var maxWidth = canvasObj.maxWidth,
		maxHeight = canvasObj.maxHeight;

	if(this.forwardX){
		this.x += this.moveX;
		if(this.x >= (maxWidth - this.radius) || this.x <= this.radius){
			this.forwardX = false;
		}

	}else{
		this.x -= this.moveX;
		if(this.x >= (maxWidth - this.radius) || this.x <= this.radius){
			this.forwardX = true;
		}
	}

	if(this.forwardY){
		this.y += this.moveY;
		if(this.y >= (maxHeight - this.radius) || this.y <= this.radius ){
			this.forwardY = false;
		}
	}else{
		this.y -= this.moveY;
		if(this.y >= (maxHeight - this.radius) || this.y <= this.radius){
			this.forwardY = true;
		}
	}

	drawCircle(this.x, this.y, this.radius, this.color);
	
}

function start(){
	var ctx = canvasObj.ctx,
		mycanvas = canvasObj.mycanvas;

	var balls = [];
	for(var i=0; i<20; i++){
		balls[i] = new Ball();
	}

	setInterval(function(){
		ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);

		for(var j=0; j<balls.length; j++){
			balls[j].move();
		}

	}, 20)

}
// 動畫效果
start();

// 打字效果
var editingObj = {
	words : [' Hello, my friend!',
				"It's my great honor that you are here,",
				"I'm hunting a web frontend developer job,",
				'If you have some interest, contact me!',
				'-- From Yours'],
	content: 'intro-article-content',
	// true 添加内容 false 删除内容
	initEditContent: function(flag){
		var content = document.getElementById(this.content);

		if( flag ){
			for(var x=0,l=this.words.length; x<l; x++){
				var p = document.createElement('p'),
					em = document.createElement('em');
				p.appendChild(em);
				content.appendChild(p);
			}
		}else{
			// chrome中不能用foreach
			for(var x=0, l = this.words.length; x<l; x++){
				content.querySelectorAll('em')[x].innerHTML = '';
			}
		}
	}
};

var startEdit = (function editing(){
	var words = this.words || '';
	var content = document.getElementById(this.content);
	var i = 0, j=0;

	var newWords = words.map(function(v){ return v.split('')});

	this.initEditContent(true);

	var Qem = content.querySelectorAll('em');
	
// console.log(newWords)
	return function inputOne(x, y){
		if( typeof x == 'number' ) i = x;
		if( typeof y == 'number' ) j = y;

		var line = newWords[i];

		if( line && line[j] ){
			if(line[j] == ' ') line[j] = '&nbsp;';
			Qem[i].innerHTML = (Qem[i].innerHTML + line[j]);
			setTimeout(inputOne, 130);
			j++;
		}else{
			j = 0;
			if(newWords[++i]){
				// line = words[i].split('');
				inputOne();
			}else{
				domCache.Daudio.pause();
				return;
			}
		}
	};

}).call(editingObj);

// dom cache
var domCache = {
	Daudio: document.getElementById('keypress-audio'),
	Dabout: document.querySelector(".tab-content.about")
}



