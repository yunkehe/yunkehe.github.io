var $dragImage = $('#dragImag');
var $dragImage = $('.dragTarget');

var $dragBox = $('.dragbox');
var dragTarget,
	data = 'my name is heke';

function dragStartFun(e){
	var dataTransfer = e.originalEvent.dataTransfer;

	console.log('dragstart')
	// 设置dataTransfer数据
	e.originalEvent.dataTransfer.setData('text', data);

	//设置 effectAllowed
	//dataTransfer.effectAllowed = 'move';
}

$dragImage.bind('dragstart', dragStartFun)


$dragImage.bind('dragend', function(e){
	e.stopPropagation();
	e.preventDefault();

	var $target = $(e.currentTarget);
	dragTarget = $target.remove();

});

$dragBox.bind('dragenter', function(e){

	var dataTransfer = e.originalEvent.dataTransfer;

	e.stopPropagation();
	e.preventDefault();
	//$(e.currentTarget).addClass('over');

	//	设置dropEffect
	//dataTransfer.dropEffect = 'move';
	//console.log('dropEffect', dataTransfer)

})

$dragBox.bind('dragover', function(e){
	e.stopPropagation();
	e.preventDefault();
});

$dragBox.bind('drop', function(e){

	var dataTransfer = e.originalEvent.dataTransfer;

	e.stopPropagation();
	e.preventDefault();
	//e.originalEvent.dataTranfer
	//被拖动目标 dragend事件 和放置目标drop事件同时触发

	setTimeout(function(){
		$(e.currentTarget).append(dragTarget);
		//firefox
		$dragImage.bind('dragstart', dragStartFun)

	},50)

	var result = dataTransfer.getData('text');
	//console.log('接收到的数据 ', result);
	console.log('dropEffect ', dataTransfer.dropEffect);
	//$(e.currentTarget).removeClass('over');

})