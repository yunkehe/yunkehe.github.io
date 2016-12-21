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
		if(flag == 'about'){
			canvasObj.wrapper.style.display = 'none';
		}else{
			canvasObj.wrapper.style.display = 'block';
		}
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

		console.log('params', bRect)

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


