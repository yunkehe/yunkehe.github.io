
var $dragImage = $('#dragImag');
var $dragBox = $('.dragbox');
var dragTarget;

$dragImage.bind('dragstart', function(e){
	console.log('dragstart')
})

$dragImage.bind('dragend', function(e){
	e.stopPropagation();
	e.preventDefault();

	var $target = $(e.currentTarget);
	dragTarget = $target.remove();
	console.log(dragTarget)
});

$dragBox.bind('dragenter', function(e){

	e.stopPropagation();
	e.preventDefault();
	//$(e.currentTarget).addClass('over');

})

$dragBox.bind('dragover', function(e){
	e.stopPropagation();
	e.preventDefault();
});

$dragBox.bind('drop', function(e){


	e.stopPropagation();
	e.preventDefault();
	//e.origin.dataTranfer
	//被拖动目标 dragend事件 和放置目标drop事件同时触发

	setTimeout(function(){
		$(e.currentTarget).append(dragTarget);
	},50)

	//$(e.currentTarget).removeClass('over');

})