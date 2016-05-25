/**
 * Created by Administrator on 2016/4/9.
 */
var pushBtn = document.getElementById('pushBtn'),
    replaceBtn = document.getElementById('replaceBtn')

function pushStateFun(){

    //向history插入一条记录
    history.pushState({'name':'media'},'', '../html/media.html');
    window.location.href = window.location.href;

}

function replaceStateFun(){

    // 更新当前状态
    history.replaceState({'name':'media'},'', '../html/media.html');
    window.location.href = window.location.href;

};

function popStateFun(e){

    var state = e.state;
    if(state){
        //processState(state);
    }
}

pushBtn.addEventListener('click', pushStateFun);
replaceBtn.addEventListener('click', replaceStateFun);
window.addEventListener('popstate', popStateFun);