/* 
* @Author: anchen
* @Date:   2016-03-16 14:31:17
* @Last Modified by:   anchen
* @Last Modified time: 2016-03-16 15:38:27
*/
    
// $('#eventTest li').click(function(e) {
//     /* Act on the e */
//     var $target = $(e.currentTarget);
//     console.log($target.html());
// });

$('#eventTest').delegate('li', 'click', function(e) {
    var $target = $(e.currentTarget);
    console.log($target.html());
});

var $li = $('#eventTest li');

$li.bind('refresh.widgt', function(event,eventData) {
    /* Act on the event */
    console.log(eventData);
});

$('#triggerBtn').bind('click',function(e){
    $li.trigger('refresh.widgt',{'name':'heke'});
})

$.fn.tabs = function(control){

    var $ele = $(this),
        $control = $(control);

    $ele.delegate('li', 'click', function(event) {
        var tabName = $(this).attr('data-tab');
        $ele.trigger('change.tabs',tabName);
    });

    $ele.bind('change.tabs',function(e,tabName){
        $ele.find('>[data-tab]').removeClass('active');
        $ele.find('>[data-tab="'+tabName+'"]').addClass('active');
        
        $control.find('>[data-tab]').removeClass('active');
        $control.find('>[data-tab="'+tabName+'"]').addClass('active');
    })
    
    var tabName = $ele.find('li:first').attr('data-tab');
    $ele.trigger('click',tabName);

    return this;
}

$('#tabs').tabs('#tabsContent');