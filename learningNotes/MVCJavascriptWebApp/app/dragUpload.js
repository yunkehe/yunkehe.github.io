/**
 * Created by yunkehe on 2016/4/8.
 */

var $dragzone = $('.dragbox');

// 拖拽进入
$dragzone.bind('dragenter', function(e){
    e.stopPropagation();
    e.preventDefault();
    $(e.currentTarget).addClass('over');
})

// 拖拽在拖拽区域时
$dragzone.bind('dragover',function(e){

    // console.log(e.originalEvent.dataTransfer)
    // 设置拖拽时 鼠标提
    e.originalEvent.dataTransfer.dropEffect = 'copy';

    e.stopPropagation();
    e.preventDefault();
})

// 释放拖拽
$dragzone.bind('drop', function(e){

    var files = e.originalEvent.dataTransfer.files;

    e.stopPropagation();
    e.preventDefault();
    $(e.currentTarget).removeClass('over');

    for(var i=0; i<files.length; i++){
        alert(files[i].name)
    }
})

// 拖拽离开
$dragzone.bind('dragleave', function(e){

    e.stopPropagation();
    e.preventDefault();
    $(e.currentTarget).toggleClass('over');

})

