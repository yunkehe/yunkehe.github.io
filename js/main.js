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
	}

	for(var i=0; i<jumpBtn.length; i++){
		jumpBtn[i].addEventListener('click', handler);
	}


};

// 初始化
init('pro-list');
// 切换效果