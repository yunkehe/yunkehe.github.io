
// html5 history API

$(window).bind('popstate', function(event) {

    var event = event.originalEvent;

    if(event.state){
        // history.pushState();
    }
});